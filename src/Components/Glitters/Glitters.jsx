import './Glitters.css';

import HTML5Glitter from '../../assets/glitters/html.gif';
import CssGlitter from '../../assets/glitters/css.gif';
import JavascriptGlitter from '../../assets/glitters/javascript.gif';
import ReactGlitter from '../../assets/glitters/react.gif';
import GitGlitter from '../../assets/glitters/git.gif';
import ReactNativeGlitter from '../../assets/glitters/ReactNative.gif';
import TypescriptGlitter from '../../assets/glitters/typescript.gif';
import NodejsGlitter from '../../assets/glitters/nodejs.gif';
import MongoDBGlitter from '../../assets/glitters/mongodb.gif';
import NextjsGlitter from '../../assets/glitters/nextjs.gif';
import FigmaGlitter from '../../assets/glitters/figma.gif';
import TailWindGlitter from '../../assets/glitters/tailwind.gif';
import SassGlitter from '../../assets/glitters/sass.gif';

const glittersGroup1 = [
  { alt: 'HTML5', src: HTML5Glitter },
  { alt: 'CSS3', src: CssGlitter },
  { alt: 'Sass', src: SassGlitter },
  { alt: 'JavaScript', src: JavascriptGlitter },
  { alt: 'TypeScript', src: TypescriptGlitter },
];

const glittersGroup2 = [
  { alt: 'React', src: ReactGlitter },
  { alt: 'Next.js', src: NextjsGlitter },
  { alt: 'React Native', src: ReactNativeGlitter },
];

const glittersGroup3 = [
  { alt: 'Git', src: GitGlitter },
  { alt: 'Figma', src: FigmaGlitter },
  { alt: 'TailWind', src: TailWindGlitter }
];

const glittersGroup4 = [
  { alt: 'Node.js', src: NodejsGlitter },
  { alt: 'Mongo DB', src: MongoDBGlitter },
];

const Glitters = () => {
  return (
    <div className="glitters-container">
      <div className="glitters-group1">
        {glittersGroup1.map((item, index) => (
          <img key={index} className="glitter" alt={item.alt} src={item.src} />
        ))}
      </div>
      <div className="glitters-group2">
        {glittersGroup2.map((item, index) => (
          <img key={index} className="glitter" alt={item.alt} src={item.src} />
        ))}
      </div>
      <div className="glitters-group1">
        {glittersGroup3.map((item, index) => (
          <img key={index} className="glitter" alt={item.alt} src={item.src} />
        ))}
      </div>
      <div className="glitters-group1">
        {glittersGroup4.map((item, index) => (
          <img key={index} className="glitter" alt={item.alt} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default Glitters;
