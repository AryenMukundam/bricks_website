import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import Bootcamp from "./pages/Bootcamp";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Selection from "./pages/Login/Selection";
import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import StudentHome from "./pages/StudentDashboard/StudentHome";
import Profile from "./pages/Profile";
import InstructorHome from "./pages/InstructorDashboard/InstructorHome";
import { useSelector } from "react-redux";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const ProtectedRoute = ({ children }) => {
  const token = getCookie("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicRoute = ({ children, redirectTo = "/student-dashboard" }) => {
  const token = getCookie("token");

  if (token) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <Contact />
            </PublicRoute>
          }
        />
        <Route
          path="/bootcamp"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <Bootcamp />
            </PublicRoute>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <TermsAndConditions />
            </PublicRoute>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <RefundPolicy />
            </PublicRoute>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <PrivacyPolicy />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <Selection />
            </PublicRoute>
          }
        />

        <Route
          path="/login/student"
          element={
            <PublicRoute redirectTo="/student-dashboard">
              <StudentLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/login/instructor"
          element={
            <PublicRoute redirectTo="/instructor-dashboard">
              <TeacherLogin />
            </PublicRoute>
          }
        />

        <Route
          path="/student-dashboard"
          element={
            
            <ProtectedRoute>
              <StudentHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor-dashboard"
          element={
            <ProtectedRoute>
              <InstructorHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;