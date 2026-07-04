import React, { useMemo } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature as topojsonFeature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry, Position } from 'geojson';
import world from 'world-atlas/countries-50m.json';
import { REGIONS } from '@/data/regions';
import { getArticleCount } from '@/data/news';

const MAP_WIDTH = 760;
const MAP_HEIGHT = 720;

type CountryFeature = Feature<Geometry>;

interface InteractiveBalticMapProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

const COUNTRY_VISUAL_OFFSETS: Record<string, { lon: number; lat: number }> = {
  iceland: {
    lon: 16,
    lat: -1.5,
  },
};

function normalizeIsoNumeric(value: unknown) {
  return String(value).padStart(3, '0');
}

function getPolygonCentroid(polygon: Position[][]): [number, number] {
  const ring = polygon[0];

  if (!ring || ring.length === 0) {
    return [0, 0];
  }

  let sumLon = 0;
  let sumLat = 0;

  for (const point of ring) {
    const lon = point[0] ?? 0;
    const lat = point[1] ?? 0;

    sumLon += lon;
    sumLat += lat;
  }

  return [sumLon / ring.length, sumLat / ring.length];
}

function cleanCountryFeature(
  featureItem: CountryFeature,
  regionId: string
): CountryFeature | null {
  if (regionId !== 'norway') {
    return featureItem;
  }

  if (featureItem.geometry.type === 'Polygon') {
    const [lon, lat] = getPolygonCentroid(featureItem.geometry.coordinates);

    const keep = lon > 2 && lon < 33 && lat > 57 && lat < 72.5;

    return keep ? featureItem : null;
  }

  if (featureItem.geometry.type === 'MultiPolygon') {
    const filteredPolygons = featureItem.geometry.coordinates.filter((polygon) => {
      const [lon, lat] = getPolygonCentroid(polygon);

      return lon > 2 && lon < 33 && lat > 57 && lat < 72.5;
    });

    if (filteredPolygons.length === 0) {
      return null;
    }

    return {
      ...featureItem,
      geometry: {
        ...featureItem.geometry,
        coordinates: filteredPolygons,
      },
    } as CountryFeature;
  }

  return featureItem;
}

function offsetCoordinates(
  coordinates: unknown,
  offset: { lon: number; lat: number }
): unknown {
  if (
    Array.isArray(coordinates) &&
    typeof coordinates[0] === 'number' &&
    typeof coordinates[1] === 'number'
  ) {
    return [coordinates[0] + offset.lon, coordinates[1] + offset.lat];
  }

  if (Array.isArray(coordinates)) {
    return coordinates.map((item) => offsetCoordinates(item, offset));
  }

  return coordinates;
}

function repositionCountryFeature(
  featureItem: CountryFeature,
  regionId: string
): CountryFeature {
  const offset = COUNTRY_VISUAL_OFFSETS[regionId];

  if (!offset) {
    return featureItem;
  }

  return {
    ...featureItem,
    geometry: {
      ...featureItem.geometry,
      coordinates: offsetCoordinates(
        'coordinates' in featureItem.geometry ? featureItem.geometry.coordinates : [],
        offset
      ),
    },
  } as CountryFeature;
}

const InteractiveBalticMap: React.FC<InteractiveBalticMapProps> = ({
  selected,
  onSelect,
}) => {
  const regionByIsoNumeric = useMemo(() => {
    return new Map(REGIONS.map((region) => [region.isoNumeric, region]));
  }, []);

  const regionIdByIsoNumeric = useMemo(() => {
    return new Map(REGIONS.map((region) => [region.isoNumeric, region.id]));
  }, []);

  const { countries, pathGenerator } = useMemo(() => {
    const worldTopology = world as unknown as {
      objects: {
        countries: unknown;
      };
    };

    const countriesCollection = topojsonFeature(
      world as unknown as Parameters<typeof topojsonFeature>[0],
      worldTopology.objects.countries as Parameters<typeof topojsonFeature>[1]
    ) as unknown as FeatureCollection<Geometry>;

    const allCountries = countriesCollection.features;

    const selectedIsoNumbers = new Set(REGIONS.map((region) => region.isoNumeric));

    const preparedCountries = allCountries
      .filter((country) => selectedIsoNumbers.has(normalizeIsoNumeric(country.id)))
      .map((country) => {
        const isoNumeric = normalizeIsoNumeric(country.id);
        const regionId = regionIdByIsoNumeric.get(isoNumeric);

        if (!regionId) return null;

        const cleanedCountry = cleanCountryFeature(country, regionId);

        if (!cleanedCountry) return null;

        return repositionCountryFeature(cleanedCountry, regionId);
      })
      .filter((country): country is CountryFeature => Boolean(country));

    const collection: FeatureCollection<Geometry> = {
      type: 'FeatureCollection',
      features: preparedCountries,
    };

    const projection = geoMercator().fitSize([MAP_WIDTH, MAP_HEIGHT], collection);
    const generatedPath = geoPath(projection);

    return {
      countries: preparedCountries,
      pathGenerator: generatedPath,
    };
  }, [regionIdByIsoNumeric]);

  function handleKeyDown(
    event: React.KeyboardEvent<SVGPathElement>,
    regionId: string
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(regionId);
    }
  }

  return (
    <div className="baltic-svg-map-shell">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label="The Baltic See country selector"
        className="country-map region-map large-map main-entry-map"
      >
        {countries.map((country) => {
          const isoNumeric = normalizeIsoNumeric(country.id);
          const region = regionByIsoNumeric.get(isoNumeric);

          if (!region) return null;

          const path = pathGenerator(country);

          if (!path) return null;

          const articleCount = getArticleCount(region.id);
          const isSelected = region.id === selected;

          return (
            <path
              key={region.id}
              d={path}
              className={`map-country ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelect(region.id)}
              onKeyDown={(event) => handleKeyDown(event, region.id)}
              tabIndex={0}
              role="button"
              aria-label={`${region.name}. ${articleCount} news articles.`}
            >
              <title>
                {`${region.name} · ${articleCount} news article${
                  articleCount === 1 ? '' : 's'
                }`}
              </title>
            </path>
          );
        })}
      </svg>
    </div>
  );
};

export default InteractiveBalticMap;
