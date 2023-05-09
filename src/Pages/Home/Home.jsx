import './Home.css';

const Home = () => {
  console.log('bonjour')
  return (
    <section className="page-content" id="home-main">
      <section id="intro">
        <h1>hello world</h1>
        <p>
          Ma passion est l&apos;interconnectivité de notre monde, dans toutes ses dimensions, y
          compris le Web 🌐🕸️ <br/> L&apos;écologie me tient
          particulièrement à cœur, je m&apos;efforce à concevoir des sites dans une approche éco-responsible<br/> et espère à travailler sur des projets qui protègent la vie.<br/>
          Traductrice professionnelle avant ma reconversion au développement web (diplôme RNCP OpenClassrooms, auto-apprentissage Codecademy),<br/>
          c&apos;est toujours le langage humain que je traduis.
          Trilingue, on peut communiquer en français, anglais ou en hongrois :) <br/>
          Et aussi en <span>HTML CSS JavaScript React</span>
        </p>
        <p>Je suis à Marseille et cherche des projets et équipes à joindre ici dans le Sud ou à distance dans le monde.</p>
      </section>
      <section id="bio">
      <p>Pour en savoir plus sur mon parcours, voici mon CV</p>
      <button>Télécharger le CV</button>
      </section>
      <section className="projects">
      <p>Mes projets</p>
      </section>
    </section>
  );
};

export default Home;
