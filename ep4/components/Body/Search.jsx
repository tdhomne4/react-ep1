import React from 'react'
import './Search.scss';
 const Search = () => {
	return (
		<div className='search-container'>
			<div class="search-bar">
				<input type="text" placeholder="Search Here..." class="search-input" />
				<button class="search-btn">Search</button>
			</div>
		</div>
		
	)
}
export default Search;