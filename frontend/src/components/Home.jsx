import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Home() {
  const { t } = useTranslation();

  const videoId = 'QytxTOLvHYI';
  const youtubeEmbed = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=2&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&cc_load_policy=0&cc=0&start=0&widget_referrer=1&enablejsapi=1&noCookie=true`;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const iframe = document.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
          const currentSrc = iframe.src;
          iframe.src = '';
          setTimeout(() => {
            iframe.src = currentSrc;
          }, 100);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <>
      <iframe
        src={youtubeEmbed}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
          zIndex: 1,
          objectFit: 'cover',
          backgroundColor: 'black',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
        title="background-video"
        frameBorder="0"
      />

      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        pointerEvents: 'auto'
      }}>
        <a
          href="https://www.meska.hu/shop/BottleServiZe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '15px 30px',
            borderRadius: '8px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            textDecoration: 'none',
            border: '2px solid white',
            backdropFilter: 'blur(10px)',
            display: 'inline-block'
          }}
        >
          {t('home.shopNow')}
        </a>
      </div>
    </>
  );
}

export default Home;
