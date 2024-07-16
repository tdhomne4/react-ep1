import React,{useState} from 'react'
import Search from './Search/Search';
import Restaurant from './Restaurant/Restaurant';
import "./Home.scss";
import useOnlineStatus from '../../../utils/useOnlineStatus';
const Home = () => {
	
	const [searchResInput, setSearchResInput] = useState("");
	const onlineStatus = useOnlineStatus();
	console.log(onlineStatus);
	const handleSearchInput = (input) => {
		setSearchResInput(input);
	}
	if(onlineStatus === false){
		return <h2>Looks like, you are online please check your internet connection.</h2>
	} 
	return (
		<>
			<Search onSearchHandler={handleSearchInput}/>
			<Restaurant searchResInput={searchResInput}/>
		</>
	)
}

export default Home;