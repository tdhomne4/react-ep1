import React from 'react'
import "./index.scss";
const Shimmer = ({condition}) => {
	return (
		<>
		{condition == "Home Res" ?
		 <div className='shimmer_container'>
		 <div className="shimmer_container_card"></div>
		 <div className="shimmer_container_card"></div>
		 <div className="shimmer_container_card"></div>
		 <div className="shimmer_container_card"></div>
	 </div>
	  : "" }
		{condition == "Res details" ? 
		<div className='shimmer_container_details'></div>
		: ""	
	
	}
		
		</>
	)
}

export default Shimmer