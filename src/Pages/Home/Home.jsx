import './Home.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Carousel from '../../Components/Carousel/Carousel';
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
                ? "Ma passion est l'interconnectivité de notre monde, dans toutes ses dimensions, y compris le Web 🌐🕸️"
                : 'My passion is the interconnectivity of our world, in all its dimensions, including the Web 🌐🕸️'}
            </p>
            <p>
              {language === 'fr'
                ? "L'écologie me tient à cœur, j'espère contribuer au numérique éco-responsible."
                : 'Ecology is close to my heart, I hope to contribute to eco-responsible digital.'}
            </p>
            <p>
              {language === 'fr'
                ? "Traductrice littéraire avant de me former au développement web, j'ai aussi une pratique artistique visuelle, et je m'inspire du monde vivant et de la nature."
                : "A literary translator before learning web development, I also have a visual art practice, and I'm inspired by the living world and nature."}
            </p>
            <p>
              {language === 'fr'
                ? 'On peut communiquer en français, anglais ou hongrois. Bientôt en espagnol.'
                : 'We can speak in French, English or Hungarian. Soon in Spanish.'}
            </p>
            <p>
              {language === 'fr'
              ? "Et aussi en..."
              : "And also in..."
              }
              <span className="tags">
                <img
                  src="https://i.picasion.com/gl/92/hgR0.gif"
                  width="74"
                  height="16"
                  border="0"
                  alt="HTML"
                />
                <img
                  src="https://i.picasion.com/gl/92/hgRj.gif"
                  width="45"
                  height="16"
                  border="0"
                  alt="CSS"
                />
                <img
                  src="https://i.picasion.com/gl/92/hgRm.gif"
                  width="130"
                  height="19"
                  border="0"
                  alt="JavaScript"
                />
                <img
                  src="https://i.picasion.com/gl/92/hgRq.gif"
                  width="70"
                  height="16"
                  border="0"
                  alt="React"
                />
              </span>
            </p>
          </div>
        </article>
        <article id="bio" className="main-card middle-card">
          <h1>Fanni Lestar</h1>
          <h3>développeuse front-end</h3>
          <h3>Marseille</h3>
          <div className="bio-icons">
            <button id="download-cv">
              <img
                src={cvIcon}
                alt="télécharger le résumé"
                width="40px"
                height="40px"
                className="bio-icon"
              />
            </button>
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
          <h2>Entrons en connexion</h2>
          <ContactForm className="contact-form" />
        </article>
      </section>
      <section id="projects">
        <article className="main-card bottom-card">
          <h2>Mes projets</h2>
          <Carousel />
        </article>
      </section>
    </section>
  );
};

export default Home;
