import './Home.css';
import ContactForm from '../../Components/ContactForm/ContactForm';

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
            sites dans une approche éco-responsible et espère à travailler sur
            des projets qui protègent la vie ou contribuent à un monde meilleur.
            <br />
            Traductrice professionnelle avant ma reconversion au développement
            web (diplôme RNCP OpenClassrooms, auto-didacte Codecademy),
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
          <p>Pour en savoir plus sur mon parcours :</p>
          <button>Télécharger le CV</button>
        </article>
        <article id="contact" className="main-card side-card right-card">
          <h2>Entrons en connexion</h2>
          <p>
            Si vous avez des projets en tête, je serais ravie de collaborer et
            créer des expériences mémorables ensemble. Faisons des
            vagues dans &apos;océan numérique ! Je suis joignable par mail, sur
            les réseaux ou par téléphone.
          </p>
          <div>mail</div>
          <div>linkedIn</div>
          <div>gitHub</div>
          <div>tel</div>
        </article>
      </section>
      <section id="projects" className="main-card">
        <h3>Mes projets</h3>
      </section>
    </section>
  );
};

export default Home;
