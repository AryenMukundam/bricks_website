import { Routes, Route, BrowserRouter } from "react-router-dom"; // ✅ Import Routes & Route
import Home from "./pages/Home";

import "./App.css";

import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Bootcamp from "./pages/Bootcamp";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import { useLocation} from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
