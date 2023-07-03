import HTML5Glitter from '../../assets/glitters/html.gif';
import CssGlitter from '../../assets/glitters/css.gif';
import JavascriptGlitter from '../../assets/glitters/javascript.gif';
import ReactGlitter from '../../assets/glitters/react.gif';
import GitGlitter from '../../assets/glitters/git.gif';
import NodejsGlitter from '../../assets/glitters/nodejs.gif';
import MongoDBGlitter from '../../assets/glitters/mongodb.gif';
import NextjsGlitter from '../../assets/glitters/nextjs.gif';
import FigmaGlitter from '../../assets/glitters/figma.gif';

const Glitters = () => {
  return (
    <div className="glitters-container">
      <img className="glitter" alt="HTML5" src={HTML5Glitter} />
      <img className="glitter" alt="CSS3" src={CssGlitter} />
      <img className="glitter" alt="JavaScript" src={JavascriptGlitter} />
      <img className="glitter" alt="React" src={ReactGlitter} />
      <img className="glitter" alt="Git" src={GitGlitter} />
      <img className="glitter" alt="React" src={NodejsGlitter} />
      <img className="glitter" alt="React" src={MongoDBGlitter} />
      <img className="glitter" alt="React" src={NextjsGlitter} />
      <img className="glitter" alt="React" src={FigmaGlitter} />
    </div>
  );
};

export default Glitters;
