import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import img from '../../assets/images/sunny.png';
import { useGetWeather } from '../../hooks/useGetWeather';
import { AuthContext } from '../../hooks/useContext';

const Weather = () => {

    const { setInputCity, inputCity, options, api } = useContext(AuthContext);

    const { weather: data, fetchData } = useGetWeather(api, options);
    //console.log(data);
    const getWeather = (e) => {
        const date = new Date(e);
        let day = date.getDay();
        return day;
    }
    useEffect(() => {
        fetchData();
        //console.log(api);

    }, [inputCity]);


    return (
        <div className="container">
            <Search />
            {data.cod !== "200" ?
                <div className="magic">
                    <h1 className="empty-message">No hay información para esta ciudad</h1>
                </div>

                :
                <div className="magic">
                    <h3>Clima en...</h3>
                    <article className="card-weather">
                        <h1>{data.city.name}, {data.city.country}</h1>
                        <section className="weather-info">
                            <div className="box-temperature">
                                <section>
                                    {/* {data.list[0].weather[0].description == "muy nuboso"
                                        ? <img src={img} alt="image" />
                                        : <img src="sd" alt="image" />

                                    } */}
                                    {
                                        data.list[0].weather[0].main == "Clouds" && <img src="src/assets/images/cloud.png" alt="image" />
                                    }
                                    {
                                        data.list[0].weather[0].main == "Rain" && <img src="src/assets/images/rain.png" alt="image" />
                                    }
                                    {
                                        data.list[0].weather[0].main == "Clear" && <img src="src/assets/images/sunny.png" alt="image" />
                                    }
                                    {
                                        data.list[0].weather[0].main == "Snow" && <img src="src/assets/images/snow.png" alt="image" />
                                    }
                                    {
                                        data.list[0].weather[0].main == "Haze" && <img src="src/assets/images/haze.png" alt="image" />
                                    }

                                    <span className="temperature">{Math.ceil(data.list[0].main.temp)}°</span>
                                </section>
                                <section>
                                    <p>
                                        <i className="fa-solid fa-wind"></i>
                                        <span>{data.list[0].wind.speed} km/h</span>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-droplet"></i>
                                        <span>{data.list[0].main.humidity}%</span>
                                    </p>
                                </section>
                            </div>
                            <div className="description">
                                <span>{data.list[0].weather[0].description.toUpperCase()}</span>
                            </div>
                        </section>

                    </article>
                    <table className="table-weather">
                        <thead>
                            <tr className="col-h">
                                <th className="data-weather-header">Hora</th>
                                {data.list.map((i) => {
                                    let day = getWeather(i.dt_txt)
                                    let dayOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
                                    let dayName;
                                    //if (day != getWeather(i.dt_txt) ) {
                                    dayOfWeek.map((d, i) => {
                                        if (i == day) {
                                            dayName = d;
                                        };
                                    })
                                    let result = [];
                                    //recorto la prop dt_txt para tener solo la hora
                                    data.list.filter((i, j) => {
                                        if (getWeather(i.dt_txt) == day) {
                                            result.push(i.main.temp_max)
                                        }
                                    })
                                    let z = i.dt_txt.split(" ");
                                    if (getWeather(z[0]) != day && z[1] == "15:00:00") {
                                        return <th className="data-weather-header" key={i.dt}>
                                            <span>{dayName}</span>
                                            <div className="date-time">
                                                <div className="max-temperature">
                                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                                    <span>{Math.ceil(i.main.temp_max)}°</span>
                                                </div>
                                                <div className="min-temperature">
                                                    <i className="fa-solid fa-arrow-trend-down"></i>
                                                    <span>{Math.ceil(i.main.temp_min) - 8}°</span>
                                                </div>
                                            </div>
                                        </th>
                                    }
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="col">


                                <td className="data-weather">09:00 am</td>
                                {data.list.map((i) => {
                                    let z = i.dt_txt.split(" ");
                                    if (z[1] == "09:00:00")
                                        if (z[0])

                                            return <td className="data-weather" key={i.dt}>
                                                {
                                                    i.weather[0].main == "Clouds" && <img className="ico" src="src/assets/images/cloud.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Rain" && <img className="ico" src="src/assets/images/rain.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Clear" && <img className="ico" src="src/assets/images/sunny.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Snow" && <img className="ico" src="src/assets/images/snow.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Haze" && <img className="ico" src="src/assets/images/haze.png" alt="image" />
                                                }
                                                <span>{Math.ceil(i.main.temp)}°</span>
                                            </td>


                                })}
                            </tr>
                            <tr className="col">
                                <td className="data-weather" >15:00 pm</td>
                                {data.list.map(i => {
                                    let z = i.dt_txt.split(" ");
                                    if (z[1] == "15:00:00")
                                        if (z[0])

                                            return <td className="data-weather" key={i.dt}>
                                                {
                                                    i.weather[0].main == "Clouds" && <img className="ico" src="src/assets/images/cloud.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Rain" && <img className="ico" src="src/assets/images/rain.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Clear" && <img className="ico" src="src/assets/images/sunny.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Snow" && <img className="ico" src="src/assets/images/snow.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Haze" && <img className="ico" src="src/assets/images/haze.png" alt="image" />
                                                }
                                                <span>{Math.ceil(i.main.temp)}°</span>
                                            </td>


                                })}
                            </tr>
                            <tr className="col">
                                <td className="data-weather">21:00 pm</td>
                                {data.list.map(i => {
                                    let z = i.dt_txt.split(" ");
                                    if (z[1] == "21:00:00")
                                        if (z[0])

                                            return <td className="data-weather" key={i.dt}>
                                                {
                                                    i.weather[0].main == "Clouds" && <img className="ico" src="src/assets/images/cloud.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Rain" && <img className="ico" src="src/assets/images/rain.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Clear" && <img className="ico" src="src/assets/images/sunny.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Snow" && <img className="ico" src="src/assets/images/snow.png" alt="image" />
                                                }
                                                {
                                                    i.weather[0].main == "Haze" && <img className="ico" src="src/assets/images/haze.png" alt="image" />
                                                }
                                                <span>{Math.ceil(i.main.temp)}°</span>
                                            </td>


                                })}
                            </tr>
                        </tbody>
                    </table>

                </div>
            }
        </div>
    )
}

export default Weather