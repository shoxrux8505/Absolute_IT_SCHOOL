import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        Home: 'Home',
        About: 'About',
        Courses: 'Courses',
        Contacts: 'Contacts',
        Start: 'Start',
        Send: 'Send',

        // другие переводы
    },
    ru: {
        Home: 'Главная',
        About: 'О нас',
        Courses: 'Курсы',
        Contacts: 'Контакты',
        Start: 'Начать учиться',
        Send: 'Оставить заявку',
        // другие переводы
    },
    uz: {
        Home: 'Bosh sahifa',
        About: 'Biz haqimizda',
        Courses: 'Kurslar',
        Contacts: 'Aloqa',
        Start: 'Oʻrganishni boshlash',
        Send: "So'rov qoldirish",
    },
};

const mainContent = {
    en: {
        School: 'International IT School',
        start: 'Start',
        your: 'your',
        journey: 'journey',
        into: 'into',
        the: 'the',
        world: 'world',
        of: 'of',
        Innovations: 'Innovations',
        Technology: 'Technology',
        and: 'and',
        // custom_modifier: '@.mainText:{mainContent.mainText}',
    },
    ru: {
        School: 'Международная IT школа',
        start: 'Начать',
        your: 'ваше',
        journey: 'путешествие',
        into: 'в',
        the: 'мир',
        world: 'инноваций',
        of: 'и',
        Innovations: 'Инновации',
        Technology: 'Технологии',
        and: 'и',
        // custom_modifier: '@.mainText:{mainContent.mainText}',
    },
    uz: {
        School: 'Xalqaro IT maktabi',
        start: 'Boshlang',
        your: 'Sizning',
        journey: 'sayohatingiz',
        into: 'uchun',
        the: 'dunyoga',
        world: 'innovatsiyalar',
        of: 'va',
        Innovations: 'Innovatsiyalar',
        Technology: 'Texnologiyalar',
        and: 'va',
    }
}

const i18n = createI18n({
    locale: 'ru', // язык по умолчанию
    messages,
    mainContent,
});

export default i18n;