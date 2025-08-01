import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Appreciation from "./components/Appreciation/Appreciation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import AllBooks from "./components/Allbooks/Allbooks.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const MainApp = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
  const location = useLocation();

  const handleOrderPopup = () => {
    setOrderPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const isDashboard = location.pathname.startsWith("/admin");


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {!isDashboard && (
        <Navbar handleOrderPopup={handleOrderPopup} orderCount={orderCount} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Services handleOrderPopup={handleOrderPopup} />
              <Banner />
              <AppStore />
              <Books />
              <Appreciation />
              
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/all-books"
          element={
            <AllBooks
              orderPopup={orderPopup}
              setOrderPopup={setOrderPopup}
              setOrderCount={setOrderCount}
            />
          }
        />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!isDashboard && (
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <MainApp />
  </Router>
);

export default App;
