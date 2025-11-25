import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // --- HEADER & NAVBAR ---
            header: {
                title: "BoTree – AI Governance Engine",
                centralized: "Centralized Public Grievance System",
                ministerName: "Sri Nara Lokesh",
                ministerTitle: "Honorable Minister"
            },
            nav: {
                home: "Home",
                gallery: "Gallery",
                descriptions: "Descriptions",
                contact: "Contact Us",
                login: "Login",
                language: "Language"
            },

            // --- HERO SECTION ---
            hero: {
                title: "\"Public Grievance Redressal Platform\"",
                desc: "A universal grievance redressal helpline. This enables citizens to voice their concerns directly to the Chief Minister's Office.",
                point1: "Register personal or household level grievances",
                point2: "Track the status of registered grievances",
                checkStatus: "Check Status",
                cmName: "Sri Nara Chandrababu Naidu",
                cmTitle: "Hon'ble Chief Minister",
                govtName: "Government of Andhra Pradesh"
            },

            // --- PROCESS SECTION ---
            section: {
                process: "Process Involved",
                stats: "Grievance Statistics"
            },
            process: {
                register: "Register Grievance",
                registerDesc: "Lodge your complaint",
                ticket: "Receive Grievance No",
                ticketDesc: "Get unique tracking ID",
                status: "Get Updates",
                statusDesc: "Track status anytime",
                feedback: "Share Feedback",
                feedbackDesc: "Rate the service"
            },

            // --- STATS SECTION ---
            stats: {
                received: "Grievances Received",
                resolved: "Grievances Resolved",
                pending: "Grievances Pending"
            },

            // --- FOOTER ---
            footer: {
                addressTitle: "Address",
                copyright: "Designed and developed by Real Time Governance Society (RTGS)"
            },

            // --- LODGE GRIEVANCE FORM ---
            lodgeHeader: 'Lodge Your Grievance',
            lodgeSub: 'Please fill all mandatory fields marked with *',
            secPersonal: '1. Personal Details',
            secGrievance: '2. Grievance Details',
            secEvidence: '3. Upload Files',
            lblName: 'Full Name',
            lblPhone: 'Phone Number',
            lblEmail: 'Email ID',
            lblAddress: 'Address',
            lblDistrict: 'District',
            lblMandal: 'Mandal',
            lblVillage: 'Village',
            lblGender: 'Gender',
            lblDept: 'Department',
            lblComplaint: 'Complaint Details',
            lblSpeakIn: 'Speak in:',
            phSelect: '-- Select --',
            phSelectDept: '-- Select Department --',
            phComplaintEn: 'Describe your issue here...',
            phComplaintTe: 'Describe your issue here...',
            optMale: 'Male',
            optFemale: 'Female',
            optOther: 'Other',
            deptMunicipal: 'Municipal Administration',
            deptWater: 'Water Resources',
            deptRevenue: 'Revenue',
            deptPanchayat: 'Panchayat Raj',
            btnRecord: ' Record',
            btnListening: ' Listening...',
            btnSubmit: 'Submit Grievance',
            lblUpload: 'Click to Upload Photo',

            // --- STATUS PAGE TRANSLATIONS (NEW) ---
            statusPage: {
                title: "Citizen Grievance Tracker",
                subtitle: "Government of Andhra Pradesh",
                enterId: "Enter your Grievance ID",
                placeholder: "e.g. AP-2025-884",
                btnCheck: "Check Status",
                btnChecking: "Checking...",
                error: "ID not found.",
                labelId: "GRIEVANCE ID",
                labelLoc: "Location",
                labelDept: "Department",
                labelSla: "SLA Due Date",
                daysLeft: "Days Left",
                aiSummary: "AI SUMMARY",
                history: "Track History",
                resolvedHeader: "Grievance Resolved",
                resDate: "RESOLUTION DATE",
                officerNote: "OFFICER NOTE",
                // Status Values
                stRegistered: "Registered",
                stAssigned: "Assigned",
                stProgress: "In Progress",
                stResolved: "Resolved"
            }
        }
    },

    te: {
        translation: {
            // --- HEADER & NAVBAR ---
            header: {
                title: "బోట్రీ – ఏఐ గవర్నెన్స్ ఇంజిన్",
                centralized: "కేంద్రీకృత ప్రజా ఫిర్యాదుల వ్యవస్థ",
                ministerName: "శ్రీ నారా లోకేష్ గారు",
                ministerTitle: "గౌరవ మంత్రి వర్యులు"
            },
            nav: {
                home: "హోమ్",
                gallery: "గ్యాలరీ",
                descriptions: "వివరణలు",
                contact: "సంప్రదించండి",
                login: "లాగిన్",
                language: "భాష"
            },

            // --- HERO SECTION ---
            hero: {
                title: "\"ప్రజా సమస్యల పరిష్కార వేదిక\"",
                desc: "అనేది సార్వత్రిక ఫిర్యాదుల పరిష్కార హెల్ప్‌లైన్. ఇది పౌరులు తమ సమస్యను నేరుగా ముఖ్యమంత్రి కార్యాలయానికి తెలియజేయడానికి వీలు కల్పిస్తుంది.",
                point1: "వ్యక్తిగత లేదా గృహ-స్థాయి ఫిర్యాదులను నమోదు చేయండి",
                point2: "నమోదిత ఫిర్యాదు యొక్క స్థితిని తెలుసుకోండి",
                checkStatus: "స్థితిని తనిఖీ చేయండి",
                cmName: "శ్రీ నారా చంద్రబాబు నాయుడు గారు",
                cmTitle: "గౌరవ ముఖ్యమంత్రి వర్యులు",
                govtName: "ఆంధ్రప్రదేశ్ ప్రభుత్వం"
            },

            // --- PROCESS SECTION ---
            section: {
                process: "ఫిర్యాదు ప్రక్రియ",
                stats: "ఫిర్యాదు గణాంకాలు"
            },
            process: {
                register: "ఫిర్యాదు నమోదు",
                registerDesc: "మీ ఫిర్యాదును నమోదు చేయండి",
                ticket: "ఫిర్యాదు సంఖ్య",
                ticketDesc: "ట్రాకింగ్ ID పొందండి",
                status: "నవీకరణలు",
                statusDesc: "ఎప్పుడైనా స్థితిని తెలుసుకోండి",
                feedback: "అభిప్రాయం",
                feedbackDesc: "సేవను రేట్ చేయండి"
            },

            // --- STATS SECTION ---
            stats: {
                received: "నమోదుకాబడ్డ ఫిర్యాదులు",
                resolved: "పరిష్కరించిన ఫిర్యాదులు",
                pending: "పెండింగులోని ఫిర్యాదులు"
            },

            // --- FOOTER ---
            footer: {
                addressTitle: "చిరునామా",
                copyright: "రియల్ టైమ్ గవర్నెన్స్ సొసైటీ (RTGS) ద్వారా రూపొందించబడింది"
            },

            // --- LODGE GRIEVANCE FORM ---
            lodgeHeader: 'మీ ఫిర్యాదును నమోదు చేయండి',
            lodgeSub: '* గుర్తు ఉన్న ఖాళీలు తప్పనిసరిగా పూరించండి',
            secPersonal: '1. వ్యక్తిగత వివరాలు',
            secGrievance: '2. ఫిర్యాదు వివరాలు',
            secEvidence: '3. ఫైళ్ళను అప్లోడ్ చేయండి',
            lblName: 'పూర్తి పేరు',
            lblPhone: 'మొబైల్ నంబర్',
            lblEmail: 'ఈమెయిల్ ఐడి',
            lblAddress: 'చిరునామా',
            lblDistrict: 'జిల్లా',
            lblMandal: 'మండలం',
            lblVillage: 'గ్రామం',
            lblGender: 'లింగం',
            lblDept: 'శాఖ',
            lblComplaint: 'ఫిర్యాదు వివరాలు',
            lblSpeakIn: 'మాట్లాడే భాష:',
            phSelect: '-- ఎంచుకోండి --',
            phSelectDept: '-- శాఖను ఎంచుకోండి --',
            phComplaintEn: 'మీ సమస్యను ఇక్కడ వివరించండి...',
            phComplaintTe: 'మీ సమస్యను ఇక్కడ వివరించండి...',
            optMale: 'పురుషుడు',
            optFemale: 'స్త్రీ',
            optOther: 'ఇతరులు',
            deptMunicipal: 'మున్సిపల్ పరిపాలన',
            deptWater: 'నీటి పారుదల శాఖ',
            deptRevenue: 'రెవెన్యూ శాఖ',
            deptPanchayat: 'పంచాయతీ రాజ్',
            btnRecord: ' రికార్డ్ చేయండి',
            btnListening: ' వింటున్నాను...',
            btnSubmit: 'ఫిర్యాదును సమర్పించండి',
            lblUpload: 'ఫోటో అప్‌లోడ్ చేయడానికి ఇక్కడ క్లిక్ చేయండి',

            // --- STATUS PAGE TRANSLATIONS (NEW) ---
            statusPage: {
                title: "పౌర ఫిర్యాదు ట్రాకర్",
                subtitle: "ఆంధ్రప్రదేశ్ ప్రభుత్వం",
                enterId: "మీ ఫిర్యాదు ID ని నమోదు చేయండి",
                placeholder: "ఉదా: AP-2025-884",
                btnCheck: "స్థితిని తనిఖీ చేయండి",
                btnChecking: "పరిశీలిస్తోంది...",
                error: "ID కనుగొనబడలేదు.",
                labelId: "ఫిర్యాదు ID",
                labelLoc: "ప్రాంతం",
                labelDept: "శాఖ",
                labelSla: "SLA గడువు తేదీ",
                daysLeft: "రోజులు మిగిలి ఉన్నాయి",
                aiSummary: "AI సారాంశం",
                history: "ట్రాక్ చరిత్ర",
                resolvedHeader: "ఫిర్యాదు పరిష్కరించబడింది",
                resDate: "పరిష్కార తేదీ",
                officerNote: "అధికారి గమనిక",
                // Status Values
                stRegistered: "నమోదైంది",
                stAssigned: "కేటాయించబడింది",
                stProgress: "ప్రగతిలో ఉంది",
                stResolved: "పరిష్కరించబడింది"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;