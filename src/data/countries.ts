export interface Country {
  id: string;
  name: string;
  flag: string;
}

export const countries: Country[] = [
  { id: 'iceland', name: 'Iceland', flag: '🇮🇸' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰' },
  { id: 'estonia', name: 'Estonia', flag: '🇪🇪' },
  { id: 'latvia', name: 'Latvia', flag: '🇱🇻' },
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪' },
];

export const getCountryById = (id: string | null) =>
  countries.find((c) => c.id === id) || null;
