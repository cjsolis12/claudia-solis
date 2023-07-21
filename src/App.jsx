import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
// import Navbar from "./components/layout/Navbar"

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Claudia</h1>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
