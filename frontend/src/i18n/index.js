import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationHU from './hu.json';
import translationEN from './en.json';

const resources = {
    hu: { translation: translationHU },
    en: { translation: translationEN },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'hu', // alapértelmezett nyelv
        fallbackLng: 'en',
        interpolation: { escapeValue: false }, // React miatt
    });

export default i18n;