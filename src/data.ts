import { NewsArticle, StatItem, GalleryItem, AcademicDepartment } from './types';

export const SCHOOL_INFO = {
  name: 'Ngecha Girls High School',
  motto: 'Dream, Persist and Succeed',
  mottoEnglish: 'Dream, Persist and Succeed',
  mottoUpper: 'DREAM PERSIST AND SUCCEED',
  principal: 'Hellen Kahoro',
  principalImage: '/images/principal-hellen-kahoro.jpg',
  principalImageFallback: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0031.jpg',
  location: 'Ngecha Town, Limuru, Kiambu County, Kenya',
  postalAddress: 'P.O. Box 253 - 00218 Ngecha, Kenya',
  phone: '0722947935',
  phoneDisplay: '+254 722 947 935',
  email: 'ngechagirlshighschool@gmail.com',
  type: 'Public Sub-County Secondary School',
  affiliation: 'Christian-Based Institution',
  category: 'Girls Only (Boarding & Day Options)',
  knecCode: '11211339',
  uicCode: 'TCPD',
  established: 'Limuru, Kiambu',
  mission: 'To provide holistic quality education grounded in Christian values to develop disciplined, confident and empowered young women.',
  vision: "To be a center of excellence in girls' education.",
  colors: {
    primary: '#0A5C36', // Forest Green
    secondary: '#D4AF37', // Gold
    accent: '#E8F5E9', // Light Green
    darkText: '#1A1A1A',
  },
  whatsappUrl: 'https://wa.me/254722947935?text=Hello%20Ngecha%20Girls%20High%20School%2C%20I%20would%20like%20to%20make%20an%20inquiry%20regarding%20Admissions%20and%20School%20Information.',
  admissionsFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPlaceholderAdmissionsNgechaGirls2027/viewform',
};

export const HERO_SLIDES = [
  {
    image: '/images/hero-1.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0000.jpg',
    title: 'Empowering Young Women in Faith & Knowledge',
    tagline: 'Dream, Persist and Succeed • Limuru, Kiambu',
    description: 'Nurturing confident, morally upright, and intellectually capable scholars through holistic secondary education and Christian discipleship.',
  },
  {
    image: '/images/hero-2.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0006.jpg',
    title: 'Excellence in Science, Humanities & Practical Skills',
    tagline: 'Modern Laboratories & Comprehensive Curriculum',
    description: 'Providing dedicated learning facilities, CBC pathways, and an inspiring academic atmosphere that fosters curiosity and analytical rigor.',
  },
  {
    image: '/images/hero-3.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0021.jpg',
    title: 'A Safe, Nurturing Community: Boarding & Day Scholars',
    tagline: 'Disciplined Christian Values • Dream, Persist and Succeed',
    description: 'Equipped with serene boarding dormitories, supportive pastoral care, balanced dining, and vibrant Christian Union spiritual fellowships.',
  },
];

export const STATS: StatItem[] = [
  {
    value: '100%',
    label: 'Transition Focus',
    detail: 'Committed pathway to national universities, TVETs, and professional colleges',
  },
  {
    value: 'KNEC 11211339',
    label: 'Accredited Center',
    detail: 'Official Ministry of Education examination center code (UIC: TCPD)',
  },
  {
    value: '1:1',
    label: 'Pastoral & Academic Care',
    detail: 'Personalized mentoring through class teachers, Christian Union, and guidance counselors',
  },
];

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 'admissions-2027',
    title: 'Enrollment Open: 2027 Grade 10 & Transfer Admissions',
    category: 'Admissions',
    date: 'February 2027',
    author: 'Admissions Directorate',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900&auto=format&fit=crop',
    excerpt: 'Applications are formally open for 2027 Grade 10 intake and limited vacancies in Form 2 and Form 3. Both Boarding and Day scholar slots available.',
    content: [
      'Ngecha Girls High School cordially invites parents and guardians to apply for our 2027 Academic Year admissions. As a recognized Public Sub-County Secondary School located in serene Ngecha Town, Limuru, Kiambu County, we offer both Boarding and Day options for girls.',
      'Our admission criteria emphasize good academic discipline, a positive attitude toward holistic development, and adherence to Christian values. Selected candidates will receive official joining instructions detailing uniform requirements, book lists, and the approved fees structure.',
      'To register an early inquiry, kindly contact the Principal on 0722947935 or complete the online application inquiry form on our portal.'
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: '/images/gallery/gallery-1.jpg',
    fallbackUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/29c41b86-073d-4254-8d1d-2b04ddcec79f.jfif',
    alt: 'Ngecha Girls High School student community',
  },
  {
    id: 'gal-2',
    imageUrl: '/images/gallery/gallery-2.jpg',
    fallbackUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/35672135-8302-488b-971b-bdeb9a378ce0.jfif',
    alt: 'Ngecha Girls High School students on campus',
  },
  {
    id: 'gal-3',
    imageUrl: '/images/gallery/gallery-3.jpg',
    fallbackUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/3ed33eba-a07f-421e-8b68-fb9359406cb3.jfif',
    alt: 'Ngecha Girls High School students in uniform',
  },
  {
    id: 'gal-4',
    imageUrl: '/images/gallery/gallery-4.jpg',
    fallbackUrl: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/5af3011a-c7d1-4b73-89f9-7b1dfc455c16.jfif',
    alt: 'Ngecha Girls High School campus life',
  },
];

export const ACADEMIC_DEPARTMENTS: AcademicDepartment[] = [
  {
    name: 'Mathematics & STEM',
    head: 'Head of Mathematics Department',
    subjects: ['Pure Mathematics', 'Alternative A Mathematics'],
    description: 'Dedicated to demystifying mathematics for young women, building problem-solving speed, precision, and confidence.',
  },
  {
    name: 'Sciences Department',
    head: 'Head of Science Department',
    subjects: ['Biology', 'Chemistry', 'Physics'],
    description: 'Equipped with dedicated practical laboratories for national examination experiments, fostering future doctors, engineers, and scientists.',
  },
  {
    name: 'Languages & Communication',
    head: 'Head of Languages',
    subjects: ['English Language & Literature', 'Kiswahili na Fasihi'],
    description: 'Nurturing eloquent public speakers, critical essayists, debate champions, and creative literary minds.',
  },
  {
    name: 'Humanities & Social Sciences',
    head: 'Head of Humanities',
    subjects: ['Christian Religious Education (C.R.E)', 'History & Government', 'Geography'],
    description: 'Instilling civic awareness, historical depth, environmental stewardship, and deep Christian theological reflection.',
  },
  {
    name: 'Applied & Technical Studies',
    head: 'Head of Technical Subjects',
    subjects: ['Business Studies', 'Agriculture', 'Computer Studies'],
    description: 'Equipping girls with practical entrepreneurial competencies, modern agribusiness understanding, and digital productivity.',
  },
];
