import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../utils/cartSlice';
import { CDN_URL } from '../../../utils/constants.js';
import "../ResDetails/ResDetails.scss";
import { FiCircle } from "react-icons/fi";

const Cart = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
	const handleClearCart = () => {
		dispatch(clearCart());
	}
	return (
		<div className="top_rated flex-col">
		<button className="top_rated_btn" onClick={handleClearCart}>
			Clear Cart
		</button>
		<div className="cartItems-sec mt-5">
			{cartItems?.length > 0 ? (
				cartItems.map((menu, menuIndex) => (
					<div className="accordion_content" key={menuIndex}>
						<div className="menu_content">
							<div className="menu_details">
								<div className="menu_name">
									{menu.itemAttribute.vegClassifier === "VEG" ? (
										<FiCircle className="veg_meal" />
									) : (
										<FiCircle className="nonveg_meal" />
									)}
									<h5>{menu.name}</h5>
								</div>
								<div className="menu_price">
									<span>Rs. {menu.price ? menu.price / 100 : "Unavailable"}</span>
								</div>
								<div className="rating_details">
									<span className="star">*</span>
									<span className="ratings">
										{menu.ratings.aggregatedRating.rating || "0"}
									</span>
									<span className="rating_count">
										({menu.ratings.aggregatedRating.ratingCountV2 || "0"})
									</span>
								</div>
								<div className="menu_des">
									<p>{menu.description}</p>
								</div>
							</div>
							<div className="menu_img_sec">
								<div className="absolute">
									<button
										className="p-2 text-white bg-black shadow-lg m-auto rounded-lg mx-10 bottom-0"
										onClick={() => handleAddItem(menu)}
									>
										Add +
									</button>
								</div>
								<img src={CDN_URL + menu.imageId} alt={menu.name} />
							</div>
						</div>
					</div>
				))
			) : (
				<h1>Cart empty. Please add more items.</h1>
			)}
		</div>
</div>

	)
}
export default Cart;