import React, {useState} from 'react'

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
		<div className='search_container'>
			<div className="search_container_bar">
				<input type="text" placeholder="Search Here..." value={searchText} 
					onChange={handleSearchInput} 
					className="search_container_bar_input" />
				<button className="search_container_bar_btn" onClick={handleSearch}>Search</button>
			</div>
			{error && <div className='search_container_error'>{error}</div>}
		</div>
		
	)
}
export default Search;