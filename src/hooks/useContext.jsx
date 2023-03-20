import { createContext, useEffect, useState } from 'react';
import { useGetWeather } from './useGetWeather';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [inputCity, setInputCity] = useState("Hualqui");
    const api = `http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=6f84acbbbfca7b6a604570cd66a36115&units=metric&lang=sp`;

    const options = {
        method: "GET",
    }
    return <AuthContext.Provider value={
        {
            api,
            setInputCity,
            inputCity, options

        }
    }>
        {children}
    </AuthContext.Provider>
}

