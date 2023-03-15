import React from 'react'

const Search = () => {
    return (
        <div className="search-container">
            <form>
                <input type="text" name="search" placeholder="ingresa una zona" />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default Search