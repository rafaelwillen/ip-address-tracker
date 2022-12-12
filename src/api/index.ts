import { GeoLocationAPIResponseType } from "./types";

const geolocationAPIKey = import.meta.env.VITE_GEOLOCATION_API_KEY as string;

export async function getIPAddress(ipAddress = "") {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${geolocationAPIKey}&ipAddress=${ipAddress}`
  );
  const data = (await response.json()) as GeoLocationAPIResponseType;
  return data;
}
