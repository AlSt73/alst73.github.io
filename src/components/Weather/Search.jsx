import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, AuthProvider } from '../../hooks/useContext'



const Search = () => {

    const { setInputCity, inputCity } = useContext(AuthContext);
    const getInput = (e) => {
        e.preventDefault();
        let search = e.target.search.value;
        //console.log(search + "-- " + inputCity);
        setInputCity(search);
        const container = document.querySelector('.magic');
        container.classList.remove('magic');
        container.classList.add('showMagic');
    }

    return (
        <div className="search-container">
            <form onSubmit={getInput}>
                <label><i className="fa-solid fa-location-dot"></i></label>
                <input type="text" name="search" placeholder="ingresa una zona" />
                {/* <input type="submit"   /> */}
                <button className="fa-solid fa-magnifying-glass"></button>
            </form>
        </div>
    )
}

export default Search