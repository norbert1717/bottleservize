import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

function Contact() {
    const { t } = useTranslation();
    const faqs = t('contact.faqs', { returnObjects: true });
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3kvvun5',
            'template_gvmxi3m',
            e.target,
            'tzTM10vHNrRvB96PL'
        )
            .then(() => {
                alert('Az üzenet sikeresen elküldve!');
                e.target.reset();
            })
            .catch((error) => {
                alert('Hiba történt küldés közben: ' + error.text);
            });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-info">
                <h2>{t('contact.contactTitle')}</h2>
                <p>
                    <strong>{t('contact.emailLabel')}:</strong>{' '}
                    <a href={`mailto:${t('contact.emailValue')}`}>{t('contact.emailValue')}</a>
                </p>
            </div>

            <div className="contact-formbox">
                <h2>{t('contact.questionTitle')}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('contact.namePlaceholder')}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('contact.emailPlaceholder')}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t('contact.messagePlaceholder')}
                        rows={6}
                        required
                    />
                    <button type="submit">{t('contact.sendButton')}</button>
                </form>
            </div>

            <div className="contact-faq">
                <h2>{t('contact.faqTitle')}</h2>
                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                {faq.question}
                            </button>
                            {openFaq === idx && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;


