import './Home.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Carousel from '../../Components/Carousel/Carousel';
import Bubble from '../../Components/Bubble/Bubble';
import githubIcon from '../../assets/icons/github.svg';
import cvIcon from '../../assets/icons/cv.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const Home = () => {
  console.log('bonjour');
  return (
    <section className="page-content" id="home-main">
      <section className="container">
        <article id="intro" className="main-card side-card left-card">
          <h2>hello world</h2>
          <div>
            <p>
              Ma passion est l&apos;interconnectivité de notre monde, dans
              toutes ses dimensions, y compris le Web 🌐🕸️
            </p>
            <p>
              L&apos;écologie me tient particulièrement à cœur, je
              m&apos;efforce à concevoir des sites dans une approche
              éco-responsible.
            </p>
            <p>
              Traductrice littéraire avant de me former en développement
              web (diplôme RNCP OpenClassrooms, autodidacte Codecademy). Je suis
              trilingue, on peut communiquer en français, anglais ou en hongrois
              :)
              <p>
                {' '}
                Et aussi en{' '}
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
                width="30px"
                height="30px"
                className="bio-icon"
              />
            </button>
            <a href="https://github.com/voidermalie/" target="blank" className="glitter-icon">
              <img
                src={githubIcon}
                alt="lien vers Github"
                width="30px"
                height="30px"
                className="bio-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/fannilestar/" target="blank">
              <img
                src={linkedinIcon}
                alt="lien vers LinkedIn"
                width="30px"
                height="30px"
                className="bio-icon"
              />
            </a>
            <a href="https://www.instagram.com/jaitout/" target="blank">
              <img
                src={instagramIcon}
                alt="lien vers Instagram"
                width="30px"
                height="30px"
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
      <section id="projects" className="container">
        <article className="main-card side-card bottom-card">
          <h2>Mes projets</h2>
          <Carousel />
        </article>
      </section>
      <div className="container">
        <Bubble />
      </div>
    </section>
  );
};

export default Home;
