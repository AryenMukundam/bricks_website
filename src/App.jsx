import { Routes, Route, BrowserRouter } from "react-router-dom"; // ✅ Import Routes & Route
import Home from "./pages/Home";

import "./App.css";
import Workshop from "./pages/Bootcamp";

import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Bootcamp from "./pages/Bootcamp";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
        <Route path="/" element={<>  <Home /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
