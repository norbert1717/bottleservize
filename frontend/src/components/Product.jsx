import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { products } from '../data/products';
import './styles/Product.css';

function MediaCarousel({ media, title, description }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevMedia = () => {
        setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    const nextMedia = () => {
        setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    const currentMedia = media[currentIndex];
    const showArrows = media.length > 1;

    return (
        <div className="media-carousel-container">
            {title && <h2>{title}</h2>}
            <div className="carousel-container">
                {showArrows && (
                    <button className="nav-arrow left-arrow" onClick={prevMedia}>
                        &lt;
                    </button>
                )}

                {currentMedia.type === 'image' ? (
                    <img
                        src={currentMedia.src}
                        alt={`${title} kép ${currentIndex + 1}`}
                        className="carousel-image"
                        onClick={nextMedia}
                        style={{ cursor: 'pointer' }}
                        loading="lazy"
                    />
                ) : (
                    <video
                        src={currentMedia.src}
                        className="carousel-image"
                        autoPlay
                        muted
                        loop
                        playsInline
                        width="100%"
                        onClick={nextMedia}
                        style={{ cursor: 'pointer' }}
                    />
                )}

                {showArrows && (
                    <button className="nav-arrow right-arrow" onClick={nextMedia}>
                        &gt;
                    </button>
                )}
            </div>
            {description && <div className="media-description">{description}</div>}
        </div>
    );
}

function Product() {
    const { t } = useTranslation();

    return (
        <div className="product-wrapper">
            {products.map((product) => {
                const linkElement = (
                    <a
                        href={product.meskaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#62b0b8',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            textDecoration: 'underline',
                        }}
                    >
                        {t(product.i18nLinkKey)}
                    </a>
                );

                return (
                    <MediaCarousel
                        key={product.id}
                        media={product.media}
                        title={product.name}
                        description={linkElement}
                    />
                );
            })}
        </div>
    );
}

export default Product;






