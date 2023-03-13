import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from '../components/Weather/Weather'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Weather/>}/>
                <Route path="*" element={<h1>Error! pagina no existe!</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing