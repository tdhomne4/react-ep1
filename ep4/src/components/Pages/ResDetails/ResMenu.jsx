import React, { useState } from "react";
import { FiCircle } from "react-icons/fi";
import "./ResDetails.scss";
import {CDN_URL} from "../../../utils/constants"
const ResMenu = ({ resDetailsData }) => {
	const [openAccordions, setOpenAccordions] = useState(Array(resDetailsData?.length).fill(false));
	console.log(openAccordions);
  resDetailsData = resDetailsData.slice(1);

  const toggleAccordion = (index) => {
		setOpenAccordions((prevOpenAccordions) => 
		prevOpenAccordions.map((isOpen,i) => (
			i === index ? !isOpen : isOpen
		)))
  };

  return (
    <>
      <div className="res_menus_container">
        <hr className="outlet_time_break"></hr>
				{resDetailsData?.length > 0 ? 
					resDetailsData?.map((res,index) => (
						<>
						<div className="res_menus_accordion" key={index} onClick={() => toggleAccordion(index)}>
						<button className="accordion_header">
							<h3 className="menu_name">{res?.card?.card?.title}</h3>
							<span>{openAccordions[index] ? "-" : "+"}</span>
						</button>
						{openAccordions[index] ? (
							res?.card?.card?.itemCards?.length > 0 ? 
								res.card.card.itemCards.map((menu,index) => (
									<div className="accordion_content" key={index}>
								<div className="menu_content">
									<div className="menu_details">
										<div className="menu_name">
											{menu.card.info.itemAttribute.vegClassifier === "VEG" ? <FiCircle className="veg_meal"/> : <FiCircle className="nonveg_meal"/>  }
										<h5>{menu.card.info.name}</h5>
										</div>
										<div className="menu_price">
											<span>Rs. {menu.card.info.price/100}</span>
										</div>
										<div className="rating_details">
											<span className="star">*</span>
											<span className="ratings">{menu.card.info.ratings.aggregatedRating.rating}</span>
											<span className="rating_count">({menu.card.info.ratings.aggregatedRating.ratingCountV2})</span>
										</div>
										<div className="menu_des">
											<p>
											{menu.card.info.description}
											</p>
										</div>
									</div>
									<div className="menu_img_sec">
										<img
											src={CDN_URL + menu.card.info.imageId}
											alt=""
										/>
									</div>
								</div>
							</div>
								))
								: ""
							
						) : ""}
					</div>
					<div className="res_menu_divider"></div>
					</>
					))
					
					: ""}
       
      </div>
    </>
  );
};
export default ResMenu;
