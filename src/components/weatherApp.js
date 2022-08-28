import { useEffect, useState } from "react";
import WheatherForm from "./weatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from "./WeatherApp.module.css";

export default function WheatherApp() {
  const [weather, setWheater] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e5b46f49dcaa4982883211639221205&aqi=no&q=${city}`
      );
      const json = await request.json();
      setWheater(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeSubmit = (city) => {
    setWheater(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WheatherForm onChangeCity={handleChangeSubmit} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
