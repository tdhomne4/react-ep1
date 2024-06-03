import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Search from "./components/Body/Search";
import Card from "./components/Body/Restaurant/Card/Card";
/**
 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - ReataurantCard
 * Footer
 *  - Logo
 *  - Links
 *  - Copyright
 *  - Contact
 */

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Card />
      {/* <img src="https://wellnessacademyusa.com/wp-content/uploads/2023/12/san-diago-hone.png" /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
