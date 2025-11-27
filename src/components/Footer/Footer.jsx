import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import footer_logo from '../../assets/rtgs-logo.png'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-address">
                        <h4>{t('footer.addressTitle', 'Address')}</h4>
                        <p>Chief Minister's Grievance Redressal System (CMGRS), Block 1,</p>
                        <p>Secretariat, Velagapudi, Amaravathi, Andhra Pradesh, India.</p>
                        <p>Email: pgrs-helpdesk[at]ap[dot]gov[dot]in</p>
                    </div>
                    <div className="rtgs-logo text-center">
                        <img src={footer_logo} alt="RTGS" />
                        <p>REAL TIME GOVERNANCE</p>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>{t('footer.copyright', 'Designed and developed by Real Time Governance Society (RTGS)')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;