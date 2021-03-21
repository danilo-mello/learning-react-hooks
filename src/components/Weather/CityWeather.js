import React, { useContext, useEffect } from 'react'
import { WeatherContext } from '../../context/weather-context'

const CityWeather = (props) => {

    const weatherContext = useContext(WeatherContext)
  
    

    useEffect(() => {

        const callContext = () => {
            weatherContext.getData(props.city)
    
        }

        callContext()

    }, [props.city]);
  
    return (
      <>
        <h1>{weatherContext.city}</h1>
        <h1>Temp: {weatherContext.temp}</h1>
        <h1>Temp Min: {weatherContext.tempMin}</h1>
        <h1>Temp Max: {weatherContext.tempMax}</h1>
      </>
    )

}

export default CityWeather