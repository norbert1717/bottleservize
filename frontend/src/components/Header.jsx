import { useNavigate, Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import logo1 from '../assets/images/logo1.jpg';
import { FaInstagram } from 'react-icons/fa';
import './styles/Header.css';

function Header() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <header className="header">
            <Link to="/">
                <img src={logo1} alt="Logó" className="site-logo" />
            </Link>
            <a
                href="https://www.instagram.com/bottleservize?igsh=NWVmMXYyc3lzdndx"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
                aria-label="Instagram"
            >
                <FaInstagram size={28} color="#E1306C" />
            </a>
            <div className="nav-buttons">
                <button onClick={() => navigate('/about')}>{t('header.about')}</button>
                <button onClick={() => navigate('/product')}>{t('header.product')}</button>
                <button onClick={() => navigate('/contact')}>{t('header.contact')}</button>
            </div>
            <LanguageSwitcher />
        </header>
    );
}

export default Header;