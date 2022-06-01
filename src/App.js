import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { RSVP } from "./components";

AOS.init();

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const [showRSVP, setShowRSVP] = useState(false);

  const onClickTab = (tab) => {
    setActiveTab(tab);
    if (tab === "RSVP") {
      setShowRSVP(true);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              section={activeTab}
              showRSVP={showRSVP}
              onCloseRSVP={() => {
                setShowRSVP(false);
              }}
            />
          }
        />
      </Routes>

      <Footer onClick={onClickTab} />
    </>
  );
};

export default App;
