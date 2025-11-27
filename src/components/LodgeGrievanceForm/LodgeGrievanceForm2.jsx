import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios'; // Removed Backend Dependency
import { useTranslation } from 'react-i18next';
import { FilePlus, CheckCircle, Upload, User, FileText, Mic, Loader, MapPin, ChevronDown } from 'lucide-react';
import './LodgeGrievanceForm-centered.css';

// --- DATA MAPPING ---
const AP_LOCATIONS = {
    "Visakhapatnam": {
        te: "విశాఖపట్నం",
        mandals: {
            "Bheemunipatnam": { te: "భీమునిపట్నం", villages: [{ en: "Majji Valasa", te: "మజ్జి వలస" }, { en: "Kapuluppada", te: "కాపులుప్పాడ" }] },
            "Gajuwaka": { te: "గాజువాక", villages: [{ en: "Tungalam", te: "తుంగళం" }, { en: "Fakirtakya", te: "ఫకీర్తక్య" }] }
        }
    },
    "NTR": {
        te: "ఎన్టీఆర్",
        mandals: {
            "Vijayawada Rural": { te: "విజయవాడ రూరల్", villages: [{ en: "Enikepadu", te: "ఎనికేపాడు" }, { en: "Nunna", te: "నూన్న" }] },
            "Mylavaram": { te: "మైలవరం", villages: [{ en: "Chandrala", te: "చంద్రాల" }, { en: "Velvadam", te: "వెల్వడం" }] }
        }
    },
    "Guntur": {
        te: "గుంటూరు",
        mandals: {
            "Tenali": { te: "తెనాలి", villages: [{ en: "Angalakuduru", te: "అంగలకుదురు" }, { en: "Burripalem", te: "బుర్రిపాలెం" }] },
            "Mangalagiri": { te: "మంగళగిరి", villages: [{ en: "Atmakuru", te: "ఆత్మకూరు" }, { en: "Navuluru", te: "నవులూరు" }] }
        }
    },
    "Chittoor": {
        te: "చిత్తూరు",
        mandals: {
            "Puthalapattu": { te: "పూతలపట్టు", villages: [{ en: "Bandapalle", te: "బండపల్లె" }, { en: "Petoor", te: "పేటూరు" }] },
            "Nagari": { te: "నగరి", villages: [{ en: "Ekambarakuppam", te: "ఏకాంబరకుప్పం" }, { en: "Satravada", te: "సత్రవాడ" }] }
        }
    },
    "Kurnool": {
        te: "కర్నూలు",
        mandals: {
            "Adoni": { te: "ఆదోని", villages: [{ en: "Isvi", te: "ఇస్వి" }, { en: "Mandagiri", te: "మండగిరి" }] },
            "Pattikonda": { te: "పత్తికొండ", villages: [{ en: "Chakrala", te: "చక్రాల" }, { en: "Puchakayalamada", te: "పుచ్చకాయలమడ" }] }
        }
    }
};

