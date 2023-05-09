import './Home.css';

const Home = () => {
  console.log('bonjour')
  return (
    <section className="page-content" id="home-main">
      <section id="intro">
        <h1>hello world</h1>
        <p>
          Fanni Lestar. 29 ans. Développeuse front-end <br/>
          Ma passion est l&apos;interconnectivité de notre monde, dans toutes ses dimensions, y
          compris le Web 🌐🕸️ <br/> L&apos;écologie me tient
          particulièrement à cœur, je m&apos;efforce à concevoir des sites dans une approche éco-responsible.<br/>
          Traductrice professionnelle avant ma reconversion au développement web (diplôme RNCP OpenClassrooms, auto-apprentissage Codecademy),
          je traduis toujours le langage humain =&gt; vers le langage informatique.
        </p>
        <p>HTML CSS JavaScript React</p>
        <p>Je suis à Marseille et cherche des projets et équipes à joindre ici dans le Sud ou à distance dans le monde.</p>
      </section>
      <section id="bio">
      <p>Pour en savoir plus sur moi, voici mon CV</p>
      <button>Télécharger le CV</button>
      </section>
      <section className="projects">

      </section>
    </section>
  );
};

export default Home;
