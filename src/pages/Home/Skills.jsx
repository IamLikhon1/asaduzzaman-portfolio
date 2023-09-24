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
        <div id='skills' className="mt-16 md:p-5 mb-20 mx-5" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Skills</span></h2>
            {/* images */}
            <div className='grid grid-cols-2 md:grid-cols-5 gap-10 mx-20 mt-16 cursor-pointer'>
                <Tilt>
                    <div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-white' data-tip="HTML5">
                        <img className='mx-auto w-full h-full' src={HtmlImg} alt="" />
                    </div>
                </Tilt>

                <Tilt>
                    <div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-white' data-tip="CSS3"> <img className='mx-auto w-full h-full' src={CSSimg} alt="" /></div>
                </Tilt>
                <Tilt>
                    <div className='tooltip tooltip-warning  w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="Tailwind">

                        <img className='mx-auto w-full h-full' src={tailwindImg} alt="" />

                    </div>
                </Tilt>
                <Tilt> <div className='tooltip tooltip-warning  w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="Bootstrap">
                    <img className='mx-auto w-full h-full' src={BootstrapImg} alt="" />
                </div></Tilt>
                <Tilt><div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="React Js">
                    <img className='mx-auto w-full h-full' src={reactImg} alt="" />
                </div></Tilt>
                <Tilt><div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="JavaScript" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='mx-auto w-full h-full' src={JavaScriptImg} alt="" />
                </div></Tilt>
                <Tilt> <div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="MongoDB" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='mx-auto w-full h-full' src={mongodbImg} alt="" />
                </div></Tilt>
                <Tilt><div className=' tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="Firebase" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='mx-auto w-full h-full' src={FirebaseImg} alt="" />
                </div></Tilt>
                <Tilt> <div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50 ' data-tip="Express Js" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"> <img className='mx-auto w-full h-full' src={ExpressIg} alt="" /></div></Tilt>
                <Tilt><div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-gray-50' data-tip="Node Js" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img className='mx-auto w-full h-full' src={nodejs} alt="" />

                </div></Tilt>

            </div>
            {/* images */}

        </div>
    );
};

export default Skills;