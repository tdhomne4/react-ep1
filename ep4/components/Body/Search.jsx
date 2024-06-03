import React from 'react'
import './Search.scss';
 const Search = () => {
	return (
		<div className='search-container'>
			<div className="search-bar">
				<input type="text" placeholder="Search Here..." className="search-input" />
				<button className="search-btn">Search</button>
			</div>
		</div>
		
	)
}
export default Search;