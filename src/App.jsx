import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { UIProvider } from "./components/ui/context";

//Components
import Navbar from "./components/layout/Navbar";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import NavDrawer from "./components/layout/NavDrawer";

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
        <UIProvider>
          {isSmallScreen ? <Nav /> : <Navbar />}
          <NavDrawer />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          <Footer />
        </UIProvider>
      </div>
    </>
  );
}

export default App;
