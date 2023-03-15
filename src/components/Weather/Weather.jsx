import React, { useEffect } from 'react'
import Search from './Search'
import img from '../../assets/images/sunny.png';
import { useGetWeather } from '../../hooks/useGetWeather';

const Weather = () => {

    const api = "http://api.openweathermap.org/data/2.5/forecast?q=Chiguayante&appid=6f84acbbbfca7b6a604570cd66a36115&units=metric&lang=sp";

    const options = {
        method: "GET",
    }
    const x = useGetWeather(api, options)
    console.log(x);
    const getWeather = async () => {
        // const options = {
        //     method: "GET",
        // }
        // const request = await fetch(api, options);
        // const data = await request.json();
        // if (data.cod == "200") {
        //     console.log(data);
        // } else {
        //     console.log("bad");
        // }
    }
    useEffect(() => {
        //getWeather();
    }, []);

    return (
        <div className="container">
            <Search />
            <h3>Clima en...</h3>
            {x.cod === "200" ?
                <>
                    <article className="card-weather">
                        <h1>{x.city.name}, {x.city.country}</h1>
                        <section className="weather-info">
                            <div className="box-temperature">
                                <section>
                                    <img src={img} alt="image" />
                                    <span className="temperature">{Math.ceil(x.list[0].main.temp)}°</span>
                                </section>
                                <section>
                                    <p>
                                        <i className="fa-solid fa-wind"></i>
                                        <span>{x.list[0].wind.speed} km/h</span>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-droplet"></i>
                                        <span>{x.list[0].main.humidity}%</span>
                                    </p>
                                </section>
                            </div>
                            <div className="description">
                                <span>{x.list[0].weather[0].description.toUpperCase()}</span>
                            </div>
                        </section>

                    </article>
                    <table className="table-weather">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>
                                    <span>Hoy</span>
                                    <div className="date-time">14 mar</div>
                                    <div className="date-time">
                                        <div className="max-temperature">
                                            <i className="fa-solid fa-arrow-trend-up"></i>
                                            <span>23°</span>
                                        </div>
                                        <div className="min-temperature">
                                            <i className="fa-solid fa-arrow-trend-down"></i>
                                            <span>3°</span>
                                        </div>
                                    </div>
                                </th>
                                {x.list.map(i => {
                                    if (i.dt_txt == "2023-03-15 09:00:00") {

                                        return <th>
                                            <span>{Date.getDay(i.dt_txt)}</span>
                                            <div className="date-time">{i.dt_txt.split("")}</div>
                                            <div className="date-time">
                                                <div className="max-temperature">
                                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                                    <span>23°</span>
                                                </div>
                                                <div className="min-temperature">
                                                    <i className="fa-solid fa-arrow-trend-down"></i>
                                                    <span>3°</span>
                                                </div>
                                            </div>
                                        </th>
                                    }
                                    if (i.dt_txt == "2023-03-16 09:00:00") {

                                        return <th>Jueves</th>
                                    }
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>06:00am</td>
                                <td className="data-weather">
                                    <img src={img} className="ico" />
                                    <span>13°</span>
                                </td>
                            </tr>
                            <tr>
                                <td>09:00am</td>
                            </tr>
                            <tr>
                                <td>12:00pm</td>
                            </tr>
                            <tr>
                                <td>15:00pm</td>
                            </tr>
                            <tr>
                                <td>18:00pm</td>
                            </tr>
                            <tr>
                                <td>21:00pm</td>
                            </tr>
                            <tr>
                                <td>23:59pm</td>
                            </tr>
                        </tbody>
                    </table>

                </>
                : <h1>No hay nada</h1>
            }
        </div>
    )
}

export default Weather