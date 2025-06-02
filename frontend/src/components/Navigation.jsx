import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navigation.css";
import { NavLink as RRNavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

// ---- Placeholder page components ----
import LandingPage from "../pages/LandingPage.jsx";
import UploadCVPage from "../pages/UploadCVPage.jsx";
import CVRatingPage from "../pages/CVRatingPage.jsx";
import MockInterviewPage from "../pages/MockInterviewPage.jsx";
import InterviewResultPage from "../pages/InterviewResultPage.jsx";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>Resume</span>
                    <span style={{ color: '#000000' }}>AI</span>
                </Link>

                <div className={`links ${isOpen ? "open" : ""}`}>
                    <NavLink to="/upload-cv" label="Hồ sơ" iconClass="bi-file-earmark-text" />
                    <NavLink to="/cv-rating" label="Đánh giá" iconClass="bi-check2-circle" />
                    <NavLink to="/mock-interview" label="Phỏng vấn" iconClass="bi-chat-left" />
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, label, iconClass }) => (
    <RRNavLink
        to={to}
        className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
        }
    >
        <i className={`bi ${iconClass}`}></i>
        <span>{label}</span>
    </RRNavLink>
);

export default function NavigateApp() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/upload-cv" element={<UploadCVPage />} />
                <Route path="/cv-rating" element={<CVRatingPage />} />
                <Route path="/mock-interview" element={<MockInterviewPage />} />
                <Route path="/interview-result" element={<InterviewResultPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}