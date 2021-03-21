import React, { useState } from 'react'
import CityWeather from './CityWeather'

const Weather = () => {

    const [city, setCity] = useState('London')
    const [cityWeather, setCityWeather] = useState('London')

    const submitHandler = (e) => {
        e.preventDefault()
        setCityWeather(city)
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} ></input>
                <button type="submit">Search City</button>
                <CityWeather city={cityWeather} />

            </form>
        </div>

    )

}

export default Weather