import "mapbox-gl/dist/mapbox-gl.css";
import { FC, useRef } from "react";
import ReactMap, { MapRef, Marker } from "react-map-gl";
import IconArrow from "../assets/icon-location.svg";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_API_KEY as string;

type Props = {
  latitude: number;
  longitude: number;
};

const Map: FC<Props> = ({ latitude, longitude }) => {
  const mapRef = useRef<MapRef>(null);

  const isCenterOfMap = latitude === 0 && longitude === 0;

  if (!isCenterOfMap) {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      zoom: 12,
      duration: 2000,
    });
  }

  return (
    <ReactMap
      ref={mapRef}
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{
        latitude: 0,
        longitude: 0,
        zoom: 1,
      }}
      style={{ height: "62.5%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        draggable={false}
      >
        {!isCenterOfMap && <img src={IconArrow} />}
      </Marker>
    </ReactMap>
  );
};

export default Map;
