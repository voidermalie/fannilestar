import './ContactForm.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailIcon from '../../assets/icons/email.svg';
//import phoneIcon from '../../assets/icons/phone.svg';
//import smsIcon from '../../assets/icons/sms.svg';

const ContactForm = () => {
  return (
    <>
      <p>
        Vous avez des projets en tête ? Je serais ravie de collaborer et créer
        ensemble des expériences web mémorables.</p><p>Faisons des vagues dans
        l&apos;océan numérique !
      </p>
      <a href="mailto:fannylestar@icloud.com" className="icon-contact">
        <img src={emailIcon} alt="envoyer un mail" width="30px" height="30px" />
        <p>fannylestar@icloud.com</p>
      </a>
    </>
  );
};

export default ContactForm;