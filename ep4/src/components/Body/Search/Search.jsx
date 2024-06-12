import React, {useState} from 'react'
import './Search.scss';

const Search = ({onSearchHandler}) => {
	
	const [searchText, setSearchText] = useState("");
	const [error, setError] = useState("");
	
	const handleSearchInput = (e) => {
			setSearchText(e.target.value);
			if(e.target.value){
				setError("");
			}
	}
	const handleSearch = () => {
		onSearchHandler(searchText);
		setSearchText("");
		if(searchText.trim() === ""){
			setError("Please add search text here");
		}
	}
	return (
		<div className='search-container'>
			<div className="search-bar">
				<input type="text" placeholder="Search Here..." value={searchText} 
					onChange={handleSearchInput} 
					className="search-input" />
				<button className="search-btn" onClick={handleSearch}>Search</button>
			</div>
			{error && <div className='search-error'>{error}</div>}
		</div>
		
	)
}
export default Search;