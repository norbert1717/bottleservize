import { useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import promoVideo from '../assets/videos/promoVideo.mp4';
import { products } from '../data/products';
import './styles/Home.css';

function getRandomProducts(allProducts, count) {
    if (!allProducts || allProducts.length === 0) return [];
    const shuffled = [...allProducts].sort(() =>
        Math.random() < 0.5 ? -1 : 1
    );
    return shuffled.slice(0, count);
}

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

    const suggestedProducts = useMemo(
        () => getRandomProducts(products, 4),
        []
    );

    const leftProducts = suggestedProducts.slice(0, 2);
    const rightProducts = suggestedProducts.slice(2, 4);

    return (
        <div className="home-root" onClick={handleHomeClick}>
            <div className="home-side-products home-side-left">
                {leftProducts.map((product) => (
                    <div key={product.id} className="side-product-card">
                        <img
                            src={product.media[0].src}
                            alt={product.name}
                            loading="lazy"
                            className="side-product-image"
                        />
                        <div className="side-product-info">
                            <div className="side-product-name">{product.name}</div>
                            <a
                                href={product.meskaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="side-product-button"
                            >
                                {t('home.shopNow')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-content">
                <video
                    ref={videoRef}
                    src={promoVideo}
                    className="home-bg-video"
                    muted
                    loop
                    autoPlay
                    playsInline
                    controls={false}
                    preload="auto"
                />
            </div>

            <div className="home-side-products home-side-right">
                {rightProducts.map((product) => (
                    <div key={product.id} className="side-product-card">
                        <img
                            src={product.media[0].src}
                            alt={product.name}
                            loading="lazy"
                            className="side-product-image"
                        />
                        <div className="side-product-info">
                            <div className="side-product-name">{product.name}</div>
                            <a
                                href={product.meskaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="side-product-button"
                            >
                                {t('home.shopNow')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
