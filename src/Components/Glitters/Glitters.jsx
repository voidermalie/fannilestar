import HTML5Glitter from '../../assets/glitters/html.gif';
import CssGlitter from '../../assets/glitters/css.gif';
import JavascriptGlitter from '../../assets/glitters/javascript.gif';
import ReactGlitter from '../../assets/glitters/react.gif';



const Glitters = () => {
    return (
        <div className='glitters-container'>
        <img className='glitter' alt='HTML5' src={HTML5Glitter}/>
        <p><img className='glitter' alt='CSS3' src={CssGlitter}/></p>
        <p><img className='glitter' alt='JavaScript' src={JavascriptGlitter}/></p>
        <p><img className='glitter' alt='React' src={ReactGlitter}/></p>
        </div>
    )
}

export default Glitters;