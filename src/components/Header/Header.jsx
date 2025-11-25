import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import './Header.css';
// Use your uploaded AP logo path if you want the exact image you uploaded:
import ap_logo from '../../assets/botree-logo.png';
// Minister portrait (keep your existing asset)
import logo from '../../assets/it_minister1.png';

const Header = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="site-header">
            {/* Top white bar */}
            <div className="header-top">
                <div
                    className="logo-section"
                    onClick={() => navigate('/')}
                    role="button"
                    tabIndex={0}
                >
                    <img src={ap_logo} alt="Govt Logo" className="logo-img" />
                    <div className="logo-text">
                        {/* Reduced size & changed default text */}
                        <h2 className="site-title">
                            {t('header.title', 'BoTree – AI Governance Engine')}
                        </h2>

                    </div>
                </div>

                <div className="cpgrams-container">
                    <div className="cpgrams-badge">
                        <h3>CPGRAMS</h3>
                        <p>{t('header.centralized', 'Centralized Public Grievance System')}</p>
                    </div>
                </div>

                <div className="minister-profile">
                    <div className="minister-text">
                        <p className="minister-name">{t('header.ministerName', 'Sri Nara Lokesh')}</p>
                        <p className="minister-title">{t('header.ministerTitle', 'Honorable Minister')}</p>
                    </div>
                    <img src={logo} alt="Minister" className="minister-img" />
                </div>
            </div>

            {/* Orange Nav Bar */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li onClick={() => navigate('/')}>{t('nav.home', 'Home')}</li>
                    <li onClick={() => navigate('/gallery')}>{t('nav.gallery', 'Gallery')}</li>
                    <li onClick={() => navigate('/descriptions')}>{t('nav.descriptions', 'Descriptions')}</li>
                    <li onClick={() => navigate('/contact')}>{t('nav.contact', 'Contact Us')}</li>
                </ul>

                <div className="nav-actions">
                    <button className="btn-login">{t('nav.login', 'Login')}</button>

                    {/* Language Toggle */}
                    <div className="lang-toggle-container" aria-label="Language selector">
                        <button
                            className={`lang-tab ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </button>
                        <button
                            className={`lang-tab ${i18n.language === 'te' ? 'active' : ''}`}
                            onClick={() => changeLanguage('te')}
                        >
                            తెలుగు
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
