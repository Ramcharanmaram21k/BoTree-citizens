// src/i18n/texts.js

export const TEXT = {
    en: {
        // --- APP HEADER / NAV ---
        appTitle: 'BoTree',
        appSubtitle: 'Govt of Andhra Pradesh',

        navHome: 'Home',
        navLodge: 'Lodge Grievance',
        navStatus: 'Grievance Status',
        navPrint: 'Print Receipt',

        // --- HERO SECTION ---
        heroTitle: 'Welcome to Avani',
        heroSubtitle: 'The Official Grievance Redressal Platform',
        heroLodgeBtn: 'Lodge Grievance',
        heroStatusBtn: 'Check Status',

        // --- LODGE FORM ---
        lodgeHeader: 'Lodge Your Grievance',
        lodgeSub: 'Please fill all mandatory fields marked with *',

        // Section Titles
        secPersonal: '1. Personal Details',
        secGrievance: '2. Grievance Details',
        secEvidence: '3. upload files',

        // Personal Labels
        lblName: 'Full Name *',
        lblPhone: 'Phone Number *',
        lblEmail: 'Email ID *',
        lblAddress: 'Address *',
        lblDistrict: 'District *',
        lblGender: 'Gender',

        // Grievance Labels
        lblDept: 'Department',
        lblComplaint: 'Complaint Details *',
        lblSpeakIn: 'Speak in:',

        // Placeholders / Options
        phSelect: '-- Select --',
        phSelectDept: '-- Select Department --',
        phComplaintEn: 'Describe your issue here...',
        phComplaintTe: 'Describe your issue here...', // Fallback for consistency

        // Gender Options
        optMale: 'Male',
        optFemale: 'Female',
        optOther: 'Other',

        // Dept Options
        deptMunicipal: 'Municipal Administration',
        deptWater: 'Water Resources',
        deptRevenue: 'Revenue',
        deptPanchayat: 'Panchayat Raj',

        // Buttons / Mic
        btnRecord: ' Record',
        btnListening: ' Listening...',
        btnSubmit: 'Submit Grievance',

        // Upload
        lblUpload: 'Click to Upload Photo',
        charsLeft: 'chars left',

        // --- STATUS PAGE ---
        statusTitle: 'Check Grievance Status',
        statusSub: 'Enter your reference ID to track progress',
        statusPlaceholder: 'e.g. AP-2025-884',
        statusError: 'ID not found',
        statusLocation: 'Location',
        statusDepartment: 'Department',
        statusAiSummary: 'AI Summary',
        statusTimeline: 'Timeline',
        statusResolved: 'Resolved',
        statusInProgress: 'In Progress',
        statusRegistered: 'Registered',
        statusAssigned: 'Assigned',
        grievanceIdLabel: 'GRIEVANCE ID',

        // --- PRINT PAGE ---
        printTitle: 'Print Receipt Module',
        printSub: 'Enter Grievance ID to print acknowledgment',
    },

    te: {
        // --- APP HEADER / NAV ---
        appTitle: 'beTree',
        appSubtitle: 'ఆంధ్రప్రదేశ్ ప్రభుత్వం',

        navHome: 'హోమ్',
        navLodge: 'ఫిర్యాదు నమోదు',
        navStatus: 'ఫిర్యాదు స్థితి',
        navPrint: 'రసీదు ముద్రణ',

        // --- HERO SECTION ---
        heroTitle: 'స్పందనకు స్వాగతం',
        heroSubtitle: 'ప్రభుత్వ ఫిర్యాదు పరిష్కార వేదిక',
        heroLodgeBtn: 'ఫిర్యాదు నమోదు',
        heroStatusBtn: 'స్థితి చూడండి',

        // --- LODGE FORM ---
        lodgeHeader: 'మీ ఫిర్యాదును నమోదు చేయండి',
        lodgeSub: '* గుర్తు ఉన్న ఖాళీలు తప్పనిసరిగా పూరించండి',

        // Section Titles
        secPersonal: '1. వ్యక్తిగత వివరాలు',
        secGrievance: '2. ఫిర్యాదు వివరాలు',
        secEvidence: '3. ఆధారాలు',

        // Personal Labels
        lblName: 'పూర్తి పేరు *',
        lblPhone: 'మొబైల్ నంబర్ *',
        lblEmail: 'ఈమెయిల్ ఐడి *',
        lblAddress: 'చిరునామా *',
        lblDistrict: 'జిల్లా *',
        lblGender: 'లింగం',

        // Grievance Labels
        lblDept: 'శాఖ',
        lblComplaint: 'ఫిర్యాదు వివరాలు *',
        lblSpeakIn: 'మాట్లాడే భాష:',

        // Placeholders / Options
        phSelect: '-- ఎంచుకోండి --',
        phSelectDept: '-- శాఖను ఎంచుకోండి --',
        phComplaintEn: 'మీ సమస్యను ఇక్కడ వివరించండి...',
        phComplaintTe: 'మీ సమస్యను ఇక్కడ వివరించండి...',

        // Gender Options
        optMale: 'పురుషుడు',
        optFemale: 'స్త్రీ',
        optOther: 'ఇతరులు',

        // Dept Options
        deptMunicipal: 'మున్సిపల్ పరిపాలన',
        deptWater: 'నీటి పారుదల శాఖ',
        deptRevenue: 'రెవెన్యూ శాఖ',
        deptPanchayat: 'పంచాయతీ రాజ్',

        // Buttons / Mic
        btnRecord: ' రికార్డ్ చేయండి',
        btnListening: ' వింటున్నాను...',
        btnSubmit: 'ఫిర్యాదును సమర్పించండి',

        // Upload
        lblUpload: 'ఫోటో అప్‌లోడ్ చేయడానికి ఇక్కడ క్లిక్ చేయండి',
        charsLeft: 'అక్షరాలు మిగిలి ఉన్నాయి',

        // --- STATUS PAGE ---
        statusTitle: 'ఫిర్యాదు స్థితిని తెలుసుకోండి',
        statusSub: 'మీ రిఫరెన్స్ ఐడిని నమోదు చేసి పురోగతి చూడండి',
        statusPlaceholder: 'ఉదా: AP-2025-884',
        statusError: 'ఐడి కనబడలేదు',
        statusLocation: 'స్థానం',
        statusDepartment: 'శాఖ',
        statusAiSummary: 'AI సారాంశం',
        statusTimeline: 'టైమ్‌లైన్',
        statusResolved: 'పరిష్కరించబడింది',
        statusInProgress: 'పరిష్కరిస్తున్నారు',
        statusRegistered: 'నమోదైంది',
        statusAssigned: 'బాధ్యునికి అప్పగించారు',
        grievanceIdLabel: 'ఫిర్యాదు ఐడి',

        // --- PRINT PAGE ---
        printTitle: 'రసీదు ముద్రణ మాడ్యూల్',
        printSub: 'ఫిర్యాదు ఐడిని నమోదు చేసి అంగీకార రసీదు ముద్రించండి',
    }
};
