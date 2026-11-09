import { Board, ClassGrade, Subject, ProductFormat } from '@/types';

export const BOARDS: Board[] = [
  { code: 'CBSE', name: 'Central Board of Secondary Education', displayOrder: 1 },
  { code: 'ICSE', name: 'Indian Certificate of Secondary Education', displayOrder: 2 },
  { code: 'STATE_KA', name: 'Karnataka State Board', displayOrder: 3 },
];

export const CLASSES: ClassGrade[] = [
  { grade: 1, name: 'Class 1', academicGroup: 'early_learners', displayOrder: 1 },
  { grade: 2, name: 'Class 2', academicGroup: 'early_learners', displayOrder: 2 },
  { grade: 3, name: 'Class 3', academicGroup: 'primary', displayOrder: 3 },
  { grade: 4, name: 'Class 4', academicGroup: 'primary', displayOrder: 4 },
  { grade: 5, name: 'Class 5', academicGroup: 'primary', displayOrder: 5 },
  { grade: 6, name: 'Class 6', academicGroup: 'middle_school', displayOrder: 6 },
  { grade: 7, name: 'Class 7', academicGroup: 'middle_school', displayOrder: 7 },
  { grade: 8, name: 'Class 8', academicGroup: 'middle_school', displayOrder: 8 },
  { grade: 9, name: 'Class 9', academicGroup: 'secondary', displayOrder: 9 },
  { grade: 10, name: 'Class 10', academicGroup: 'secondary', displayOrder: 10 },
  { grade: 11, name: 'Class 11', academicGroup: 'senior_secondary', displayOrder: 11 },
  { grade: 12, name: 'Class 12', academicGroup: 'senior_secondary', displayOrder: 12 },
];

export const SUBJECTS: Subject[] = [
  { id: 'sub-phy', slug: 'physics', name: 'Physics', code: 'PHY', iconName: 'Zap' },
  { id: 'sub-bio', slug: 'biology', name: 'Biology', code: 'BIO', iconName: 'Dna' },
  { id: 'sub-chem', slug: 'chemistry', name: 'Chemistry', code: 'CHEM', iconName: 'FlaskConical' },
  { id: 'sub-evs', slug: 'environmental-science', name: 'Environmental Science (EVS)', code: 'EVS', iconName: 'Leaf' },
  { id: 'sub-robo', slug: 'robotics-ai', name: 'Robotics & AI', code: 'ROBO', iconName: 'Bot' },
  { id: 'sub-math', slug: 'mathematics', name: 'Mathematics', code: 'MATH', iconName: 'Calculator' },
];

export const PRODUCT_FORMATS: ProductFormat[] = [
  { id: 'working_model', name: 'Working Model', description: 'Pre-assembled dynamic physical demonstration ready for immediate exhibition.' },
  { id: 'diy_kit', name: 'DIY Assembly Kit', description: 'Components with step-by-step assembly guide for interactive student building.' },
  { id: 'science_fair_display', name: 'Science Fair Display', description: 'Polished display showcase model with concept headers and viva prompts.' },
  { id: 'chart_and_viva', name: 'Charts & Viva Cards', description: 'Infographic visual presentation boards and oral examination Q&A flashcards.' },
];

