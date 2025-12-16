import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.departments': 'Departments',
    'nav.news': 'News',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.teachers': 'Teachers',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Shaping',
    'hero.title2': "Tomorrow's",
    'hero.title3': 'Leaders',
    'hero.description': "Tuproqqal'a tuman Ixtisoslashtirilgan maktabi provides world-class education with modern facilities, experienced teachers, and a commitment to nurturing each student's potential.",
    'hero.apply': 'Apply Now',
    'hero.learn': 'Learn More',
    
    // Stats
    'stats.students': 'Students',
    'stats.teachers': 'Teachers',
    'stats.experience': 'Years of Experience',
    'stats.awards': 'Awards Won',
    
    // Features Section
    'features.subtitle': 'Why Choose Us',
    'features.title': 'Excellence in Every Aspect',
    'features.description': "Discover what makes Tuproqqal'a tuman Ixtisoslashtirilgan maktabi the perfect choice for your child's educational journey.",
    'features.facilities.title': 'Modern Facilities',
    'features.facilities.desc': 'State-of-the-art classrooms, labs, and sports facilities for holistic development.',
    'features.teachers.title': 'Expert Teachers',
    'features.teachers.desc': 'Dedicated educators with advanced degrees and years of teaching experience.',
    'features.curriculum.title': 'Global Curriculum',
    'features.curriculum.desc': 'Internationally recognized curriculum preparing students for global opportunities.',
    'features.innovation.title': 'Innovation Lab',
    'features.innovation.desc': 'Cutting-edge technology labs where students explore robotics, AI, and creative design.',
    'features.safety.title': 'Safe Environment',
    'features.safety.desc': 'A secure, nurturing campus with 24/7 security and caring staff members.',
    'features.growth.title': 'Holistic Growth',
    'features.growth.desc': 'Balanced focus on academics, arts, sports, and personal development.',
    
    // CTA Section
    'cta.title': 'Ready to Join Our Community?',
    'cta.description': "Take the first step towards an exceptional education. Apply now and become part of the Tuproqqal'a tuman Ixtisoslashtirilgan maktabi family.",
    
    // Teachers Page
    'teachers.subtitle': 'TEACHERS',
    'teachers.title': 'Meet Our Teachers',
    'teachers.description': "Our dedicated faculty members bring expertise, passion, and a commitment to nurturing every student's potential.",
    'teachers.management': 'Management',
    'teachers.faculty': 'Teachers',
    
    // Positions
    'position.director': 'Director',
    'position.deputySpiritual': 'Deputy Director (Spiritual-Educational)',
    'position.advisor': 'Director Advisor',
    'position.deputyAcademic': 'Deputy Director (Academic Affairs)',
    'position.secretary': 'Secretary',
    'position.psychologist': 'Psychologist',
    
    // Subjects
    'subject.mathematics': 'Mathematics',
    'subject.physics': 'Physics',
    'subject.history': 'History',
    'subject.english': 'English Literature',
    'subject.russian': 'Russian Literature',
    'subject.chemistry': 'Chemistry',
    'subject.computerScience': 'Computer Science',
    'subject.geography': 'Geography',
    'subject.physicalEducation': 'Physical Education',
    'subject.preMilitary': 'Pre-Military Training',
    'subject.art': 'Art',
    'subject.uzbek': 'Uzbek Literature',
    'subject.biology': 'Biology',
    
    // Footer
    'footer.description': 'Providing quality education and nurturing future leaders since 2020.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // About Page
    'about.subtitle': 'ABOUT US',
    'about.title': 'Our Story',
    'about.description': "Tuproqqal'a tuman Ixtisoslashtirilgan maktabi was established with a vision to provide world-class education to the youth of our region.",
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide comprehensive education that develops intellectual, physical, and moral qualities of students.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the leading educational institution in the region, producing future leaders and innovators.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Excellence, Integrity, Innovation, Respect, and Community.',
    
    // Contact Page
    'contact.subtitle': 'CONTACT',
    'contact.title': 'Get in Touch',
    'contact.description': 'We would love to hear from you. Reach out to us for any inquiries.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    
    // Departments Page
    'departments.subtitle': 'DEPARTMENTS',
    'departments.title': 'Our Academic Departments',
    'departments.description': 'Explore our specialized departments designed to provide comprehensive education.',
    
    // News Page
    'news.subtitle': 'NEWS',
    'news.title': 'Latest News',
    'news.description': 'Stay updated with the latest happenings at our school.',
    
    // Events Page
    'events.subtitle': 'EVENTS',
    'events.title': 'Upcoming Events',
    'events.description': 'Join us for exciting events and activities throughout the year.',
    
    // Gallery Page
    'gallery.subtitle': 'GALLERY',
    'gallery.title': 'Photo Gallery',
    'gallery.description': 'Explore moments captured at our school.',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.departments': "Bo'limlar",
    'nav.news': 'Yangiliklar',
    'nav.events': 'Tadbirlar',
    'nav.gallery': 'Galereya',
    'nav.teachers': "O'qituvchilar",
    'nav.contact': 'Aloqa',
    
    // Hero Section
    'hero.title1': 'Kelajak',
    'hero.title2': 'Yetakchilarini',
    'hero.title3': 'Shakllantirish',
    'hero.description': "Tuproqqal'a tuman Ixtisoslashtirilgan maktabi zamonaviy jihozlar, tajribali o'qituvchilar va har bir o'quvchining salohiyatini rivojlantirishga sodiqlik bilan jahon darajasidagi ta'lim beradi.",
    'hero.apply': "Ariza topshirish",
    'hero.learn': "Batafsil",
    
    // Stats
    'stats.students': "O'quvchilar",
    'stats.teachers': "O'qituvchilar",
    'stats.experience': "Yillik tajriba",
    'stats.awards': "Mukofotlar",
    
    // Features Section
    'features.subtitle': 'Nega bizni tanlash kerak',
    'features.title': "Har bir yo'nalishda mukammallik",
    'features.description': "Tuproqqal'a tuman Ixtisoslashtirilgan maktabini farzandingizning ta'lim sayohati uchun eng yaxshi tanlov qiluvchi xususiyatlarni kashf eting.",
    'features.facilities.title': 'Zamonaviy jihozlar',
    'features.facilities.desc': "Yaxlit rivojlanish uchun eng zamonaviy sinfxonalar, laboratoriyalar va sport inshootlari.",
    'features.teachers.title': "Tajribali o'qituvchilar",
    'features.teachers.desc': "Yuqori darajali ma'lumotga ega va ko'p yillik o'qitish tajribasiga ega fidoiy pedagoglar.",
    'features.curriculum.title': "Xalqaro o'quv dasturi",
    'features.curriculum.desc': "O'quvchilarni global imkoniyatlarga tayyorlaydigan xalqaro tan olingan o'quv dasturi.",
    'features.innovation.title': 'Innovatsiya laboratoriyasi',
    'features.innovation.desc': "O'quvchilar robototexnika, sun'iy intellekt va ijodiy dizayn bilan shug'ullanadigan eng zamonaviy texnologik laboratoriyalar.",
    'features.safety.title': 'Xavfsiz muhit',
    'features.safety.desc': "24/7 qo'riqlash va g'amxo'r xodimlar bilan xavfsiz, qayg'uruvchi kampus.",
    'features.growth.title': "Har tomonlama o'sish",
    'features.growth.desc': "Akademik, san'at, sport va shaxsiy rivojlanishga muvozanatli e'tibor.",
    
    // CTA Section
    'cta.title': "Bizning jamoamizga qo'shilishga tayyormisiz?",
    'cta.description': "Ajoyib ta'lim sari birinchi qadamni qo'ying. Hozir ariza bering va Tuproqqal'a tuman Ixtisoslashtirilgan maktabi oilasining bir qismiga aylaning.",
    
    // Teachers Page
    'teachers.subtitle': "O'QITUVCHILAR",
    'teachers.title': "Bizning o'qituvchilarimiz",
    'teachers.description': "Bizning fidoyi professor-o'qituvchilarimiz tajriba, ehtirom va har bir talabaning salohiyatini rivojlantirishga sodiqlik bilan ishlaydilar.",
    'teachers.management': 'Rahbariyat',
    'teachers.faculty': "O'qituvchilar",
    
    // Positions
    'position.director': 'Direktor',
    'position.deputySpiritual': "Direktor o'rinbosari (ma'naviy-ma'rifiy)",
    'position.advisor': 'Direktor maslahatchisi',
    'position.deputyAcademic': "Direktor o'rinbosari (o'quv ishlari)",
    'position.secretary': 'Kotiba',
    'position.psychologist': 'Psixolog',
    
    // Subjects
    'subject.mathematics': 'Matematika',
    'subject.physics': 'Fizika',
    'subject.history': 'Tarix',
    'subject.english': 'Ingliz tili',
    'subject.russian': 'Rus tili',
    'subject.chemistry': 'Kimyo',
    'subject.computerScience': 'Informatika',
    'subject.geography': 'Geografiya',
    'subject.physicalEducation': 'Jismoniy tarbiya',
    'subject.preMilitary': "Chaqiruv oldidan boshlang'ich harbiy tayyorgarlik",
    'subject.art': "Rasm",
    'subject.uzbek': "O'zbek tili va adabiyoti",
    'subject.biology': 'Biologiya',
    
    // Footer
    'footer.description': "2020 yildan beri sifatli ta'lim berish va kelajak yetakchilarini tarbiyalash.",
    'footer.quickLinks': "Tezkor havolalar",
    'footer.contact': 'Aloqa',
    'footer.followUs': 'Bizni kuzating',
    'footer.rights': "Barcha huquqlar himoyalangan.",
    
    // About Page
    'about.subtitle': 'BIZ HAQIMIZDA',
    'about.title': 'Bizning tariximiz',
    'about.description': "Tuproqqal'a tuman Ixtisoslashtirilgan maktabi mintaqamiz yoshlariga jahon darajasidagi ta'lim berish maqsadida tashkil etilgan.",
    'about.mission.title': 'Bizning vazifamiz',
    'about.mission.desc': "O'quvchilarning intellektual, jismoniy va axloqiy fazilatlarini rivojlantiruvchi har tomonlama ta'lim berish.",
    'about.vision.title': 'Bizning ko\'rinishimiz',
    'about.vision.desc': "Mintaqadagi yetakchi ta'lim muassasasi bo'lib, kelajak yetakchilari va innovatorlarini yetishtirish.",
    'about.values.title': 'Bizning qadriyatlarimiz',
    'about.values.desc': "Mukammallik, Halollik, Innovatsiya, Hurmat va Jamiyat.",
    
    // Contact Page
    'contact.subtitle': 'ALOQA',
    'contact.title': "Biz bilan bog'laning",
    'contact.description': "Sizdan xabar olishdan mamnun bo'lamiz. Har qanday savol uchun biz bilan bog'laning.",
    'contact.form.name': 'Ismingiz',
    'contact.form.email': 'Elektron pochta',
    'contact.form.subject': 'Mavzu',
    'contact.form.message': 'Xabar',
    'contact.form.submit': "Xabar yuborish",
    'contact.info.address': 'Manzil',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'Elektron pochta',
    
    // Departments Page
    'departments.subtitle': "BO'LIMLAR",
    'departments.title': "Bizning akademik bo'limlarimiz",
    'departments.description': "Har tomonlama ta'lim berish uchun mo'ljallangan ixtisoslashtirilgan bo'limlarimizni o'rganing.",
    
    // News Page
    'news.subtitle': 'YANGILIKLAR',
    'news.title': "So'nggi yangiliklar",
    'news.description': "Maktabimizdagi so'nggi voqealardan xabardor bo'ling.",
    
    // Events Page
    'events.subtitle': 'TADBIRLAR',
    'events.title': "Kelgusi tadbirlar",
    'events.description': "Yil davomida qiziqarli tadbirlar va faoliyatlarga qo'shiling.",
    
    // Gallery Page
    'gallery.subtitle': 'GALEREYA',
    'gallery.title': 'Fotogalereya',
    'gallery.description': "Maktabimizda suratga olingan lahzalarni ko'ring.",
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.departments': 'Отделы',
    'nav.news': 'Новости',
    'nav.events': 'События',
    'nav.gallery': 'Галерея',
    'nav.teachers': 'Учителя',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title1': 'Формируем',
    'hero.title2': 'Лидеров',
    'hero.title3': 'Будущего',
    'hero.description': 'Специализированная школа Тупроққальинского района предоставляет образование мирового класса с современным оборудованием, опытными учителями и стремлением развивать потенциал каждого ученика.',
    'hero.apply': 'Подать заявку',
    'hero.learn': 'Узнать больше',
    
    // Stats
    'stats.students': 'Ученики',
    'stats.teachers': 'Учителя',
    'stats.experience': 'Лет опыта',
    'stats.awards': 'Наград',
    
    // Features Section
    'features.subtitle': 'Почему выбирают нас',
    'features.title': 'Совершенство во всём',
    'features.description': 'Узнайте, что делает Специализированную школу Тупроққальинского района идеальным выбором для образовательного пути вашего ребёнка.',
    'features.facilities.title': 'Современное оборудование',
    'features.facilities.desc': 'Современные классы, лаборатории и спортивные сооружения для всестороннего развития.',
    'features.teachers.title': 'Опытные учителя',
    'features.teachers.desc': 'Преданные педагоги с высшим образованием и многолетним опытом преподавания.',
    'features.curriculum.title': 'Международная программа',
    'features.curriculum.desc': 'Международно признанная учебная программа, готовящая учеников к глобальным возможностям.',
    'features.innovation.title': 'Инновационная лаборатория',
    'features.innovation.desc': 'Передовые технологические лаборатории, где ученики изучают робототехнику, ИИ и креативный дизайн.',
    'features.safety.title': 'Безопасная среда',
    'features.safety.desc': 'Безопасный, заботливый кампус с круглосуточной охраной и внимательным персоналом.',
    'features.growth.title': 'Всестороннее развитие',
    'features.growth.desc': 'Сбалансированное внимание к учёбе, искусству, спорту и личностному развитию.',
    
    // CTA Section
    'cta.title': 'Готовы присоединиться к нашему сообществу?',
    'cta.description': 'Сделайте первый шаг к исключительному образованию. Подайте заявку сейчас и станьте частью семьи Специализированной школы Тупроққальинского района.',
    
    // Teachers Page
    'teachers.subtitle': 'УЧИТЕЛЯ',
    'teachers.title': 'Наши учителя',
    'teachers.description': 'Наши преданные преподаватели привносят опыт, страсть и стремление развивать потенциал каждого ученика.',
    'teachers.management': 'Руководство',
    'teachers.faculty': 'Преподаватели',
    
    // Positions
    'position.director': 'Директор',
    'position.deputySpiritual': 'Заместитель директора (духовно-просветительский)',
    'position.advisor': 'Советник директора',
    'position.deputyAcademic': 'Заместитель директора (по учебной работе)',
    'position.secretary': 'Секретарь',
    'position.psychologist': 'Психолог',
    
    // Subjects
    'subject.mathematics': 'Математика',
    'subject.physics': 'Физика',
    'subject.history': 'История',
    'subject.english': 'Английский язык',
    'subject.russian': 'Русский язык',
    'subject.chemistry': 'Химия',
    'subject.computerScience': 'Информатика',
    'subject.geography': 'География',
    'subject.physicalEducation': 'Физическая культура',
    'subject.preMilitary': 'Начальная военная подготовка',
    'subject.art': 'Искусство',
    'subject.uzbek': 'Узбекский язык и литература',
    'subject.biology': 'Биология',
    
    // Footer
    'footer.description': 'Обеспечиваем качественное образование и воспитываем будущих лидеров с 2020 года.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.followUs': 'Подписывайтесь',
    'footer.rights': 'Все права защищены.',
    
    // About Page
    'about.subtitle': 'О НАС',
    'about.title': 'Наша история',
    'about.description': 'Специализированная школа Тупроққальинского района была основана с целью предоставления образования мирового класса молодёжи нашего региона.',
    'about.mission.title': 'Наша миссия',
    'about.mission.desc': 'Предоставлять комплексное образование, развивающее интеллектуальные, физические и нравственные качества учеников.',
    'about.vision.title': 'Наше видение',
    'about.vision.desc': 'Быть ведущим образовательным учреждением в регионе, воспитывающим будущих лидеров и новаторов.',
    'about.values.title': 'Наши ценности',
    'about.values.desc': 'Совершенство, Честность, Инновации, Уважение и Сообщество.',
    
    // Contact Page
    'contact.subtitle': 'КОНТАКТЫ',
    'contact.title': 'Свяжитесь с нами',
    'contact.description': 'Мы будем рады услышать вас. Обращайтесь к нам по любым вопросам.',
    'contact.form.name': 'Ваше имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.info.address': 'Адрес',
    'contact.info.phone': 'Телефон',
    'contact.info.email': 'Эл. почта',
    
    // Departments Page
    'departments.subtitle': 'ОТДЕЛЫ',
    'departments.title': 'Наши академические отделы',
    'departments.description': 'Изучите наши специализированные отделы, созданные для предоставления комплексного образования.',
    
    // News Page
    'news.subtitle': 'НОВОСТИ',
    'news.title': 'Последние новости',
    'news.description': 'Будьте в курсе последних событий в нашей школе.',
    
    // Events Page
    'events.subtitle': 'СОБЫТИЯ',
    'events.title': 'Предстоящие события',
    'events.description': 'Присоединяйтесь к нам на увлекательных мероприятиях и активностях в течение года.',
    
    // Gallery Page
    'gallery.subtitle': 'ГАЛЕРЕЯ',
    'gallery.title': 'Фотогалерея',
    'gallery.description': 'Исследуйте моменты, запечатлённые в нашей школе.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
