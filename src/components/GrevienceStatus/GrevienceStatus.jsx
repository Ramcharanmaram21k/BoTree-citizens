import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Calendar, FileText, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';
import './GrevienceStatus.css';

const mockFetchGrievance = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === '000') {
                reject(new Error('error'));
                return;
            }
            resolve({
                grievance_id: id,
                district: "Visakhapatnam",
                mandal: "Gajuwaka",
                department: "Municipal Administration",
                status: id === '999' ? 'stResolved' : 'stProgress',
                sla_due_date: "2025-11-25T17:00:00",
                summary_ai: "Citizen reports overflowing sewage in Sector 4 causing health hazards. Requesting immediate cleaning.",
                timeline: [
                    { date: "2025-11-20T10:00:00", status: "stRegistered", note: "Complaint registered via Mobile App" },
                    { date: "2025-11-20T15:30:00", status: "stAssigned", note: "Case assigned to Field Officer" },
                    { date: "2025-11-21T11:00:00", status: "stProgress", note: "Field visit scheduled" }
                ],
                closed_at: "2025-11-24T14:00:00",
                resolution_note: "Drainage block cleared and sanitized area.",
            });
        }, 800);
    });
};

export default function GrievanceStatus() {
    const { t } = useTranslation();
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const res = await mockFetchGrievance(input);
            setData(res);
        } catch (err) {
            setError(t('statusPage.error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="status-container">
            <div className="status-wrapper">
                {/* Header Section */}
                <div className="status-header-box">
                    <Activity className="status-header-icon" />
                    <h2>{t('statusPage.title')}</h2>
                    <p>{t('statusPage.subtitle')}</p>
                </div>

                {/* Search Box */}
                <div className="status-search-box">
                    <form onSubmit={handleSearch}>
                        <div className="search-input-group">
                            <Search className="search-input-icon" size={20} />
                            <input
                                type="text"
                                placeholder={t('statusPage.placeholder')}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <button type="submit" disabled={loading} className="btn-search">
                            {loading ? t('statusPage.btnChecking') : t('statusPage.btnCheck')}
                        </button>
                    </form>
                    {error && <div className="status-error"><AlertCircle size={16}/> {error}</div>}
                </div>

                {/* Results Section */}
                {data && (
                    <div className="status-result-card fade-in">
                        {/* Top ID Bar */}
                        <div className="result-top-bar">
                            <div className="result-id">
                                <span>{t('statusPage.labelId')}</span>
                                <h3>#{data.grievance_id}</h3>
                            </div>
                            <div className={`status-badge ${data.status === 'stResolved' ? 'success' : 'pending'}`}>
                                {t(`statusPage.${data.status}`)}
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="result-grid">
                            <div className="result-item">
                                <MapPin size={18} className="item-icon" />
                                <div>
                                    <label>{t('statusPage.labelLoc')}</label>
                                    <p>{data.district}, {data.mandal}</p>
                                </div>
                            </div>
                            <div className="result-item">
                                <FileText size={18} className="item-icon" />
                                <div>
                                    <label>{t('statusPage.labelDept')}</label>
                                    <p>{data.department}</p>
                                </div>
                            </div>
                            <div className="result-item">
                                <Calendar size={18} className="item-icon" />
                                <div>
                                    <label>{t('statusPage.labelSla')}</label>
                                    <p>{new Date(data.sla_due_date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>

                        {/* AI Summary */}
                        <div className="ai-summary-box">
                            <h4>✨ {t('statusPage.aiSummary')}</h4>
                            <p>{data.summary_ai}</p>
                        </div>

                        {/* Timeline */}
                        <div className="timeline-box">
                            <h4>{t('statusPage.history')}</h4>
                            <div className="timeline-list">
                                {data.timeline.map((ev, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <span className="timeline-date">
                                                {new Date(ev.date).toLocaleDateString()}
                                            </span>
                                            <strong>{t(`statusPage.${ev.status}`)}</strong>
                                            <p>{ev.note}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resolution Note (if resolved) */}
                        {data.status === 'stResolved' && (
                            <div className="resolution-box">
                                <CheckCircle2 className="res-icon" size={24} />
                                <div>
                                    <h5>{t('statusPage.resolvedHeader')}</h5>
                                    <p>"{data.resolution_note}"</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}