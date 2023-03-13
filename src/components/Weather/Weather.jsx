import React, { useEffect } from 'react'
import Search from './Search'

const Weather = () => {

    const api = "http://api.openweathermap.org/data/2.5/forecast?q=Concepcion&appid=6f84acbbbfca7b6a604570cd66a36115";

    const getWeather = async () => {
        const options = {
            method: "GET",

        }
        const request = await fetch(api, options);
        const data = await request.json();
        if(data.cod == "200"){
            console.log(data);
        }else{
            console.log("bad");
        }
    }

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className="container">
            <Search />
            <h1>Clima de chile en ...</h1>
            <ul>
                <li>Hoy</li>
                <li>Lunes</li>
                <li>Martes</li>
                <li>Miercoles</li>
                <li>Jueves</li>
            </ul>

        </div>
    )
}

export default Weather