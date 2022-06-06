import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { RSVP, SplashScreen } from "./components";
import { createTheme, ThemeProvider } from "@mui/material";
import { TABS } from "./components/common/constants";
import ICalendarLink from "react-icalendar-link";

AOS.init();
const theme = createTheme({
  palette: {
    primary: {
      light: "#c7ad88",
      main: "#c7ad88",
      dark: "#c7ad88",
      contrastText: "#fff",
    },
    secondary: {
      light: "#151515",
      main: "#151515",
      dark: "#151515",
      contrastText: "#000",
    },
  },
});

const initialModalState = { visible: false, type: null };

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const [showModal, setShowModal] = useState(initialModalState);

  const onCloseModal = () => {
    setShowModal(initialModalState);
  };

  const onClickTab = (tab) => {
    setActiveTab(tab);

    switch (tab) {
      case TABS.RSVP:
      case TABS.LOCATION:
      case TABS.CALENDAR:
        setShowModal({ type: tab, visible: true });
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              section={activeTab}
              showModal={showModal}
              onCloseModal={onCloseModal}
            />
          }
        />
      </Routes>

      <Footer onClick={onClickTab} />
    </ThemeProvider>
  );
};

// const App = () => {
//   const event = {
//     title: "My Title",
//     description: "My Description",
//     startTime: "2018-10-07T10:30:00+10:00",
//     endTime: "2018-10-07T12:00:00+10:00",
//     location: "10 Carlotta St, Artarmon NSW 2064, Australia",
//   };

//   return (
//     <div className="App">
//       <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
//     </div>
//   );
// };

export default App;
