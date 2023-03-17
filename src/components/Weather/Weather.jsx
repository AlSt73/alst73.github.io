import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import img from '../../assets/images/sunny.png';
import { useGetWeather } from '../../hooks/useGetWeather';
import { AuthContext } from '../../hooks/useContext';

const Weather = () => {

    const {api,x,setInputCity,inputCity} = useContext(AuthContext);

    
    //console.log(x);
    const getWeather = (e) => {
        const date = new Date(e);
        let day = date.getDay();
        return day;
    }

    useEffect(() => {
        //getWeather();
        x
    }, [inputCity]);

    return (
        <div className="container">
            <Search setInputCity={setInputCity} inputCity={inputCity}/>
            <h3>Clima en...</h3>
            {x.cod == "200" ?
                <>
                    <article className="card-weather">
                        <h1>{x.city.name}, {x.city.country}</h1>
                        <section className="weather-info">
                            <div className="box-temperature">
                                <section>
                                    {/* {x.list[0].weather[0].description == "muy nuboso"
                                        ? <img src={img} alt="image" />
                                        : <img src="sd" alt="image" />

                                    } */}
                                    {
                                        x.list[0].weather[0].main == "Clouds" && <img src="src/assets/images/cloud.png" alt="image" />
                                    }
                                    {
                                        x.list[0].weather[0].main == "Rain" && <img src="src/assets/images/rain.png" alt="image" />
                                    }
                                    {
                                        x.list[0].weather[0].main == "Clear" && <img src="src/assets/images/sunny.png" alt="image" />
                                    }
                                    {
                                        x.list[0].weather[0].main == "Snow" && <img src="src/assets/images/snow.png" alt="image" />
                                    }
                                    {
                                        x.list[0].weather[0].main == "Haze" && <img src="src/assets/images/haze.png" alt="image" />
                                    }

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
                                {x.list.map((i) => {
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
                                    x.list.filter((i, j) => {
                                        if (getWeather(i.dt_txt) == day) {
                                            result.push(i.main.temp_max)
                                        }
                                    })
                                    let z = i.dt_txt.split(" ");
                                    if (getWeather(z[0]) != day && z[1] == "15:00:00") {
                                        return <th key={i.dt}>
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
                            <td >09:00 am</td>
                            {x.list.map((i) => {
                                let z = i.dt_txt.split(" ");
                                if (z[1] == "09:00:00")
                                    if (z[0])

                                        return <th key={i.dt}>

                                            <td className="data-weather">
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
                                        </th>

                            })}
                            <tr>
                                <td >15:00 pm</td>
                                {x.list.map(i => {
                                    let z = i.dt_txt.split(" ");
                                    if (z[1] == "15:00:00")
                                        if (z[0])

                                            return <th key={i.dt}>

                                                <td className="data-weather">
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
                                            </th>

                                })}
                            </tr>
                            <tr>
                                <td>21:00 pm</td>
                                {x.list.map(i => {
                                    let z = i.dt_txt.split(" ");
                                    if (z[1] == "21:00:00")
                                        if (z[0])

                                            return <th key={i.dt}>

                                                <td className="data-weather">
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
                                            </th>

                                })}
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