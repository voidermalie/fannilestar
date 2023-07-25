import './Glitters.css';

import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

import HTML5Glitter from '../../assets/glitters/html.gif';
import CssGlitter from '../../assets/glitters/css.gif';
import JavascriptGlitter from '../../assets/glitters/javascript.gif';
import ReactGlitter from '../../assets/glitters/react.gif';
import GitGlitter from '../../assets/glitters/git.gif';
import NodejsGlitter from '../../assets/glitters/nodejs.gif';
import MongoDBGlitter from '../../assets/glitters/mongodb.gif';
import NextjsGlitter from '../../assets/glitters/nextjs.gif';
import FigmaGlitter from '../../assets/glitters/figma.gif';
import SEOGlitter from '../../assets/glitters/SEO.gif';
import AccessibilityGlitter from '../../assets/glitters/accessibility.gif';
import AccessibiliteGlitter from '../../assets/glitters/accessibilite.gif';

import AnglaisGlitter from '../../assets/glitters/anglais.gif';
import EnglishGlitter from '../../assets/glitters/English.gif';
import FrançaisGlitter from '../../assets/glitters/français.gif';
import FrenchGlitter from '../../assets/glitters/French.gif';
import HongroisGlitter from '../../assets/glitters/hongrois.gif';
import HungarianGlitter from '../../assets/glitters/Hungarian.gif';
import EspagnolGlitter from '../../assets/glitters/espagnol.gif';
import SpanishGlitter from '../../assets/glitters/Spanish.gif';



const Glitters = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="glitters-container">
      <div className="glitters-group1">
        <img className="glitter" alt="HTML5" src={HTML5Glitter} />
        <img className="glitter" alt="CSS3" src={CssGlitter} />
        <img className="glitter" alt="JavaScript" src={JavascriptGlitter} />
        <img className="glitter" alt="React" src={ReactGlitter} />
      </div>
      <div className="glitters-group2">
        <img className="glitter" alt="Git" src={GitGlitter} />
        <img className="glitter" alt="Figma" src={FigmaGlitter} />
      </div>
      <div className="glitters-group1">
        <img className="glitter" alt="Node.js" src={NodejsGlitter} />
        <img className="glitter" alt="Mongo DB" src={MongoDBGlitter} />
        <img className="glitter" alt="Next.js" src={NextjsGlitter} />
      </div>
      <div className="glitters-group2">
      <img className="glitter" alt="SEO" src={SEOGlitter} />
      <img className="glitter" alt="accessibility" src={language === 'fr' ? AccessibiliteGlitter : AccessibilityGlitter}
 />
      </div>
      <div className="glitters-group1">
      <img className="glitter" alt="anglais" src={language === 'fr' ? AnglaisGlitter : EnglishGlitter}/>
      <img className="glitter" alt="français" src={language === 'fr' ? FrançaisGlitter : FrenchGlitter}/>
      <img className="glitter" alt="hongrois" src={language === 'fr' ? HongroisGlitter : HungarianGlitter}/>
      <img className="glitter" alt="espagnol" src={language === 'fr' ? EspagnolGlitter : SpanishGlitter}/>
      </div>
    </div>
  );
};

export default Glitters;
