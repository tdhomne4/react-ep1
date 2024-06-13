import React,{useState} from 'react'
import Search from './Search/Search';
import Restaurant from './Restaurant/Restaurant';
import "./Home.scss";
const Home = () => {
	
	const [searchResInput, setSearchResInput] = useState("");

	const handleSearchInput = (input) => {
		setSearchResInput(input);
	}
	return (
		<>
			<Search onSearchHandler={handleSearchInput}/>
			<Restaurant searchResInput={searchResInput}/>
		</>
	)
}

export default Home;