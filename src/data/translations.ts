import { Language } from '../types/clinic';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    navAbout: 'About',
    navDoctor: 'Doctor',
    navCare: 'Care Areas',
    navFacilities: 'Facilities',
    navApproach: 'Approach',
    navSelfCheck: 'Self-Check',
    navFaq: 'FAQ',
    navVisit: 'Visit Clinic',
    bookConsultation: 'Book Consultation',
    callNow: 'Call Us',

    // Hero
    badgeLicensed: 'Specialized Psychiatric Care · Latur, Maharashtra',
    heroTagline: 'A Healthier Mind. A Fuller, Joyful Life.',
    heroSubtext: 'Mental healthcare that listens first. Private, unhurried psychiatric consultations and modern neuro-diagnostic facilities led by Dr. Shradha (Niture) Patrike in Latur.',
    btnBookWhatsApp: 'Book On WhatsApp',
    btnExploreCare: 'Explore Care Areas',
    doctorCreds: 'MBBS · DPM · Consultant Psychiatrist',
    clinicNameSub: 'Centre For Mental Health',
    mottoMarathi: '“निरोगी मन, आनंदी जीवन”',
    mottoEn: 'Healthy Mind · Joyful Life',

    // Trust Ticker
    tickConfidential: '100% Strict Patient Privacy',
    tickRegDoctor: 'Qualified Consultant Psychiatrist',
    tickEegMbt: 'In-House Digital EEG & MBT',
    tickIpdOpd: 'Outpatient & Inpatient (IPD)',
    tickStudent: 'Student & Youth Counselling',
    tickConcession: 'Concessions For Needy Patients',

    // About
    aboutEyebrow: 'The UMED Difference',
    aboutHeading: 'Care That Treats The Human, Not Just The Symptom.',
    aboutP1: 'Mental wellbeing is not a luxury—it is the foundation of living fully. At UMED Centre for Mental Health in Latur, we have built a calm, non-judgmental medical haven where individuals and families find safety, scientific clarity, and genuine healing.',
    aboutP2: 'Whether you are facing quiet anxiety, severe clinical depression, substance dependence, or academic distress, you will find an unhurried listener and an evidence-backed path forward.',

    // Doctor
    docEyebrow: 'Meet Your Consultant Psychiatrist',
    docHeading: 'A Steady, Compassionate Presence In Moments Of Uncertainty.',
    docLead: 'Dr. Shradha (Niture) Patrike combines extensive clinical psychiatric training with an unhurried, empathetic approach. Her practice is rooted in the belief that feeling truly heard is the essential starting point of recovery.',
    readFullBio: 'Read Doctor’s Full Profile',
    consultationHours: 'Consultation Hours: Mon – Sat (10:00 AM – 8:00 PM)',

    // Care
    careEyebrow: 'Specialized Clinical Areas',
    careHeading: 'Comprehensive Mental Health Support Designed Around Your Life.',
    careSubtitle: 'Every person’s journey is unique. Explore our dedicated medical and therapeutic disciplines, each grounded in modern evidence-based psychiatric science.',
    btnViewDetails: 'View Clinical Details',
    modalSymptomsTitle: 'Common Signs & Experiences Addressed',
    modalTreatmentTitle: 'Our Clinical & Therapeutic Approach',
    modalSuitableTitle: 'Who Can Benefit From This',
    modalBookThisService: 'Book Consultation For This Care',

    // Facilities
    facEyebrow: 'Infrastructure & Tech',
    facHeading: 'Advanced Neuro-Diagnostics And Inpatient Care Under One Roof.',
    facSubtitle: 'From state-of-the-art brain EEG mapping to monitored MBT and a dedicated inpatient ward, UMED ensures complete clinical continuity in Latur.',

    // Self-Check
    selfEyebrow: 'Confidential Self-Reflection',
    selfHeading: 'Take A Gentle, 60-Second Check On How You Are Feeling.',
    selfSubtitle: 'This is not a diagnostic test, but a compassionate checkpoint to help you understand your emotional state and discover which care area might support you best.',
    btnStartSelfCheck: 'Start Gentle Self-Reflection',

    // Approach
    appEyebrow: 'The 3-Step Journey',
    appHeading: 'A Clear, Patient-Guided Pathway To Sustained Wellbeing.',

    // FAQ
    faqEyebrow: 'Clear Answers & Transparency',
    faqHeading: 'Everything You Need To Know Before Visiting UMED.',
    faqFilterAll: 'All Questions',
    faqFilterGeneral: 'First Visit & Privacy',
    faqFilterTreatment: 'Treatments & Medicines',
    faqFilterPractical: 'Booking & Location',

    // Visit
    visitEyebrow: 'Find UMED In Latur',
    visitHeading: 'A Tranquil, Centrally Accessible Clinic In The Heart Of Latur.',
    visitAddressTitle: 'Clinic Location',
    visitAddressValue: 'Behind Hotel Anjani, Shivaji Chowk, Latur, Maharashtra 413512',
    visitHoursTitle: 'Consultation Timings',
    visitHoursWeekday: 'Monday To Saturday: 10:00 AM – 8:00 PM',
    visitHoursSunday: 'Sunday: Prior Appointment / Emergency',
    visitContactTitle: 'Direct Clinic Lines',
    visitEmailTitle: 'Official Email',
    btnGetDirections: 'Open In Google Maps',

    // Booking Modal
    bookModalTitle: 'Schedule A Consultation With Dr. Shradha',
    bookModalSubtitle: 'Select your preferred concern and timing. This will open a pre-formatted WhatsApp message directly to our clinic desk on +91 90670 89323.',
    lblService: 'Area Of Care / Concern',
    lblDay: 'Preferred Day',
    lblTime: 'Preferred Time Of Day',
    lblName: 'Patient Or Caregiver Name',
    lblPhone: 'Contact Number (Optional)',
    lblNotes: 'Brief Note Or Concern (Optional)',
    dayToday: 'Today (Earliest Available)',
    dayTomorrow: 'Tomorrow',
    dayThisWeek: 'This Week',
    timeMorning: 'Morning (10:00 AM – 1:00 PM)',
    timeAfternoon: 'Afternoon (1:00 PM – 4:00 PM)',
    timeEvening: 'Evening (4:00 PM – 8:00 PM)',
    btnSendWhatsApp: 'Send Request Via WhatsApp',
    orCallDirectly: 'Or Call Our Clinic Directly:',

    // Crisis
    crisisNotice: 'Important Notice: If you or someone you know is in acute danger or experiencing overwhelming suicidal thoughts, please call a 24/7 crisis helpline immediately or visit the nearest hospital emergency department.',

    // Footer
    footerRights: 'All Rights Reserved. UMED Centre For Mental Health, Latur.',
    footerLegal: 'Medical practice led by Dr. Shradha (Niture) Patrike (MBBS, DPM). Consultations strictly by appointment.',
  },
  mr: {
    // Nav
    navAbout: 'आमच्याबद्दल',
    navDoctor: 'डॉक्टर परिचय',
    navCare: 'उपचार विभाग',
    navFacilities: 'उपलब्ध सुविधा',
    navApproach: 'उपचार पद्धती',
    navSelfCheck: 'स्व-तपासणी',
    navFaq: 'वारंवार विचारले जाणारे प्रश्न',
    navVisit: 'क्लिनिक पत्ता',
    bookConsultation: 'अपॉइंटमेंट बुक करा',
    callNow: 'फोन करा',

    // Hero
    badgeLicensed: 'विशेष मानसोपचार केंद्र · लातूर, महाराष्ट्र',
    heroTagline: 'निरोगी मन. आनंदी जीवन.',
    heroSubtext: 'रुग्णाचे म्हणणे शांतपणे ऐकून घेणारे हक्काचे ठिकाण. डॉ. श्रद्धा (नितूरे) पत्रिके यांच्या मार्गदर्शनाखाली लातूर येथे उपलब्ध आधुनिक मानसोपचार, समुपदेशन व ईईजी (EEG) मेंदू तपासणी सुविधा.',
    btnBookWhatsApp: 'व्हॉट्सअ‍ॅपवर वेळ निश्चित करा',
    btnExploreCare: 'उपचार विभाग पहा',
    doctorCreds: 'एम.बी.बी.एस. · डी.पी.एम. · मानसोपचार तज्ज्ञ',
    clinicNameSub: 'सेंटर फॉर मेंटल हेल्थ',
    mottoMarathi: '“निरोगी मन, आनंदी जीवन”',
    mottoEn: 'Healthy Mind · Joyful Life',

    // Trust Ticker
    tickConfidential: '१००% संपूर्ण गोपनीयता व सुरक्षितता',
    tickRegDoctor: 'तज्ज्ञ मानसोपचार डॉक्टर (MBBS, DPM)',
    tickEegMbt: 'क्लिनिकमध्येच डिजिटल EEG व MBT',
    tickIpdOpd: 'बाह्यरुग्ण (OPD) व अंतररुग्ण (IPD)',
    tickStudent: 'विद्यार्थी व युवक समुपदेशन',
    tickConcession: 'गरजू रुग्णांसाठी माफक दरात सेवा',

    // About
    aboutEyebrow: 'उमेदचे वैशिष्ट्य',
    aboutHeading: 'केवळ लक्षणांवर नव्हे, तर व्यक्तीच्या सर्वांगीण स्वास्थ्यावर उपचार.',
    aboutP1: 'मानसिक स्वास्थ्य हा कोणत्याही संकोचाचा विषय नाही. उमेद सेंटर फॉर मेंटल हेल्थ, लातूर येथे आम्ही रुग्णाला आदर, सुरक्षितता आणि शास्त्रशुद्ध वैद्यकीय मार्गदर्शन मिळवून देतो.',
    aboutP2: 'नैराश्य, अनामिक भीती, व्यसन, नात्यांमधील तणाव किंवा अभ्यासाची चिंता—कोणत्याही त्रासात तुम्हाला येथे योग्य व दिलासादायक आधार मिळेल.',

    // Doctor
    docEyebrow: 'मानसोपचार तज्ज्ञ परिचय',
    docHeading: 'कठीण प्रसंगात विश्वासाचा आणि आधाराचा हात.',
    docLead: 'डॉ. श्रद्धा (नितूरे) पत्रिके या वैद्यकीय ज्ञान आणि संवेदनशील संवाद यांच्या मिलाफातून रुग्णांवर उपचार करतात. रुग्णाचे म्हणणे शांतपणे ऐकून घेणे हीच उपचारांची खरी पहिली पायरी असते असा त्यांचा विश्वास आहे.',
    readFullBio: 'डॉक्टरांची सविस्तर माहिती पहा',
    consultationHours: 'भेटण्याची वेळ: सोमवार ते शनिवार (सकाळी १०:०० ते रात्री ८:००)',

    // Care
    careEyebrow: 'विशेष उपचार विभाग',
    careHeading: 'तुमच्या गरजेनुसार सविस्तर व योग्य मानसोपचार सेवा.',
    careSubtitle: 'प्रत्येक व्यक्तीची समस्या वेगळी असते. शास्त्रीय निकषांवर आधारित आमचे विविध उपचार विभाग खालीलप्रमाणे आहेत.',
    btnViewDetails: 'सविस्तर माहिती पहा',
    modalSymptomsTitle: 'लक्षणे व अनुभव',
    modalTreatmentTitle: 'आमची उपचार पद्धती',
    modalSuitableTitle: 'कोणासाठी उपयुक्त',
    modalBookThisService: 'या उपचारासाठी वेळ बुक करा',

    // Facilities
    facEyebrow: 'अत्याधुनिक सुविधा',
    facHeading: 'प्रगत मेंदू तपासणी, आधुनिक यंत्रे व सुसज्ज वॉर्ड एकाच छताखाली.',
    facSubtitle: 'डिजिटल ईईजी (EEG) मशीन, मल्टीबिहेविअर थेरेपी (MBT), ईसीजी आणि २४ तास देखरेखीचा अंतररुग्ण विभाग लातूरमध्ये उपलब्ध.',

    // Self-Check
    selfEyebrow: 'गोपनीय स्व-तपासणी',
    selfHeading: 'तुमच्या मानसिक स्थितीची एक छोटी, संवेदनशील तपासणी.',
    selfSubtitle: 'हे कोणतेही अंतिम वैद्यकीय निदान नाही, पण सध्याच्या तणावाचे स्वरूप समजून घेण्यासाठी व योग्य विभाग निवडण्यासाठी एक सोपे पाऊल आहे.',
    btnStartSelfCheck: 'स्व-तपासणी सुरू करा',

    // Approach
    appEyebrow: '३ टप्प्यांचा उपचार प्रवास',
    appHeading: 'शांत आणि सुरक्षितपणे मानसिक स्वास्थ्य मिळवण्याचा मार्ग.',

    // FAQ
    faqEyebrow: 'माहिती व शंका निरसन',
    faqHeading: 'उमेद क्लिनिकला भेट देण्यापूर्वी मनातील सर्व प्रश्नांची उत्तरे.',
    faqFilterAll: 'सर्व प्रश्न',
    faqFilterGeneral: 'पहिली भेट व गोपनीयता',
    faqFilterTreatment: 'उपचार व औषधे',
    faqFilterPractical: 'वेळ व पत्ता',

    // Visit
    visitEyebrow: 'लातूर येथील पत्ता',
    visitHeading: 'शहराच्या मध्यवर्ती भागात शांत व सुलभ ठिकाणी क्लिनिक.',
    visitAddressTitle: 'क्लिनिकचा पत्ता',
    visitAddressValue: 'हॉटेल अंजनीच्या मागे, छत्रपती शिवाजी महाराज चौक, लातूर, महाराष्ट्र ४१३५१२',
    visitHoursTitle: 'तपासणीच्या वेळा',
    visitHoursWeekday: 'सोमवार ते शनिवार: सकाळी १०:०० ते रात्री ८:००',
    visitHoursSunday: 'रविवार: पूर्व नियोजित वेळेनुसार / तातडीची सेवा',
    visitContactTitle: 'थेट संपर्क क्रमांक',
    visitEmailTitle: 'ईमेल पत्ता',
    btnGetDirections: 'गुगल मॅप्सवर दिशा पहा',

    // Booking Modal
    bookModalTitle: 'डॉ. श्रद्धा यांच्या भेटीची वेळ निश्चित करा',
    bookModalSubtitle: 'तुमचा त्रास व सोयीची वेळ निवडा. याद्वारे थेट क्लिनिकच्या व्हॉट्सअ‍ॅपवर (+91 90670 89323) मेसेज पाठवला जाईल.',
    lblService: 'उपचाराचा विभाग / तक्रार',
    lblDay: 'सोयीचा दिवस',
    lblTime: 'सोयीची वेळ',
    lblName: 'रुग्णाचे किंवा नातेवाईकाचे नाव',
    lblPhone: 'संपर्क क्रमांक (पर्यायी)',
    lblNotes: 'काही विशेष माहिती (पर्यायी)',
    dayToday: 'आज (शक्य तितक्या लवकर)',
    dayTomorrow: 'उद्या',
    dayThisWeek: 'या आठवड्यात',
    timeMorning: 'सकाळ (१०:०० ते ०१:००)',
    timeAfternoon: 'दुपार (०१:०० ते ०४:००)',
    timeEvening: 'संध्याकाळ (०४:०० ते ०८:००)',
    btnSendWhatsApp: 'व्हॉट्सअ‍ॅपवर संदेश पाठवा',
    orCallDirectly: 'किंवा थेट फोनवर संपर्क साधा:',

    // Crisis
    crisisNotice: 'महत्त्वाची सूचना: जर रुग्ण अत्यंत तीव्र नैराश्यात असेल किंवा स्वतःला इजा पोहोचवण्याचा धोका असेल, तर त्वरित शासकीय हेल्पलाईनवर संपर्क साधावा किंवा जवळच्या हॉस्पिटलच्या इमर्जन्सी विभागात जावे.',

    // Footer
    footerRights: 'सर्व हक्क राखीव. उमेद सेंटर फॉर मेंटल हेल्थ, लातूर.',
    footerLegal: 'वैद्यकीय सल्ला व उपचार: डॉ. श्रद्धा (नितूरे) पत्रिके (MBBS, DPM). भेटीसाठी पूर्व नोंदणी आवश्यक.',
  },
};
