import { Routes, Route, BrowserRouter } from "react-router-dom"; // ✅ Import Routes & Route
import Home from "./pages/Home";

import "./App.css";
import Workshop from "./pages/Workshop";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs"
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
        <Route path="/" element={<>  <Home /></>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
