import { StatItem, GalleryItem, AcademicDepartment } from './types';

export const SCHOOL_INFO = {
  name: 'Ngecha Girls High School',
  motto: 'Dream, Persist and Succeed',
  mottoEnglish: 'Dream, Persist and Succeed',
  mottoUpper: 'DREAM PERSIST AND SUCCEED',
  principalImage: '/images/principal.jpg',
  principalImageFallback: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0031.jpg',
  location: 'Ngecha Town, Limuru, Kiambu County, Kenya',
  postalAddress: 'P.O. Box 253 - 00218 Ngecha, Kenya',
  phone: '0770245635',
  phoneDisplay: '+254 770 245 635',
  email: 'ngechagirlshighschool@gmail.com',
  type: 'Public Sub-County Secondary School',
  affiliation: 'Sponsored by PCEA Church',
  category: 'Girls Only (Day & Boarding Options)',
  knecCode: '',
  established: 'Limuru, Kiambu',
  mission: 'To provide holistic quality education grounded in Christian values to develop disciplined, confident and empowered young women.',
  vision: "To be a center of excellence in girls' education.",
  colors: {
    primary: '#0A5C36', // Forest Green
    secondary: '#D4AF37', // Gold
    accent: '#E8F5E9', // Light Green
    darkText: '#1A1A1A',
  },
  whatsappUrl: 'https://wa.me/254770245635?text=Hello%20Ngecha%20Girls%20High%20School%2C%20I%20would%20like%20to%20make%20an%20inquiry.',
};

export const HERO_SLIDES = [
  {
    image: '/images/hero-1.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0000.jpg',
    title: 'Empowering Young Women in Faith & Knowledge',
    tagline: 'PCEA Church Sponsored • Dream, Persist and Succeed',
    description: 'Nurturing confident, morally upright, and intellectually capable scholars through holistic secondary education under the sponsorship of the Presbyterian Church of East Africa (PCEA).',
  },
  {
    image: '/images/hero-2.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0006.jpg',
    title: 'Excellence in Science, Humanities & Practical Skills',
    tagline: 'PCEA Sponsored • Modern Laboratories & Curriculum',
    description: 'Providing dedicated learning facilities, CBE pathways, and an inspiring academic atmosphere that fosters curiosity and analytical rigor.',
  },
  {
    image: '/images/hero-3.jpg',
    fallbackImage: 'https://raw.githubusercontent.com/oliviabancroft0-prog/ngechagirlshighschool/main/IMG-20260818-WA0021.jpg',
    title: 'A Safe, Nurturing Community: Day & Boarding Scholars',
    tagline: 'PCEA Christian Values • Holistic Secondary Education',
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
    value: 'Accredited',
    label: 'KNEC Exam Center',
    detail: 'Official Ministry of Education registered examination center',
  },
  {
    value: '1:1',
    label: 'Pastoral & Academic Care',
    detail: 'Personalized mentoring through class teachers, Christian Union, and guidance counselors',
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
    name: 'Mathematics Department',
    head: 'Head of Mathematics Department',
    subjects: ['Pure Mathematics', 'Essential Mathematics'],
    description: 'Dedicated to demystifying mathematics for young women, building problem-solving speed, precision, and confidence.',
  },
  {
    name: 'Sciences Department',
    head: 'Head of Science Department',
    subjects: ['Biology', 'Chemistry', 'Physics'],
    description: 'Equipped with dedicated practical laboratories for national examination experiments, fostering future doctors, engineers, and scientists.',
  },
  {
    name: 'Languages Department',
    head: 'Head of Languages',
    subjects: ['English Language & Literature', 'Kiswahili na Fasihi'],
    description: 'Nurturing eloquent public speakers, critical essayists, debate champions, and creative literary minds.',
  },
  {
    name: 'Social Sciences',
    head: 'Head of Social Sciences',
    subjects: ['Christian Religious Education (C.R.E)', 'History & Government', 'Geography', 'Business Studies'],
    description: 'Instilling civic awareness, historical depth, environmental stewardship, business acumen, and Christian theological reflection.',
  },
  {
    name: 'Technical Studies',
    head: 'Head of Technical Subjects',
    subjects: ['Agriculture', 'Computer Studies', 'Home Science'],
    description: 'Equipping girls with practical entrepreneurial competencies, modern agribusiness understanding, home science, and digital productivity.',
  },
];
