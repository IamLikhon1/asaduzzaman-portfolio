import Lottie from "lottie-react";
import aboutAnimation from '../../assets/about.json'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div id="about" className="my-10 mx-5 md:p-5" data-aos="fade-up"
        data-aos-duration="3000">
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>About</span></h2>
            <div className="grid md:grid-cols-2 mt-5 md:p-10 rounded-xl bg-orange-100">
                <div className="md:mt-36">
                <Lottie animationData={aboutAnimation} loop={true}></Lottie>
                </div>
               {/* about me */}
               <div className="p-3 font-medium" data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                    <h2 className="text-4xl border-b-4 w-1/2 text-center border-orange-400">About Me</h2>
                    <h4 className=" text-lg  md:text-xl mt-5 text-left ">Hello! Im Md. Asaduzzaman Likhon, from Narshindi, Bangladesh. I gained a strong foundation in web development technologies suc as Html,Css,Javascript,React,Tailwind, <br /> Firebase,MongoDB,Express js,Node js.I am highly motivated,hard-working,team-working,and progress-focused person.<TypeAnimation
                    className="font-bold ml-3 text-orange-400"
                    sequence={[
                        
                        'I am ready',
                        1000,
                        'I am very excited work with you',
                        1000,
                        'And you??',
                        1000,
                        
                      ]}
                      speed={200}
                      style={{ fontSize: '1.2em' }}
                      repeat={Infinity}/> </h4>
                </div>
               {/* about me */}

            </div>
        </div>
    );
};

export default About;