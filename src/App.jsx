import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

//Components
import Navbar from "./components/layout/Navbar";
import NavbarSmallScreen from "./components/layout/NavbarSmallScreen";
import Footer from "./components/layout/Footer";
import PageLayout from "./components/layout/PageLayouts";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div className="main-container">
        {isSmallScreen ? <NavbarSmallScreen /> : <Navbar />}

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
