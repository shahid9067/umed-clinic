export type Language = 'en' | 'mr';

export interface CareItem {
  id: string;
  titleEn: string;
  titleMr: string;
  categoryEn: string;
  categoryMr: string;
  shortDescEn: string;
  shortDescMr: string;
  iconName: string;
  fullDescEn: string;
  fullDescMr: string;
  symptomsEn: string[];
  symptomsMr: string[];
  treatmentEn: string[];
  treatmentMr: string[];
  suitableForEn: string;
  suitableForMr: string;
  imageUrl: string;
  imageAltEn: string;
  badge?: string;
}

export interface FacilityItem {
  id: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
  badgeEn: string;
  badgeMr: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionMr: string;
  answerEn: string;
  answerMr: string;
  category: 'general' | 'treatment' | 'practical';
}

export interface DoctorInfo {
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
  degreesEn: string;
  degreesMr: string;
  experienceEn: string;
  experienceMr: string;
  bioEn: string[];
  bioMr: string[];
  philosophyEn: string;
  philosophyMr: string;
  pillarsEn: { title: string; desc: string }[];
  pillarsMr: { title: string; desc: string }[];
}

export interface BookingFormData {
  service: string;
  preferredDay: string;
  preferredTime: string;
  patientName: string;
  phone: string;
  notes: string;
}
