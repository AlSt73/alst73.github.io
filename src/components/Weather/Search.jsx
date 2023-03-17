import React, { useContext } from 'react'
import { AuthProvider } from '../../hooks/useContext'

const Search = ({setInputCity,inputCity}) => {


    const getInput= (e)=>{
        e.preventDefault();
        let city = e.target.search.value;
        setInputCity(city);
    }

    return (
        <div className="search-container">
            <form onSubmit={getInput}>
                <input type="text" name="search" placeholder="ingresa una zona" />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default Search