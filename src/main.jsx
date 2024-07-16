import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import About from "./components/About/About.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import AboutUs2 from "./components/About/AboutUs.jsx";
import Useful from "./components/Menu/Useful.jsx";
import Special1 from "./components/Menu/Specials1.jsx";
import Special2 from "./components/Menu/Specials2.jsx";
import Contact from "./Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <About />
    <Special1 />
    <Special2 />
    <Useful />
    <AboutUs2 />
    <Contact />
    
  </React.StrictMode>
);
