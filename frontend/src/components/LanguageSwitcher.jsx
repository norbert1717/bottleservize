import { useTranslation } from 'react-i18next';
import './styles/Header.css';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'hu' ? 'en' : 'hu';
        i18n.changeLanguage(newLang);
    };

    return (
        <button className="language-button" onClick={toggleLanguage}>
            {i18n.language === 'hu' ? 'HU' : 'ENG'}
        </button>
    );
}

export default LanguageSwitcher;