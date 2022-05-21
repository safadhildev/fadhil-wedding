import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home section={activeTab} />} />
      </Routes>
      <Footer onClick={setActiveTab} />
    </>
  );
};

export default App;
