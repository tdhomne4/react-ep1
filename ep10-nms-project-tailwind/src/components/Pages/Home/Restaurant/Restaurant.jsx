import React, { useState, useEffect, useContext } from "react";
// import Loader from "../../../Laoder/Loader"
import Shimmer from "../../../Loading/Shimmer";
import useFetchResData from "../../../../utils/useFetchResData";
import Card from "./Card";
import UserContext from "../../../../utils/UserContext";

const Restaurant = ({ searchResInput }) => {
  const listOfRes = useFetchResData();
  const [filterResData, setFilterResData] = useState([]);
  const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants");

  useEffect(() => {
    if (listOfRes) {
      setFilterResData(listOfRes);
    }
    fetchSearchResData();
  }, [searchResInput,listOfRes]);

  const fetchSearchResData = () => {
    const searchResData = listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchResInput.toLowerCase())
    );
   setFilterResData(searchResData);
  };

  const {loggedInUser, setUserName} = useContext(UserContext);

  //conditional rendering
  return filterResData.length === 0 ? (
    <Shimmer condition="Home Res" />
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
              setFilterResData(listOfRes);
              setFilterBtnName("Top Rated Restaurants");
            }}
          >
            {filterBtnName}
          </button>
          )}
          <p>UserInfo : <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/> </p>
      </div>
      <div className="card_container">
      {filterResData?.map(({ info: restaurant }) => {
        const PromotedCard = restaurant.avgRating > 4.4 ? withPromotedLabel(Card) : Card;
        return <PromotedCard key={restaurant.id} restaurantData={restaurant} />;
      })}
      </div>
    </>
  );
};

//Higher order component, take one component as input => return enhanced component/jsx
const withPromotedLabel = (Card) => {
  return ({restaurantData}) => {
    return (
      <div>
        
          <label className="promoted-label">Promoted</label>
          <Card restaurantData={restaurantData}/>
      </div>
    )
  }
}
export default Restaurant;
