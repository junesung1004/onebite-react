import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  const handleLight = () => {
    setLight(light === "OFF" ? "ON" : "OFF");
  };
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button onClick={handleLight}>
        {light === "OFF" ? "전구 켜기" : "전구 끄기"}
      </button>
    </div>
  );
};

export default Bulb;
