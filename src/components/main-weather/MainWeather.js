import styles from "./MainWeather.module.scss";
import Header from '../../components/header/Header';

function MainWeather({icon, today, weather}) {
    return (
        <div className={styles.main_weather}>
          <Header />
            <div className={styles.weather_area}>
                <i className={`wi wi-day-${icon}`}></i>
                <div className={styles.weather_desc}>
                  <h2>
                    {today}
                    <span>{weather.main.temp} °C / {weather.main.humidity} %</span>
                  </h2>
                  <p>{weather.weather[0].description}</p>
                </div>
                <div className={styles.btn_area}>
                  <p>Show Weather Fit</p>
                  <i className='xi-angle-down-thin'></i>
                </div>
            </div>
        </div>
    )
}
export default MainWeather