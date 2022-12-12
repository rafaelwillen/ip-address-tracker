export type GeoLocationAPIResponseType = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  as: {
    name: string;
    domain: string;
  };
  isp: string;
};