const LodgeGrievanceForm = () => {
    const { t, i18n } = useTranslation();
    const isTe = i18n.language === 'te';

    const [status, setStatus] = useState('idle');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [isListening, setIsListening] = useState(false);
    const [voiceLang, setVoiceLang] = useState('te-IN');
    const recognitionRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '', age: '', mobile: '', email: '', gender: 'Male',
        address: '', district: '', mandal: '', village: '',
        department: '', details: '', declaration: false
    });

    const handleDistrictChange = (e) => {
        setFormData({ ...formData, district: e.target.value, mandal: '', village: '' });
    };

    const handleMandalChange = (e) => {
        setFormData({ ...formData, mandal: e.target.value, village: '' });
    };

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setFormData(prev => ({
                    ...prev,
                    details: prev.details ? `${prev.details} ${transcript}` : transcript
                }));
            };
            recognitionRef.current = recognition;
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Your browser does not support Voice Typing. Please use Chrome.");
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.lang = voiceLang;
            recognitionRef.current.start();
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Check Declaration
        if (!formData.declaration) {
            alert(isTe ? "దయచేసి డిక్లరేషన్‌ను అంగీకరించండి" : "Please accept the declaration.");
            return;
        }

        // 2. Show Loading Spinner
        setStatus('submitting');

        // 3. Simulate Network Request (Mocking Backend)
        setTimeout(() => {
            // After 1.5 seconds, show success
            setStatus('success');
            console.log("Mock Submission Data:", formData);
            if(selectedFile) console.log("Mock File:", selectedFile.name);
        }, 1500);
    };

    const getMandals = () => {
        const distData = AP_LOCATIONS[formData.district];
        return distData ? Object.keys(distData.mandals) : [];
    };

    const getVillages = () => {
        const distData = AP_LOCATIONS[formData.district];
        if (!distData) return [];
        const mandalData = distData.mandals[formData.mandal];
        return mandalData ? mandalData.villages : [];
    };

    // --- SUCCESS CARD VIEW ---
    if (status === 'success') {
        return (
            <div className="form-container">
                <div className="form-card success-view fade-up">
                    <CheckCircle size={64} className="success-icon" />
                    <h2>{isTe ? 'ఫిర్యాదు స్వీకరించబడింది!' : 'Grievance Submitted!'}</h2>
                    <p>{isTe ? 'మేము మీ ఫిర్యాదును స్వీకరించాము.' : 'We have received your complaint.'}</p>
                    <button className="btn-primary" onClick={() => window.location.reload()}>
                        {isTe ? 'మరొకటి నమోదు చేయండి' : 'Lodge Another'}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="form-container">
            <div className="form-card fade-up">
                <div className="form-header">
                    <h2><FilePlus size={24} color="white" /> {t('lodgeHeader')}</h2>
                    <p>{t('lodgeSub')}</p>
                </div>

                <form onSubmit={handleSubmit} className="form-body">
                    {status === 'submitting' && (
                        <div className="loading-overlay">
                            <div className="spinner"></div>
                        </div>
                    )}

                    {/* 1. Personal Details */}
                    <section className="form-section">
                        <div className="section-header">
                            <User className="section-icon" size={20} />
                            <h3>{t('secPersonal')}</h3>
                        </div>

                        <div className="form-grid">
                            <div className="form-group span-2-mobile">
                                <label>{t('lblName')} <span className="req">*</span></label>
                                <input type="text" required className="form-control"
                                       value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                            </div>

                            <div className="form-group">
                                <label>{isTe ? 'వయస్సు' : 'Age'} <span className="req">*</span></label>
                                <input type="number" required className="form-control" min="18" max="100"
                                       value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })}/>
                            </div>

                            <div className="form-group">
                                <label>{t('lblGender')} <span className="req">*</span></label>
                                <div className="select-wrapper">
                                    <select className="form-control" value={formData.gender}
                                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                        <option value="Male">{t('optMale')}</option>
                                        <option value="Female">{t('optFemale')}</option>
                                        <option value="Other">{t('optOther')}</option>
                                    </select>
                                    <ChevronDown className="select-icon" size={16}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>{t('lblPhone')} <span className="req">*</span></label>
                                <input type="tel" required className="form-control" maxLength="10"
                                       value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}/>
                            </div>

                            <div className="form-group">
                                <label>{t('lblEmail')} <span className="req">*</span></label>
                                <input type="email" required className="form-control"
                                       value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                            </div>
                        </div>
                    </section>

                    {/* 2. Location Details */}
                    <section className="form-section">
                        <div className="section-header">
                            <MapPin className="section-icon" size={20} />
                            <h3>{isTe ? 'చిరునామా వివరాలు' : 'Location Details'}</h3>
                        </div>

                        <div className="form-grid">
                            <div className="form-group span-full">
                                <label>{t('lblAddress')} <span className="req">*</span></label>
                                <input type="text" required className="form-control"
                                       value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
                            </div>

                            <div className="form-group">
                                <label>{t('lblDistrict')} <span className="req">*</span></label>
                                <div className="select-wrapper">
                                    <select className="form-control" required value={formData.district} onChange={handleDistrictChange}>
                                        <option value="">{t('phSelect')}</option>
                                        {Object.keys(AP_LOCATIONS).map((key) => (
                                            <option key={key} value={key}>
                                                {isTe ? AP_LOCATIONS[key].te : key}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="select-icon" size={16}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>{isTe ? 'మండలం' : 'Mandal'} <span className="req">*</span></label>
                                <div className="select-wrapper">
                                    <select className="form-control" required value={formData.mandal} onChange={handleMandalChange} disabled={!formData.district}>
                                        <option value="">{t('phSelect')}</option>
                                        {getMandals().map((m) => (
                                            <option key={m} value={m}>
                                                {isTe ? AP_LOCATIONS[formData.district].mandals[m].te : m}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="select-icon" size={16}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>{isTe ? 'గ్రామం' : 'Village'} <span className="req">*</span></label>
                                <div className="select-wrapper">
                                    <select className="form-control" required value={formData.village}
                                            onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                                            disabled={!formData.mandal}>
                                        <option value="">{t('phSelect')}</option>
                                        {getVillages().map((v) => (
                                            <option key={v.en} value={v.en}>
                                                {isTe ? v.te : v.en}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="select-icon" size={16}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Grievance Details */}
                    <section className="form-section">
                        <div className="section-header">
                            <FileText className="section-icon" size={20} />
                            <h3>{t('secGrievance')}</h3>
                        </div>

                        <div className="form-grid">
                            <div className="form-group span-full">
                                <label>{t('lblDept')} <span className="req">*</span></label>
                                <div className="select-wrapper">
                                    <select className="form-control" value={formData.department}
                                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}>
                                        <option value="">{t('phSelectDept')}</option>
                                        <option value="Municipal">{t('deptMunicipal')}</option>
                                        <option value="Water">{t('deptWater')}</option>
                                        <option value="Revenue">{t('deptRevenue')}</option>
                                        <option value="Panchayat">{t('deptPanchayat')}</option>
                                    </select>
                                    <ChevronDown className="select-icon" size={16}/>
                                </div>
                            </div>

                            <div className="form-group span-full">
                                <div className="mic-header">
                                    <label>{t('lblComplaint')} <span className="req">*</span></label>
                                    <div className="mic-actions">
                                        <select className="voice-lang-select" value={voiceLang} onChange={(e) => setVoiceLang(e.target.value)}>
                                            <option value="te-IN">తెలుగు</option>
                                            <option value="en-US">English</option>
                                            <option value="ur-IN">اُردو</option>
                                        </select>
                                        <button type="button" className={`btn-mic ${isListening ? 'active' : ''}`} onClick={toggleListening}>
                                            {isListening ? <Loader className="spin" size={14}/> : <Mic size={14}/>}
                                            <span>{isListening ? t('btnListening') : t('btnRecord')}</span>
                                        </button>
                                    </div>
                                </div>
                                <textarea className="form-control textarea-control" required
                                          placeholder={voiceLang === 'te-IN' ? t('phComplaintTe') : t('phComplaintEn')}
                                          value={formData.details}
                                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                ></textarea>
                                <div className="char-limit">{4000 - formData.details.length} chars remaining</div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Upload */}
                    <section className="form-section">
                        <div className="section-header">
                            <Upload className="section-icon" size={20} />
                            <h3>{t('secEvidence')}</h3>
                        </div>
                        <div className={`file-drop-zone ${selectedFile ? 'has-file' : ''}`} onClick={() => fileInputRef.current.click()}>
                            <input type="file" ref={fileInputRef} hidden onChange={handleFileChange} accept="image/*,.pdf" />
                            <div className="drop-content">
                                <Upload size={32} className="drop-icon"/>
                                <div className="drop-text">
                                    <h4>{selectedFile ? selectedFile.name : t('lblUpload')}</h4>
                                    <p>Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Declaration */}
                    <section className="declaration-box">
                        <div className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                id="declaration-check"
                                checked={formData.declaration}
                                onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
                            />
                            <label htmlFor="declaration-check">
                                {isTe
                                    ? 'పైన పేర్కొన్న సమాచారం నా జ్ఞానం మేరకు వాస్తవమని నేను ధృవీకరిస్తున్నాను.'
                                    : 'I confirm that the information provided is true to the best of my knowledge.'}
                                <span className="req"> *</span>
                            </label>
                        </div>
                    </section>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit">
                            {t('btnSubmit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LodgeGrievanceForm;