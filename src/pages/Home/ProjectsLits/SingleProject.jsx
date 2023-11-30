import { FiExternalLink, FiGithub } from "react-icons/fi";

const SingleProject = () => {
    return (
        <div>
            <div className="card-container card card-compact  bg-base-100 shadow-xl" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="">
                <figure><img className='img-container' src={"projectSix"} alt="Shoes" /></figure>
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
        </div>
    );
};

export default SingleProject;