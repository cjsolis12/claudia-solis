import "./App.css";
import { Routes, Route } from "react-router-dom";

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
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
