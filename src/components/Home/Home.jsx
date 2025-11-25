import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Headset, Ticket, UserCheck, Star } from 'lucide-react';
import './Home.css';


import cm_logo_eng from '../../assets/cm_photo_eng.png';


import cm_logo_tel from '../../assets/cm_photo_telugu.png';

const Home = () => {
    const { t, i18n } = useTranslation();

    const processes = [
        { id: 1, title: t('process.register', "Register Grievance"), icon: <Headset size={40} />, desc: t('process.registerDesc', "Lodge your complaint") },
        { id: 2, title: t('process.ticket', "Receive Grievance No"), icon: <Ticket size={40} />, desc: t('process.ticketDesc', "Get unique tracking ID") },
        { id: 3, title: t('process.status', "Get Updates"), icon: <UserCheck size={40} />, desc: t('process.statusDesc', "Track status anytime") },
        { id: 4, title: t('process.feedback', "Share Feedback"), icon: <Star size={40} />, desc: t('process.feedbackDesc', "Rate the service") }
    ];

    return (
        <main>

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay"></div>

                <div className="container hero-content">

                    {/* Text Section */}
                    <div className="hero-text">
                        <h1 className="single-line-title">
                            {t('hero.title', '"Public Grievance Redressal Platform"')}
                        </h1>

                        <p>
                            {t(
                                'hero.desc',
                                'A universal grievance redressal helpline. This enables citizens to voice their concerns directly to the Chief Minister\'s Office.'
                            )}
                        </p>

                        <ul className="hero-list">
                            <li>- {t('hero.point1', 'Register personal or household level grievances')}</li>
                            <li>- {t('hero.point2', 'Track the status of registered grievances')}</li>
                        </ul>

                        <div className="hero-actions">
                            <Link to="/lodge-grievance">
                                <button className="btn-lodge">
                                    <Headset size={20} />
                                    {t('process.register', 'Lodge Grievance')}
                                </button>
                            </Link>

                            <Link to="/check-status">
                                <button className="btn-check-status">
                                    {t('hero.checkStatus', 'Check Status')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* CM Image Section */}
                    <div className="cm-profile">
                        <img
                            src={i18n.language === 'te' ? cm_logo_tel : cm_logo_eng}
                            alt="Hon'ble Chief Minister"
                            className="cm-img"
                        />
                    </div>

                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section">
                <div className="container">
                    <div className="mb-4">
                        <h2 className="section-title">
                            {t('section.process', 'Process Involved')}
                        </h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="grid-4">
                        {processes.map((step) => (
                            <div key={step.id} className="process-card">
                                <div className="process-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section">
                <div className="container">
                    <h2
                        className="section-title text-center"
                        style={{ marginBottom: '30px' }}
                    >
                        {t('section.stats', 'Grievance Statistics')} 15-06-2024
                    </h2>

                    <div className="grid-3">
                        <div className="stat-card stat-red">
                            <div className="stat-number">12,53,016</div>
                            <div>{t('stats.received', 'Grievances Received')}</div>
                        </div>

                        <div className="stat-card stat-green">
                            <div className="stat-number">11,52,891</div>
                            <div>{t('stats.resolved', 'Grievances Resolved')}</div>
                        </div>

                        <div className="stat-card stat-yellow">
                            <div className="stat-number">1,00,125</div>
                            <div>{t('stats.pending', 'Grievances Pending')}</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;
