import React,{useState} from 'react'
import Search from './Search/Search';
import Card from './Restaurant/Card/Card';
const Body = () => {
	
	const [searchResInput, setSearchResInput] = useState("");

	const handleSearchInput = (input) => {
		setSearchResInput(input);
	}
	return (
		<>
			<Search onSearchHandler={handleSearchInput}/>
			<Card searchResInput={searchResInput}/>
		</>
	)
}

export default Body;