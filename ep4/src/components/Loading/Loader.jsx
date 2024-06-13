import React from 'react'
import "./index.scss";
import loader from "../../../public/assets/images/loader.gif";
const Loader = () => {
	return (
		<>
			<div className='loader_window'>
				<img src={loader} className='loader_window_custom' />
			</div>
		</>
	)
}
export default Loader;