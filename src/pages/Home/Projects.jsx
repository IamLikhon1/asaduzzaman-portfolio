import ProjectOne from '../../../public/projectOne.png'
import ProjectTwo from '../../../public/projectTwo.png'
import ProjectThree from '../../../public/projectThree.png'

import { FiExternalLink, FiGithub } from "react-icons/fi";


const Projects = () => {
    return (
        <div id="Project" className="my-20 md:p-5"data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
           <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Projects</span></h2>
           {/* card */}
           <div className="grid ml-8 md:ml-0 md:grid-cols-3 gap-5 mt-20"data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000">

           {/* projectOne */}
           <div className=" card-container card card-compact bg-base-100 shadow-xl">
        <figure><img className='img-container' src={ProjectOne} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Foreign Language</h2>
            <p className='text-xl my-3'>Summer School Camp Website</p>
            <div className='grid grid-cols-3'>
               <button className='mx-1 tooltip mt-4 tooltip-warning'data-tip="Website-Live-Link">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://fashion-summer.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                </a>
                </button>
               <button className='mx-1 tooltip mt-4  tooltip-warning'data-tip="Client-Github-Site">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/language-vacation" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                </a>
                </button>

               <button className='mx-1 tooltip mt-4  tooltip-warning'data-tip="Server-Github-Site">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/language-server" target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                </a>
                </button>
            </div>
            
            
        </div>
        </div>
           {/* projectOne */}

           {/* projectTwo */}
           <div className=" card-container card card-compact bg-base-100 shadow-xl">
        <figure><img className='img-container' src={ProjectTwo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Parlour Website</h2>
            <p className='text-xl my-3'>Simple Parlour(Authentication)</p>
            <div className='grid grid-cols-2'>
               <button className='mx-1 tooltip mt-4 tooltip-warning'data-tip="Website-Live-Link">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://simple-parlour-84df8.web.app/"target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                </a>
                </button>
               <button className='mx-1 tooltip mt-4 tooltip-warning'data-tip="Client-Github-Site">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/simple-parlour" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                </a>
                </button>

               
            </div>
            
            
        </div>
        </div>
           {/* projectTwo */}

           {/* projectThree */}
           <div className=" card-container card card-compact bg-base-100 shadow-xl">
        <figure><img className='img-container' src={ProjectThree} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Toy Market</h2>
            <p className='text-xl my-3'>Toy-Cars-World</p>
            <div className='grid grid-cols-3'>
               <button className='mx-1 tooltip-warning mt-4 tooltip'data-tip="Website-Live-Link">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://toys-car.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                </a>
                </button>
               <button className='mx-1 tooltip mt-4 tooltip-warning'data-tip="Client-Github-Site">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/markect-toy" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                </a>
                </button>

               <button className='mx-1 tooltip mt-4 tooltip-warning'data-tip="Server-Github-Site">
                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/toy-market-server"target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                </a>
                </button>
            </div>
            
            
        </div>
        </div>
           {/* projectThree */}
                
            </div>
           {/* card */}
            
        </div>
    );
};

export default Projects;