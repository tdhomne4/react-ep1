import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes , createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import PageNotFound from "./components/Layout/PageNotFound";
import Footer from "./components/Layout/Footer/Footer";
import ResDetails from "./components/Pages/ResDetails/ResDetails";
//import Grocery from "./components/Grocery/Grocery"; //don't import like this to make seperate bundle. import in lazy

const Grocery = lazy(() => import("./components/Grocery/Grocery"))
const App = () => {
  return (
    <div className="container">
      <Layout />
      <Outlet />
      {/* <Footer /> */}
    </div>
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
        path : "/grocery",
        element : <Suspense fallback={<p>Loading....</p>}><Grocery /></Suspense>
      },
    ],
    errorElement : <PageNotFound />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);