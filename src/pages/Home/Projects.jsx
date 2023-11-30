import ProjectOne from '../../../public/projectOne.png'
import ProjectTwo from '../../../public/projectTwo.png'
import ProjectThree from '../../../public/projectThree.png'
import projectFour from '../../../public/projectSix.png'
import projectSix from '../../../public/projectSeven.png'
import projectFive from '../../../public/projectFive.png'

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useEffect, useState } from 'react'


const Projects = () => {
    const [allData, setAllData]=useState([]);

    const fullStackProjects= allData.filter(item=>item.category=='FullStack');
    const frontendProjects= allData.filter(item=>item.category=='Frontend');
    const teamProjects= allData.filter(item=>item.category=='Team');
    const figmaToHtml= allData.filter(item=>item.category=='Figma');
    // console.log(teamProjects);

    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])
    return (
        <div id="Project" className="mx-10 md:p-5" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Projects</span></h2>
            {/* card */}
            <div className="grid md:grid-cols-3 gap-5 mt-10" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">


                {/* projectOne */}
                <div className="card-container card card-compact  bg-base-100 shadow-xl" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="">
                    <figure><img className='img-container' src={projectSix} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">College Booking Facilities (MERN)</h2>
                        <p className='text-xl my-3'>Collegiate Nexus</p>
                        <div className='grid grid-cols-3'>
                            <button className='mx-1 tooltip-warning mt-4 tooltip' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://collegiate-nexus.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/college-client" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>

                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Server-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/college-server" target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>
                        </div>


                    </div>
                </div>
                {/* projectOne */}

                {/* projectTwo */}
                <div className=" card-container card card-compact bg-base-100 shadow-xl">
                    <figure><img className='img-container' src={ProjectOne} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Foreign Language (MERN)</h2>
                        <p className='text-xl my-3'>Summer School Camp Website</p>
                        <div className='grid grid-cols-3'>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://fashion-summer.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4  tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/language-vacation" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>

                            <button className='mx-1 tooltip mt-4  tooltip-warning' data-tip="Server-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/language-server" target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>
                        </div>


                    </div>
                </div>
                {/* projectTwo */}

                {/* projectThree */}
                <div className=" card-container card card-compact bg-base-100 shadow-xl">
                    <figure><img className='img-container' src={ProjectTwo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Parlour Website</h2>
                        <p className='text-xl my-3'>Simple Parlour(Authentication)</p>
                        <div className='grid grid-cols-2'>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://simple-parlour-84df8.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/simple-parlour" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>


                        </div>


                    </div>
                </div>
                {/* projectThree */}

                {/* projectFour */}
                <div className=" card-container card card-compact bg-base-100 shadow-xl" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <figure><img className='img-container' src={ProjectThree} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Market (MERN)</h2>
                        <p className='text-xl my-3'>Toy-Cars-World</p>
                        <div className='grid grid-cols-3'>
                            <button className='mx-1 tooltip-warning mt-4 tooltip' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://toys-car.web.app/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/markect-toy" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>

                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Server-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/toy-market-server" target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>
                        </div>


                    </div>
                </div>
                {/* projectFour */}

                {/* projectFive */}
                <div className=" card-container card card-compact bg-base-100 shadow-xl" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <figure><img className='img-container' src={projectFour} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Figma To Html</h2>
                        <p className='text-xl my-3'>The Tea House</p>
                        <div className='grid grid-cols-2'>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://iamlikhon1.github.io/tea-house-bs/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/tea-house-bs" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>


                        </div>


                    </div>
                </div>
                {/* projectFive */}



                {/* projectSix*/}
                <div className=" card-container card card-compact bg-base-100 shadow-xl" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <figure><img className='img-container' src={projectFive} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">PSD To Html(Wedding Event)</h2>
                        <p className='text-xl my-3'>Abacus Convention Center</p>
                        <div className='grid grid-cols-2'>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Website-Live-Link">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://iamlikhon1.github.io/convention-center/" target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                                </a>
                            </button>
                            <button className='mx-1 tooltip mt-4 tooltip-warning' data-tip="Client-Github-Site">
                                <a className='flex items-center text-lg font-semibold hover:text-orange-400 duration-500' href="https://github.com/IamLikhon1/convention-center" target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                                </a>
                            </button>


                        </div>


                    </div>
                </div>
                {/* projectSix */}

            </div>
            {/* card */}

        </div>
    );
};

export default Projects;