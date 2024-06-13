import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes , createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import PageNotFound from "./components/Layout/PageNotFound";
const App = () => {
  return (
    <div className="container">
      <Layout />
      <Outlet />
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
    ],
    errorElement : <PageNotFound />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
