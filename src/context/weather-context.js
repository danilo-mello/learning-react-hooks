import React, { useState, createContext } from 'react'
import axios from 'axios'

export const WeatherContext = createContext({
    city: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    addCity: () => {},
    addTemp: () => {},
    addTempMin: () => {},
    addTempMax: () => {}
})

const WeatherContextProvider = (props) => {

    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [tempMax, setTempMax] = useState("");

    const getData = (cityReceived) => {

        if (cityReceived.lenght !== null) {

            const getWeather = async () => {

                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityReceived}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
                const resp = await axios.get(url);
                setCity(resp.data.name)
                setTemp(resp.data.main.temp)
                setTempMin(resp.data.main.temp_min)
                setTempMax(resp.data.main.temp_max)
                
              };
          
              getWeather();

        }

    }




    return (
        <WeatherContext.Provider value={ { getData: getData, city: city, temp: temp, tempMin: tempMin, tempMax: tempMax } }>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider