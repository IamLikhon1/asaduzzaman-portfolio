import CSSimg from '../../../public/css.png'
import ExpressIg from '../../../public/express-logo.png'
import FirebaseImg from '../../../public/firebase.png'
import HtmlImg from '../../../public/html.png'
import BootstrapImg from '../../../public/imgbootstrap.png'
import JavaScriptImg from '../../../public/JavaScript-Logo.jpg'
import mongodbImg from '../../../public/mongodb.jpg'
import nodejs from '../../../public/nodejs.png'
import reactImg from '../../../public/react.png'
import tailwindImg from '../../../public/tailwind.png'
import { Tilt } from 'react-tilt'

const Skills = () => {
   
    return (
        <div className="my-20 mx-5">
            <h2 className="text-3xl border-l-4 border-orange-400">Skills</h2>
            {/* images */}
           <div className='grid grid-cols-2 md:grid-cols-5 gap-8 mx-20 my-10'>
           <Tilt>
               <div className='tooltip tooltip-warning' data-tip="HTML5">
               <img className='shadow-2xl rounded-full mx-auto w-28 h-28 'src={HtmlImg} alt="" />
               </div>
           </Tilt>

               <Tilt>
               <div className='tooltip-warning tooltip' data-tip="CSS3"> <img className='w-28 h-28 shadow-2xl rounded-full ' src={CSSimg} alt="" /></div>
               </Tilt>
                <Tilt>
                <div className='tooltip tooltip-warning' data-tip="Tailwind">
                
                <img className='w-28 h-28 shadow-2xl rounded-full ' src={tailwindImg} alt="" />
                
                </div>
                </Tilt>
              <Tilt> <div className='tooltip tooltip-warning' data-tip="Bootstrap">
               <img className='w-28 h-28 shadow-2xl rounded-full ' src={BootstrapImg} alt="" />
               </div></Tilt>
                <Tilt><div className='tooltip tooltip-warning' data-tip="React Js">
                <img className='w-28 h-28 shadow-2xl rounded-full ' src={reactImg} alt="" />
                </div></Tilt>
               <Tilt><div className='tooltip tooltip-warning' data-tip="JavaScript">
               <img className='w-28 h-28 shadow-2xl rounded-full ' src={JavaScriptImg} alt="" />
               </div></Tilt>
              <Tilt> <div className='tooltip tooltip-warning'data-tip="MongoDB">
               <img className='w-28 h-28 shadow-2xl rounded-full ' src={mongodbImg} alt="" />
               </div></Tilt>
               <Tilt><div className=' tooltip tooltip-warning'data-tip="Firebase">
               <img className='w-28 h-28 shadow-2xl rounded-full ' src={FirebaseImg} alt="" />
               </div></Tilt>
              <Tilt> <div className='tooltip tooltip-warning ' data-tip="Express Js"> <img className='w-28 h-28 shadow-2xl rounded-full ' src={ExpressIg} alt="" /></div></Tilt>
                <Tilt><div className='tooltip tooltip-warning' data-tip="Node Js">
                <img className='w-28 h-28 shadow-2xl rounded-full ' src={nodejs} alt="" />

                </div></Tilt>

            </div>
            {/* images */}
            
        </div>
    );
};

export default Skills;