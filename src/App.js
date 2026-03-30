import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Component/Homescreen/Navbar.jsx";
import Homescreen from "./Pages/Homescreen.jsx";
import AboutSection from "./Component/Homescreen/About/AboutSection.jsx";
import FAQS from "./Component/Homescreen/FAQ/FAQS.jsx";
import Contact from "./Component/Homescreen/Contacts/Contact.jsx";
import Branch from "./Component/Homescreen/Branches/Branch.jsx";
import Footer from "./Component/Homescreen/Footer.jsx";
import ServicesSection from "./Component/Homescreen/Services/ServicesSection.jsx";
import FeaturesSection from "./Component/Homescreen/Features/FeaturesSection.jsx";

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Homescreen />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/about" element={<AboutSection />} />
         <Route path="/faq" element={<FAQS />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Branch" element={<Branch/>} />
               <Route path="/Service" element={<ServicesSection/>} />
                     <Route path="/Feature" element={<FeaturesSection/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;