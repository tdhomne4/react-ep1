import React from 'react'
import './Card.scss';
const Card = () => {
	const cards = [
    {
      image: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg',
      name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
    {
      image: 'https://t4.ftcdn.net/jpg/00/18/66/99/360_F_18669964_Txz4BS0OErzj9v9DHM3N51d8yFVa85dR.jpg',
			name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
    {
      image: 'https://miro.medium.com/v2/resize:fit:600/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg',
			name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
		{
      image: 'https://miro.medium.com/v2/resize:fit:600/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg',
			name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
		{
      image: 'https://miro.medium.com/v2/resize:fit:600/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg',
			name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
		{
      image: 'https://miro.medium.com/v2/resize:fit:600/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg',
			name: 'Meghana Food Spicy',
      cuisines: "Biryani, North Indian, Asian",
      ratings: "******",
			time : "38 minutes"
    },
  ];

	return (
		<div className='card-container'>
			{cards.map((card,index) => (
				<div className="food-card" id={index}>
					{index !== 1 && card.image && <img src={card.image} alt={card.name} className="food-card-image" />}
						 <div className="food-card-info">
							 <p>{card.name}</p>
							 <p className='card-cuisines'>— {card.cuisines}</p>
							 <div className='rating-sec'>
								<span className='card-ratings'>{card.ratings}</span>
								<span className='card-time'>{card.time}</span>
							 </div>
						 </div>
						 {index === 1 && card.image && <img src={card.image} alt={card.name} className="food-card-image" />}
				 </div>
			))}
			
		</div>
	)
}
export default Card;