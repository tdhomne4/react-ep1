import React from 'react'
import "./Loader.scss";
import loader from "../../../public/assets/images/loader.gif";
const Loader = () => {
	return (
		<>
			<div className='loader_window'>
				<img src={loader} className='custom-load' />
			</div>
		</>
	)
}
export default Loader;