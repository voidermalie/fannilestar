import './ContactForm.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailIcon from '../../assets/icons/email.svg';
//import phoneIcon from '../../assets/icons/phone.svg';
//import smsIcon from '../../assets/icons/sms.svg';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <p>
        {language === 'fr'
          ? "Vous avez des projets en tête ? Je serais ravie de collaborer et créer des expériences web mémorables ensemble."
          : "Do you have any projects in mind? I'd love to collaborate and create memorable web experiences together."}
      </p>
      <p className='wavy-text'>
        {language === 'fr'
          ? "Faisons des vagues dans l'océan numérique !"
          : "Let's make waves in the digital ocean!"}
      </p>
      <a href="mailto:fannylestar@icloud.com" className="icon-contact" tabIndex="0">
        <img src={emailIcon} alt="envoyer un mail" width="30px" height="30px" />
        <p>fannylestar@icloud.com</p>
      </a>
    </>
  );
};

export default ContactForm;
