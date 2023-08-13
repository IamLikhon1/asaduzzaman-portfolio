import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import webAnimation from '../../assets/web animation.json'
import { FaDownload } from 'react-icons/fa';
import likhonResume from '../../../public/Resume of Asaduzzaman.pdf'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { toast } from 'react-hot-toast';

const Banner = () => {
    const handleResumeDownload=()=>{
        const link=document.createElement('a');
        link.href=likhonResume;
        link.download='Resume of Asaduzzaman.pdf';
        link.click()
        toast.success('Asaduzzaman Resume downloaded')

    }
    return (
        <div className='my-5'>
            <div className="grid md:grid-cols-2 items-center md:mx-10">
                {/* text */}
                <div className='md:mt-20'>
                    <h2 className="text-3xl font-semibold ">HI🖐 {"I'm"} Md. Asaduzzaman Likhon<br /> <br />
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

                <button onClick={handleResumeDownload} className=' button btn bg-[#FFA500] hover:bg-[#FFA500] mt-7 text-white rounded-xl'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><FaDownload className='text-white'></FaDownload>Download My Resume</button>
                <div className=" mt-10  grid-flow-col  md:place-self-center md:justify-self-end text-4xl "data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
        
    <a className='hover:text-[#1877F2] px-2 duration-500 tooltip tooltip-info' data-tip="Facebook" href="https://www.facebook.com/likhon.adnan.58" target='blank'><FaFacebook></FaFacebook></a>
   <a className='hover:text-[#171515] px-2 duration-500 tooltip'data-tip="Github" href="https://github.com/IamLikhon1" target='blank'> <FaGithub></FaGithub></a>
    <a className='hover:text-[#DD2A7B] px-2 duration-500 tooltip tooltip-secondary'data-tip="Instagram" href="https://www.instagram.com/iamlikhu0098/ tooltip" target='blank'><FaInstagram></FaInstagram></a>
   <a className='hover:text-[#0077B5] px-2 duration-500 tooltip tooltip-info'data-tip="Linkedin"  href="https://www.linkedin.com/in/md-asaduzzaman-likhon-922701282/" target='blank'> <FaLinkedin></FaLinkedin></a>
   
  </div>
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