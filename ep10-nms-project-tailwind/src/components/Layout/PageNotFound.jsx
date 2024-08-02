import React from 'react';
import {useRouteError} from "react-router-dom";
import NotFound from "../../../public/assets/images/not-found.png";
const PageNotFound = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className='notfound_container'>
			<div className='notfound_img'>
				<img src={NotFound} alt="Not Found" />
			</div>
			<div className='notfound_content'>
				<p>we are sorry, but the page you requested was {error.status} : {error.statusText}</p>
				<a href="/" className='back_to_home'>Back To Home</a>
			</div>
		</div>
	)
}
export default PageNotFound;
