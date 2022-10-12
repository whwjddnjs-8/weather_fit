import { useState, useEffect } from 'react';
import styles from "./Home.module.scss"
import loadingImg from "../images/cloud.png"
import MainWeather from '../components/main-weather/MainWeather';
import MainWeatherCmmty from '../components/main-weather-cmnty/MainWeatherCmnty';

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

    return (
        <div>
            { loading ?
                <div className={styles.loading}>
                  <img src={loadingImg} />
          </div> :
          <div>
            <MainWeather icon={icon} today={today} weather={weather} />
            <MainWeatherCmmty />
          </div>
            }
        </div>  
    )
}

export default Home;