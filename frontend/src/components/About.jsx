import { useTranslation } from 'react-i18next';
import './styles/About.css';

function About() {
    const { t } = useTranslation();

    return (
        <div
            className='about'
            style={{
                backgroundImage: `url('/images/about.jpg')`
            }}
        >
            <div className="about-overlay">
                <div className="about-content">
                    <h1 className="about-title">{t('about.title')}</h1>
                    <p className="about-text">{t('about.description')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;

