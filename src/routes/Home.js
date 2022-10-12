import { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from "./Home.module.scss"
import loadingImg from "../images/cloud.png"
import logoImg from "../images/logo3.png"
import cloud2 from "../images/cloud2.png"
import cloud3 from "../images/cloud3.png"

function Home() {
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState('3c84ba849490719d101e73ac26f5e0bc');
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState('wi-day-sunny');
  const [today, setToday] = useState('');
  
  const success = async (e) => {
    if (e.coords.latitude && e.coords.longitude) {
      let  json = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&appid=${api}&units=metric`)).json();
      setWeather(json);
      const date = new Date();
      setToday(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
      setLoading(false);
      if (json.weather[0].id + ''.charAt(0) == 2) {
        setIcon('lightning');
      } else if (json.weather[0].id + ''.charAt(0) == 3) {
        setIcon('hail');
      } else if (json.weather[0].id + ''.charAt(0) == 5) {
        setIcon('rain');
      } else if (json.weather[0].id + ''.charAt(0) == 6) {
        setIcon('snow-wind');
      } else if (json.weather[0].id + ''.charAt(0) == 7) {
        setIcon('fog');
      } else if (json.weather[0].id == 800) {
        setIcon('sunny');
      } else if (json.weather[0].id + ''.charAt(0) == 8 && json.weather[0].id != 800) {
        setIcon('cloudy');
      }
    }
  } 

  const getLocation = async () => {
    if (window.navigator.geolocation) {
      await window.navigator.geolocation.getCurrentPosition(success);
    }
  }
  
  useEffect(() => {
    getLocation();
  }, []);

  console.log(weather)

    return (
        <div>
             {
            loading ?
                <div className={styles.loading}>
                  <img src={loadingImg} />
                </div> :
        <div className={styles.main}>
              <Header />
              <div className={styles.logo_area}>
                  <img src={logoImg} />
                <img src={cloud2} className={styles.cloud1} />
                <img src={cloud3} className={styles.cloud2} />
              </div>
             
            <div className={styles.weather}>
                <div className={styles.weather_icon}>
                  <i className={`wi wi-day-${icon}`}></i>
                </div>
                <div className={styles.weather_desc}>
                  <h2 className={styles.today}>
                    {today}
                    <span>{weather.main.temp} °C / {weather.main.humidity} %</span>
                  </h2>
                  {/* <p className={styles.weather_loc}>({weather.name} / {weather.sys.country})</p> */}
                  <p className={styles.weather_loc}>{weather.weather[0].description}</p>
                </div>
                <div className={styles.btn_area}>
                  <p>Show Weather Fit</p>
                  <i className='xi-angle-down-thin'></i>
                </div>
            </div>
        </div>}
    </div>
       
        
        
        
    )
}

export default Home;