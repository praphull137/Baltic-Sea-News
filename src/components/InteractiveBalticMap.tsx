import React, { useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Feature, Geometry } from 'geojson';
import 'leaflet/dist/leaflet.css';
import balticNordicGeo from '@/data/balticNordicCountries.geo.json';
import { getCountryById } from '@/data/countries';
import { getArticleCount } from '@/data/news';

interface CountryProps {
  id: string;
  name: string;
}

const geoData = balticNordicGeo as GeoJSON.FeatureCollection<Geometry, CountryProps>;
const bounds = L.geoJSON(geoData as GeoJSON.GeoJsonObject).getBounds();

interface InteractiveBalticMapProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

// FitBounds runs once on mount so the whole Baltic & Nordic region is
// framed automatically without hardcoding a center/zoom.
const FitBounds: React.FC = () => {
  const map = useMap();
  React.useEffect(() => {
    map.fitBounds(bounds, { padding: [16, 16] });
  }, [map]);
  return null;
};

const InteractiveBalticMap: React.FC<InteractiveBalticMapProps> = ({
  selected,
  onSelect,
}) => {
  const style = useMemo(
    () =>
      (feature?: Feature<Geometry, CountryProps>) => {
        const isSelected = feature?.properties.id === selected;
        return {
          color: isSelected ? '#03353E' : '#5C8C85',
          weight: isSelected ? 3 : 1.5,
          fillColor: isSelected ? '#D1835A' : '#5C8C85',
          fillOpacity: isSelected ? 0.65 : 0.25,
        };
      },
    [selected]
  );

  const onEachFeature = (feature: Feature<Geometry, CountryProps>, layer: L.Layer) => {
    const countryId = feature.properties.id;
    const country = getCountryById(countryId);
    const articleCount = getArticleCount(countryId);

    layer.bindTooltip(
      `<strong>${country?.flag ?? ''} ${feature.properties.name}</strong><br />${articleCount} News Article${
        articleCount === 1 ? '' : 's'
      }`,
      { sticky: true, direction: 'top', className: 'baltic-map-tooltip' }
    );

    layer.on({
      mouseover: (e) => {
        const target = e.target as L.Path;
        target.setStyle({ fillOpacity: 0.55, weight: 2.5 });
      },
      mouseout: (e) => {
        const target = e.target as L.Path;
        target.setStyle(style(feature));
      },
      click: () => onSelect(countryId),
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-700">
      <MapContainer
        center={[62, 15]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-80 w-full sm:h-96"
        // Future scalability: news/fact-check providers can be layered in
        // as additional <GeoJSON>/<Marker> children keyed by country id,
        // without changing this map's UI contract (selected/onSelect).
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds />
        <GeoJSON
          key={selected || 'none'}
          data={geoData}
          style={style as L.StyleFunction}
          onEachFeature={onEachFeature as (feature: GeoJSON.Feature, layer: L.Layer) => void}
        />
      </MapContainer>
    </div>
  );
};

export default InteractiveBalticMap;
