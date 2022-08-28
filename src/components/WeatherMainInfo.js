import styles from "./WeatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="100%"
            alt={weather?.current.condition.text}
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>{weather?.current.condition.text}</div>
          <div className={styles.current}>{weather?.current.temp_c}</div>
        </div>
      </div>
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10955.94428079578!2d${weather?.location.lon}!3d${weather?.location.lat}73!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1652415508282!5m2!1ses!2sec`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
