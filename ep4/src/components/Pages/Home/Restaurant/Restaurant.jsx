import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../../../utils/constants";
// import Loader from "../../../Laoder/Loader"
import Shimmer from "../../../Loading/Shimmer";

const Restaurant = ({ searchResInput }) => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterResData, setFilterResData] = useState([]);
  const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants");

  useEffect(() => {
    fetchResData();
  }, []);

  useEffect(() => {
    fetchSearchResData();
  }, [searchResInput]);

  const fetchSearchResData = () => {
    const searchResData = listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchResInput.toLowerCase())
    );
    setFilterResData(searchResData);
  };
  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //optional chaining
    setListOfRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //conditional rendering
  return filterResData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="top_rated">
        {filterBtnName === "Top Rated Restaurants" ? (
          <button
            className="top_rated_btn"
            onClick={() => {
              const filterResData = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterResData(filterResData);
              setFilterBtnName("Reset Restaurants");
            }}
          >
            {filterBtnName}
          </button>
        ) : (
          <button
            className="top_rated_reset"
            onClick={() => {
              fetchResData();
              setFilterBtnName("Top Rated Restaurants");
            }}
          >
            {filterBtnName}
          </button>
        )}
      </div>
      <div className="card_container">
        {filterResData?.map(({ info: restaurant }) => (
          <Link to={`restaurants/${restaurant.id}`} key={restaurant.id}>
            <div className="card_container_card">
            {restaurant.cloudinaryImageId ? (
              <img
                src={CDN_URL + restaurant.cloudinaryImageId}
                alt={restaurant.name}
                className="card_container_card_img"
              />
            ) : (
              ""
            )}
            <div className="card_container_card_info">
              <p className="res-name">{restaurant.name}</p>
              <p className="card-cuisines">
                — {restaurant.cuisines.join(", ")}
              </p>
              <p className="card-cost">— {restaurant.costForTwo}</p>
              <div className="rating_sec">
                <span className="rating_sec_ratings">{restaurant.avgRating}</span>
                <span className="rating_sec_time">{restaurant.sla.slaString}</span>
              </div>
              <div className="card_container_card_address">
                <span>{restaurant.areaName}</span>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
};
export default Restaurant;
