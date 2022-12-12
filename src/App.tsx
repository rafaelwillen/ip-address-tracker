import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const setCoordinates = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <main className="h-screen overflow-hidden">
      <Header setCoordinates={setCoordinates} />
      <Map latitude={latitude} longitude={longitude} />
    </main>
  );
}

export default App;
