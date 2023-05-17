import './Home.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import githubIcon from '../../assets/icons/github.svg';
import cvIcon from '../../assets/icons/cv.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const Home = () => {
  console.log('bonjour');
  return (
    <section className="page-content" id="home-main">
      <section className="container">
        <article id="intro" className="main-card side-card left-card">
          <h2>hello world</h2>
          <p>
            Ma passion est l&apos;interconnectivité de notre monde, dans toutes
            ses dimensions, y compris le Web 🌐🕸️ <br /> L&apos;écologie me
            tient particulièrement à cœur, je m&apos;efforce à concevoir des
            sites dans une approche éco-responsible.
            <br />
            Traductrice professionnelle avant ma reconversion au développement
            web (diplôme RNCP OpenClassrooms, autodidacte Codecademy),
            c&apos;est toujours le langage humain que je traduis. Je suis
            trilingue, on peut communiquer en français, anglais ou en hongrois
            :) <br />
            Et aussi en <span>HTML CSS JavaScript React</span>
          </p>
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
              />
            </button>
            <a href="https://github.com/voidermalie/" target="blank">
              <img
                src={githubIcon}
                alt="lien vers Github"
                width="30px"
                height="30px"
              />
            </a>
            <a href="https://www.linkedin.com/in/fannilestar/" target="blank">
              <img
                src={linkedinIcon}
                alt="lien vers LinkedIn"
                width="30px"
                height="30px"
              />
            </a>
          </div>
        </article>
        <article id="contact" className="main-card side-card right-card">
          <h2>Entrons en connexion</h2>
          <ContactForm className="contact-form" />
        </article>
      </section>
      <section id="projects" className="main-card">
        <h3>Mes projets</h3>
      </section>
    </section>
  );
};

export default Home;
