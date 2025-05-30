import React, { useState, useEffect } from "react";
import "../styles/CVRatingPage.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading.jsx";

const fetchOriginalCV = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            workExperience: {
                title: "Kinh nghiệm làm việc",
                data: [
                    {
                        subTitle: "Senior Developer tại ABC Tech (2018-Hiện tại)",
                        details: [
                            {
                                text: "Đã làm việc với React và TypeScript để phát triển ứng dụng web",
                                suggested: "Đã phát triển và triển khai React và TypeScript để phát triển ứng dụng web",
                                reason: "Sử dụng từ ngữ chủ động và cụ thể hơn để thể hiện vai trò của bạn."
                            },
                            {
                                text: "Đã thực hiện tái cấu trúc codebase và tối ưu hóa hiệu suất",
                                suggested: "",
                                reason: ""
                            }
                        ]
                    }
                ]
            },
            education: {
                title: "Học vấn",
                data: [
                    {
                        subTitle: "",
                        details: [
                            {
                                text: "Cử nhân Khoa học Máy tính",
                                suggested: "Bla bla bla",
                                reason: "Bla bla bla"
                            },
                            {
                                text: "Đại học ABC (2011-2015)",
                                suggested: "",
                                reason: ""
                            },
                            {
                                text: "Tốt nghiệp loại giỏi",
                                suggested: "Bla bla bla",
                                reason: "Bla bla bla"
                            }
                        ]
                    }
                ]
            },
            skills: {
                title: "Kỹ năng",
                data: [
                    {
                        subTitle: "",
                        details: [
                            {
                                text: "JavaScript, TypeScript, React, Node.js, HTML, CSS, Git, Agile",
                                suggested: "JavaScript, TypeScript, React, Node.js, HTML, CSS, Git, Agile (có kinh nghiệm thực tế 2+ năm)",
                                reason: "Thiếu thời gian làm việc với ngôn ngữ"
                            }
                        ]
                    }
                ]
            }
        });
    }, 500);
});

const fetchSuggestedCV = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            workExperience: {
                title: "Kinh nghiệm làm việc",
                data: [
                    {
                        subTitle: "Senior Developer tại ABC Tech (2018-Hiện tại)",
                        details: [
                            { text: "Đã phát triển và triển khai React và TypeScript để phát triển ứng dụng web" },
                            { text: "Đã thực hiện tái cấu trúc codebase và tối ưu hóa hiệu suất" }
                        ]
                    }
                ]
            },
            education: {
                title: "Học vấn",
                data: [
                    {
                        subTitle: "",
                        details: [
                            { text: "Bla bla bla" },
                            { text: "Đại học ABC (2011-2015)" },
                            { text: "Bla bla bla" }
                        ]
                    }
                ]
            },
            skills: {
                title: "Kỹ năng",
                data: [
                    {
                        subTitle: "",
                        details: [
                            { text: "JavaScript, TypeScript, React, Node.js, HTML, CSS, Git, Agile (có kinh nghiệm thực tế 2+ năm)" }
                        ]
                    }
                ]
            }
        });
    }, 500);
});

// Hàm highlight text gợi ý
const Highlight = ({ item }) => {
    if (!item.suggested || item.suggested.trim() === "") {
        return <>{item.text}</>;
    }

    return (
        <span className="highlight" title={item.reason || ""}>
            {item.text}
            <div className="tooltip">
                <strong>Đề xuất:</strong> {item.suggested}
                {item.reason && (
                    <><br /><strong>Lý do:</strong> {item.reason}</>
                )}
            </div>
        </span>
    );
};

// Thông báo cho copy
const showSnackbar = (message, type) => {
    const snackbar = document.createElement("div");
    snackbar.className = `snackbar ${type}`;
    const icon = type === "success" ? "check-circle-fill" : "x-circle-fill";
    snackbar.innerHTML = `<i class="bi bi-${icon}"></i> ${message}`;
    document.body.appendChild(snackbar);

    setTimeout(() => {
        snackbar.remove();
    }, 2000);
};

// Hàm copy
const copyToClipboard = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
        showSnackbar("Không tìm thấy nội dung để sao chép!", "error");
        return;
    }

    const text = element.innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            showSnackbar("Đã sao chép!", "success");
        })
        .catch(() => {
            showSnackbar("Sao chép thất bại!", "error");
        });
};

// Hàm render cho CV gốc
const renderSection = (section, useHighlight = false, showTitle = false) => {
    if (!section || !section.data || section.data.length === 0) return null;

    return (
        <>
            {showTitle && <h3>{section.title}</h3>}
            {section.data.map((item, idx) => (
                <div key={idx}>
                    {item.subTitle && <p className="section-title">{item.subTitle}</p>}
                    {item.details.length === 1 ? (
                        <p>
                            {useHighlight
                                ? <Highlight item={item.details[0]} />
                                : (item.details[0].suggested || item.details[0].text)}
                        </p>
                    ) : (
                        <ul>
                            {item.details.map((detail, i) => (
                                <li key={i}>
                                    {useHighlight
                                        ? <Highlight item={detail} />
                                        : (detail.suggested || detail.text)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
};

// Hàm render cho CV đã chỉnh sửa
const renderSuggestedSection = (section, elementId) => {
    if (!section || !section.data || section.data.length === 0) return null;

    return (
        <div className="cv-box">
            <div className="title-button-wrap">
                <h3>{section.title}</h3>
                <button className="copy-button" onClick={() => copyToClipboard(elementId)}>
                    <i className="bi bi-copy"></i> Sao chép
                </button>
            </div>
            <div className="adjusted-content" id={elementId}>
                {renderSection(section)}
            </div>
        </div>
    );
};


const CVRatingPage = () => {
    const navigate = useNavigate();
    const [cvOriginal, setCvOriginal] = useState(null);
    const [cvSuggested, setCvSuggested] = useState(null);

    // Lấy data
    useEffect(() => {
        fetchOriginalCV().then(setCvOriginal);
        fetchSuggestedCV().then(setCvSuggested);
    }, []);

    if (!cvOriginal || !cvSuggested) return <Loading text="Đang phân tích hồ sơ của bạn..." />;

    // Hàm navigate
    const handleBackHome = () => navigate("/");
    const handleBackUploadCV = () => navigate("/upload-cv");

    return (
        <div className="cv-rating-container">
            <h2 className="page-title">
                <i className="bi bi-arrow-left mouse-cusor" onClick={handleBackUploadCV}></i> Kết quả đánh giá
            </h2>
            <div className="cv-rating-content-container">
                <div className="cv-section">
                    <div className="cv-box">
                        {renderSection(cvOriginal.workExperience, true, true)}
                        {renderSection(cvOriginal.education, true, true)}
                        {renderSection(cvOriginal.skills, true, true)}
                    </div>
                    <p className="note">* Di chuột qua văn bản được đánh dấu để xem đề xuất cải thiện</p>
                </div>
                <div className="cv-section">
                    {renderSuggestedSection(cvSuggested.workExperience, "work-copy")}
                    {renderSuggestedSection(cvSuggested.education, "edu-copy")}
                    {renderSuggestedSection(cvSuggested.skills, "skills-copy")}
                </div>
            </div>
            <button className="home-button" onClick={handleBackHome}>
                <i className="bi bi-house-door"></i> Quay về trang chủ
            </button>
        </div>
    );
};


export default CVRatingPage;