import React from 'react';
import {useRouteError} from "react-router-dom";
import NotFound from "../../../public/assets/images/not-found.png";
const PageNotFound = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className='text-center mx-auto my-[50px]'>
			<div>
				<img  className='mx-auto' src={NotFound} alt="Not Found" />
			</div>
			<div>
				<p className='text-black mx-auto my-[30px] text-2xl font-semibold'>we are sorry, but the page you requested was {error.status} : {error.statusText}</p>
				<a href="/" className='text-white bg-custom-green border-custom-green rounded-lg px-5 py-2.5 text-xl font-normal leading-6 no-underline'>Back To Home</a>
			</div>
		</div>
	)
}
export default PageNotFound;
