import React, { useState, useEffect } from "react";
import { RES_DATA_API } from "./constants";

const useFetchResData = () => {
	const [listOfRes, setListOfRes] = useState([]);
	useEffect(() => {
		fetchResData();
	},[])

	const fetchResData =  async () => {
		const data = await fetch(RES_DATA_API);
    const jsonData = await data.json();
    //optional chaining
    setListOfRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
	}
	return listOfRes;
}

export default useFetchResData;