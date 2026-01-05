import { useNavigate, Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import logo2 from '../assets/images/logo2.jpg';
import { FaInstagram } from 'react-icons/fa';
import './styles/Header.css';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/">
                <img src={logo2} alt="Logó" className="site-logo" />
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
            <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <button onClick={() => { navigate('/about'); setMenuOpen(false); }}>{t('header.about')}</button>
                <button onClick={() => { navigate('/product'); setMenuOpen(false); }}>{t('header.product')}</button>
                <button onClick={() => { navigate('/contact'); setMenuOpen(false); }}>{t('header.contact')}</button>
            </nav>
            <LanguageSwitcher />
        </header>
    );
}

export default Header;
