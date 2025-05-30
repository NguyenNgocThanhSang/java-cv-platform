import React, { useEffect, useState } from "react";
import "../styles/Loading.css";

const Loading = ({ text = "Đang tải..." }) => {
    const [progress, setProgress] = useState(20);

    // Hiệu ứng thanh tiến trình
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 90 ? 90 : prev + 10));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-container">
            <p className="loading-text">{text}</p>
            <div className="loading-bar">
                <div
                    className="loading-progress"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default Loading;
