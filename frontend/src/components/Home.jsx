import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import promoVideo2 from '../assets/videos/promoVideo2.mp4';
import './styles/Home.css';

function Home() {
    const { t } = useTranslation();
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);

    const handleHomeClick = () => {
        if (!started && videoRef.current) {
            videoRef.current.play();
            setStarted(true);
        }
    };


    return (
        <div className="home-root" onClick={handleHomeClick}>

            <div className="home-content">
                <video
                    ref={videoRef}
                    src={promoVideo2}
                    className="home-bg-video"
                    muted
                    loop
                    autoPlay
                    playsInline
                    controls={false}
                    preload="auto"
                />
                <a
                    href="https://www.meska.hu/shop/BottleServiZe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-shop-button"
                >
                    {t('home.shopNow')}
                </a>
            </div>
        </div>
    );
}

export default Home;


