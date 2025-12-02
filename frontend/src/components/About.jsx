import { useTranslation } from 'react-i18next';
import './styles/About.css';
import about from '../assets/images/about.jpg';

function About() {
    const { t } = useTranslation();

    return (
        <section
            className="about-hero"
            style={{ backgroundImage: `url(${about})` }}
        >
            <div className="about-overlay">
                <div className="about-content">
                    <h1 className="about-title">{t('about.title')}</h1>
                    <p className="about-text">{t('about.description')}</p>
                </div>
            </div>
        </section>
    );
}

export default About;

