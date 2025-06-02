import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <header className="hero">
                <h1>
                    Cải thiện hồ sơ xin việc với <span className="colored-title">AI</span>
                </h1>
                <p>
                    Tối ưu hóa hồ sơ của bạn để phù hợp với mô tả công việc mong muốn và sẵn sàng cho phỏng vấn.
                </p>
                <button className="start-btn" onClick={() => navigate('/upload-cv')}>
                    Bắt đầu ngay <i className="bi bi-arrow-right"></i>
                </button>
            </header>

            <section className="features">
                <h2>Tính năng chính</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="icon-circle">
                                <i className="bi bi-file-earmark-text"></i>
                            </div>
                            <h3>Phân tích CV</h3>
                        </div>
                        <p>
                            Tải lên CV của bạn để nhận phản hồi chi tiết và đề xuất cải thiện nội dung cho từng phần.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="icon-circle">
                                <i className="bi bi-check2-circle logo"></i>
                            </div>
                            <h3>Đánh giá hồ sơ</h3>
                        </div>

                        <p>
                            Nhận đánh giá chi tiết về hồ sơ của bạn và gợi ý cải thiện để tăng cơ hội thành công khi ứng tuyển.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="icon-circle">
                                <i className="bi bi-chat-left logo"></i>
                            </div>
                            <h3>Phỏng vấn thử</h3>
                        </div>
                        <p>
                            Rèn luyện kỹ năng phỏng vấn với các câu hỏi được cá nhân hóa và nhận phản hồi chi tiết về câu trả lời của bạn.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Tăng cơ hội thành công khi xin việc</h2>
                <p>
                    Ứng dụng của chúng tôi sử dụng công nghệ AI tiên tiến để phân tích và cải thiện hồ sơ xin việc của bạn, giúp bạn nổi bật trong mắt nhà tuyển dụng.
                </p>
                <button className="improve-btn" onClick={() => navigate('/upload-cv')}>
                    Cải thiện hồ sơ của bạn
                </button>
            </section>

            <footer className="footer">© 2025 Resume AI</footer>
        </div>
    );
};

export default LandingPage;