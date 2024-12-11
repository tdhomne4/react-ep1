import React, {lazy,useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes , createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import PageNotFound from "./components/Layout/PageNotFound";
// import Cart from "./components/Pages/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import ResDetails from "./components/Pages/ResDetails/ResDetails";
//import Grocery from "./components/Grocery/Grocery"; //don't import like this to make seperate bundle. import in lazy
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";

const Cart = lazy(() => import("./components/Pages/Cart/Cart"))
const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const data = {
      name : "Tejaswini Dhomane "
    };
    setUserName(data.name);
  },[]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div className="container">
        <Layout />
        <Outlet />
        {/* <Footer /> */}
      </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurants/:resId",
        element : <ResDetails />
      },
      {
        path : "/cart",
        element : <Cart />
      },
    ],
    errorElement : <PageNotFound />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
