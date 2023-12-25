import Lottie from "lottie-react";
import aboutAnimation from '../../assets/about.json'

const About = () => {
    return (
        <div id="about" className="mx-5 md:p-5" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <h2 className="text-4xl border-l-4  border-orange-400 mx-auto"><span className='ml-2'>About</span></h2>
            <div className="grid md:grid-cols-12 mt-5  items-center rounded-xl  text-white">
                <div className="col-span-5">
                    <Lottie animationData={aboutAnimation} loop={true}></Lottie>
                </div>
                {/* about me */}
                <div className="px-2 col-span-7">
                    <h2 className="text-4xl border-b-4 w-1/2 border-orange-400 text-orange-300 font-bold">About Me</h2>
                    <h4 className="text-lg  md:text-2xl mt-5 text-black">Hi, {"I'm"} MD.Asaduzzzman Likhon, a passionate and enthusiastic web developer.I have a strong foundation in web development, with proficiency in HTML, CSS, Tailwind, JavaScript React, and Backend I am familiar with Next. JS, Node, Express, and MongoDB.During my course journey, I have done dozens of frontend projects and a few full-Stack projects and designed responsive websites. {"I've"} worked on a team project with five people for two months. I am highly motivated, a quick learner, and a team player</h4>
                </div>
                {/* about me */}

            </div>
        </div>
    );
};

export default About;