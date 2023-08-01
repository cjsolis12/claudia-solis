import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageLayout from "./components/layout/PageLayouts";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <PageLayout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="skills" element={<Skills/>} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </PageLayout>
        <Footer />
      </div>
    </>
  );
}

export default App;
