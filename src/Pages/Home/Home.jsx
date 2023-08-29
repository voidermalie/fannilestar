import './Home.css';

import ContactForm from '../../Components/ContactForm/ContactForm';
import Carousel from '../../Components/Carousel/Carousel';
import Glitters from '../../Components/Glitters/Glitters';

import githubIcon from '../../assets/icons/github.svg';
import cvIcon from '../../assets/icons/cv.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';


const Home = () => {
  console.log('bonjour');

  const { language } = useContext(LanguageContext);

  return (
    <section className="page-content" id="home-main">
      <section className="container">
        <article id="intro" className="main-card side-card left-card">
          <h2>hello world</h2>
          <div>
            <p>
              {language === 'fr'
                ? "Ma passion est l'interconnectivité de notre monde, dans toutes ses dimensions, y compris le Web."
                : 'My passion is the interconnectivity of our world, in all its dimensions, including the Web.'}
            </p>
            <p>
              {language === 'fr'
                ? "Traductrice littéraire, académique, tech et audiovisuelle avant de me former au développement web, j'ai aussi une pratique artistique visuelle, et je m'inspire du monde vivant et de la nature."
                : 'Before web development, I pursued a career in literary, academic, audiovisual and tech related translation. I also have a visual art practice and draw inspiration from the living world and nature.'}
            </p>
            <p>
              {language === 'fr'
                ? "L'écologie et la Terre me tiennent à cœur, j'espère contribuer au numérique écoresponsable."
                : 'Ecology and Earth are close to my heart, I hope to contribute to an eco-responsible digital realm.'}
            </p>
          </div>
        </article>
        <article id="bio" className="main-card middle-card">
          <h1>Fanni Lestar</h1>
          <h3>
            {language === 'fr'
              ? 'développeuse front-end'
              : 'front-end developer'}
          </h3>
          <h3>Marseille</h3>
          <div className="bio-icons">
            <a title="télécharger mon cv" id="download-cv" href={"/fannilestar/cv_fannilestar.pdf"} download>
              <img
                src={cvIcon}
                alt="télécharger le résumé"
                width="40px"
                height="40px"
                className="bio-icon"
              />
            </a>
            <a
              href="https://github.com/voidermalie/"
              target="blank"
              className="glitter-icon"
            >
              <img
                src={githubIcon}
                alt="lien vers Github"
                width="40px"
                height="40px"
                className="bio-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/fannilestar/" target="blank">
              <img
                src={linkedinIcon}
                alt="lien vers LinkedIn"
                width="40px"
                height="40px"
                className="bio-icon"
              />
            </a>
          </div>
        </article>
        <article id="contact" className="main-card side-card right-card">
          <h2>
            {language === 'fr' ? 'Entrons en connexion' : 'Get connected'}
          </h2>
          <ContactForm className="contact-form" />
        </article>
      </section>

      <article className="main-card bottom-card" id="projects">
        <Carousel />
      </article>
      <section id="skills" className="main-card skill-card">
        <div className="bottom-card-title">
          <h2>{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
        </div>
        <div>
          <Glitters />
        </div>
      </section>
    </section>
  );
};

export default Home;