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
		<div className='mt-[50px]'>
			<div className="bg-[#444] rounded-[50px] flex items-center p-[5px]">
				<input type="text" placeholder="Search Here..." value={searchText} 
					onChange={handleSearchInput} 
					className="text-white bg-[#666] rounded-s-[50px] flex-grow py-4 px-5 focus-visible:bg-[#0b200d]" />
				<button className="custom-hover-gradient" onClick={handleSearch}>Search</button>
			</div>
			{error && <div className='text-red-500 font-semibold text-sm mt-[10px] ml-[14px] search_container_error'>{error}</div>}
		</div>
		
	)
}
export default Search;