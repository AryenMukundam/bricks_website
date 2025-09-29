import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import Navbar from "./components/BeforeLogin/Navbar";
import Bootcamp from "./pages/Bootcamp";
import Footer from "./components/BeforeLogin/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import { useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

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

// Layout component that conditionally renders Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Define routes where header and footer should be hidden
  const hideHeaderFooterRoutes = ['/dashboard' , '/profile'];
  
  // Check if current route should hide header/footer
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <>
      <ScrollToTop />
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;