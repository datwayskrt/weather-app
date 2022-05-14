import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({
    current: {},
    location: {}
  });

  const [city, setCity] = useState("London");
  const api_key = "432a0e168aa04bcdba4222432221304";
  const baseUrl = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;
  useEffect(() => {
    axios.get(baseUrl).then(
      (res) => {
        const content = res.data;
        setData({
          current: res.data.current,
          location: res.data.location
        });
        console.log(content);
        setData(content);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [baseUrl]);

  return (
    <div className="App">
      <h1>Weather App | CodeSandbox</h1>
      <h2>Enter the City!</h2>
      <input
        type="text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <p>City: <span>{data.location.name}</span></p>
      <p>Temperature: <span>{data.current.temp_c} ºC</span></p>
      <img src = {data.current.condition.icon} alt="icon"/>
      <p>Condition: <span>{data.current.condition.text}</span></p>
      <p>Wind Direction: <span>{data.current.wind_dir}</span></p>
      <p>Country: <span>{data.location.country}</span></p>
      <p>Local Time: <span>{data.location.localtime}</span></p>
      <p>Continent: <span>{data.location.tz_id}</span></p>

    </div>
  );
}
