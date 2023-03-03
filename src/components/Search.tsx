import React from 'react'
import magnifyingGlassIcon from '../assets/icons/magnifying-glass-icon.svg'

function Search() {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search" />
      <img
        className="search__icon"
        src={magnifyingGlassIcon}
        alt="Magnifying glass"
      />
    </div>
  )
}

export default Search
