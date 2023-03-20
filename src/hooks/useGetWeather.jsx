import { useEffect, useState } from "react";

export const useGetWeather = (API, OPTIONS) => {
    const [weather, setWeather] = useState([]);
    const fetchData = async () => {
        const response = await fetch(API, OPTIONS);
        const data = await response.json();
        if (data.cod === "200") {
            setWeather(data);
        } else if(data.cod === "404") {
            setWeather(["nada"]);
        }

    };
    useEffect(() => {
        fetchData();
    }, []);

    return {weather,fetchData};

}