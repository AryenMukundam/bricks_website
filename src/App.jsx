import { Routes, Route, BrowserRouter } from "react-router-dom"; // ✅ Import Routes & Route
import Home from "./pages/Home";

import "./App.css";
import Workshop from "./pages/Bootcamp";

import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Bootcamp from "./pages/Bootcamp";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Home />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
