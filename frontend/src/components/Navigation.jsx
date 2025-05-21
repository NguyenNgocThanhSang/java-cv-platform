import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navigation.css"

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
                {/* Left section */}
                <Link to="/" className="logo">CV Rating Website</Link>

                {/* Mobile menu button */}
                {/*<button onClick={() => setIsOpen(!isOpen)} className="menu-btn">*/}
                {/*    <svg*/}
                {/*        className="icon"*/}
                {/*        fill="none"*/}
                {/*        stroke="currentColor"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*    >*/}
                {/*        <path*/}
                {/*            strokeLinecap="round"*/}
                {/*            strokeLinejoin="round"*/}
                {/*            strokeWidth="2"*/}
                {/*            d="M4 6h16M4 12h16M4 18h16"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*</button>*/}

                {/* Links */}
                <div className={`links ${isOpen ? "open" : ""}`}>
                    <NavLink to="/upload-cv" label="Upload CV" />
                    <NavLink to="/cv-rating" label="CV Rating" />
                    <NavLink to="/mock-interview" label="Mock Interview" />
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, label }) => (
    <Link to={to} className="nav-link">
        {label}
    </Link>
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
