import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/Breadcrumb.css';

function Breadcrumb() {
    const { t } = useTranslation();
    const location = useLocation();

    const getBreadcrumbName = () => {
        switch (location.pathname) {
            case '/about':
                return t('breadcrumb.about');
            case '/product':
                return t('breadcrumb.product');
            case '/contact':
                return t('breadcrumb.contact');
            default:
                return t('breadcrumb.home');
        }
    };

    return (
        <div className="breadcrumb">
            <Link to="/">{t('breadcrumb.home')}</Link> / {getBreadcrumbName()}
        </div>
    );
}

export default Breadcrumb;