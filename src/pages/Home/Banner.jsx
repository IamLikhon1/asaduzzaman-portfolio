import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import webAnimation from '../../assets/web animation.json'
import { FaDownload } from 'react-icons/fa';
import likhonResume from '../../../public/Resume of Asaduzzaman.pdf'

const Banner = () => {
    const handleResumeDownload=()=>{
        const link=document.createElement('a');
        link.href=likhonResume;
        link.download='Resume of Asaduzzaman.pdf';
        link.click()

    }
    return (
        <div>
            <div className="grid md:grid-cols-2 items-center md:mx-10">
                {/* text */}
                <div>
                    <h2 className="text-3xl ">HI🖐 {"I'm"} Md. Asaduzzaman Likhon<br />
                    {"I'm"} a <TypeAnimation
                    className="font-bold ml-3 font-serif text-orange-400"
                    sequence={[
                        
                        'Web Developer',
                        1000,
                        'Fronted-Developer',
                        1000,
                        'MERN Stack Developer',
                        1000,
                        'React Js-Developer',
                        1000,
                        
                      ]}
                      speed={50}
                      style={{ fontSize: '1em' }}
                      repeat={Infinity}/></h2>

                <button onClick={handleResumeDownload} className=' button btn btn-secondary mt-7'><FaDownload></FaDownload>Download My Resume</button>
                </div>
                {/* text */}
                {/* img */}
                <div>
                <Lottie animationData={webAnimation} loop={true}></Lottie>
                </div>
                {/* img */}

            </div>
            
        </div>
    );
};

export default Banner;