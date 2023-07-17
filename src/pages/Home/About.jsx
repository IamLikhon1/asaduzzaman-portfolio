import Lottie from "lottie-react";
import aboutAnimation from '../../assets/about.json'

const About = () => {
    return (
        <div id="about" className="mt-16 mx-5 md:p-5" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000">
            <h2 className="text-4xl border-l-4  border-orange-400 mx-auto"><span className='ml-2'>About</span></h2>
            <div className="grid md:grid-cols-2 mt-5 md:p-10 items-center rounded-xl bg-orange-300 text-white">
                <div className="">
                <Lottie animationData={aboutAnimation} loop={true}></Lottie>
                </div>
               {/* about me */}
               <div className="p-3 font-medium" data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                    <h2 className="text-4xl border-b-4 w-1/2 text-center border-orange-400">About Me</h2>
                    <h4 className=" text-lg  md:text-xl mt-5 font-serif text-black" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000">Hi, {"I'm"} MD.Asaduzzzman Likhon, a passionate and enthusiastic web developer. As a recent graduate in web development, I bring a solid foundation in programming languages such as HTML, CSS,  and JavaScript.Comfortable skills in a React.js, MongoDB.Familiar skills in Express.js, Node.js. I have experience working on various web projects during my studies, which allowed me to enhance my skills in front-end development, responsive design, and user experience.</h4>
                </div>
               {/* about me */}

            </div>
        </div>
    );
};

export default About;