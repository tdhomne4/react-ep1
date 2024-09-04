import React, { useEffect, useState } from "react";
import { FiCircle } from "react-icons/fi";
import "./ResDetails.scss";
import { CDN_URL } from "../../../utils/constants";
import Search from "../Home/Search/Search";

const ResMenu = ({ resDetailsData }) => {

  const [openAccordions, setOpenAccordions] = useState(Array(resDetailsData?.length).fill(false));
  const [searchInput, setSearchInput] = useState("");
  const [filterResMenus, setFilterResMenus] = useState(resDetailsData.slice(1));

  const toggleAccordion = (index) => {
    setOpenAccordions((prevOpenAccordions) =>
      prevOpenAccordions.map((isOpen, i) => (i === index && !isOpen))
    );
  };

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    searchFilter();
  }, [searchInput, resDetailsData]);

  const searchFilter = () => {
    const lowercasedInput = searchInput.toLowerCase();
    const filteredData = resDetailsData.slice(1)?.filter(restaurant => {
      return restaurant?.card?.card?.itemCards?.some(menu =>
        menu.card.info.name.toLowerCase().includes(lowercasedInput)
      );
    });
    const updatedOpenAccordions = filteredData.map((_, index) => true);
    setOpenAccordions(updatedOpenAccordions);
    setFilterResMenus(filteredData);
  };

  return (
    <>
      <div className="res_menus_container">
        <Search onSearchHandler={handleSearchInput} />
        <hr className="outlet_time_break"></hr>
        {filterResMenus?.length > 0 ? (
          filterResMenus.map((res, index) => (
            <div key={index}>
              <div className="res_menus_accordion" onClick={() => toggleAccordion(index)}>
                <button className="accordion_header">
                  <h3 className="menu_name">{res?.card?.card?.title} <span>({res?.card?.card?.itemCards?.length})</span></h3>
                  <span>{openAccordions[index] ? "-" : "+"}</span>
                </button>
                {openAccordions[index] ? (
                  res?.card?.card?.itemCards?.length > 0 ? (
                    res.card.card.itemCards.map((menu, menuIndex) => (
                      <div className="accordion_content" key={menuIndex}>
                        <div className="menu_content">
                          <div className="menu_details">
                            <div className="menu_name">
                              {menu.card.info.itemAttribute.vegClassifier === "VEG" ? (
                                <FiCircle className="veg_meal" />
                              ) : (
                                <FiCircle className="nonveg_meal" />
                              )}
                              <h5>{menu.card.info.name}</h5>
                            </div>
                            <div className="menu_price">
                              <span>Rs. {menu.card.info.price / 100}</span>
                            </div>
                            <div className="rating_details">
                              <span className="star">*</span>
                              <span className="ratings">{menu.card.info.ratings.aggregatedRating.rating}</span>
                              <span className="rating_count">({menu.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                            </div>
                            <div className="menu_des">
                              <p>{menu.card.info.description}</p>
                            </div>
                          </div>
                          <div className="menu_img_sec">
                            <div className="absolute">
                              <button className="p-2 text-white bg-black shadow-lg m-auto rounded-lg mx-10 bottom-0">Add +</button>
                            </div>
                            <img src={CDN_URL + menu.card.info.imageId} alt="" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="res_menu_divider"></div>
            </div>
          ))
        ) : (
          "No menu found"
        )}
      </div>
    </>
  );
};

export default ResMenu;
