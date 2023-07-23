import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/system";

//Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
   
      <Container
        
        maxWidth="xl"
        boxSizing="border-box"
        height="100vh"
        sx={{ border: 2, display:"flex", flexDirection: "column" }}
      >
        <Navbar />
        <Container>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </Container>
        <Footer/>
      </Container>
     
    </>
  );
}

export default App;
