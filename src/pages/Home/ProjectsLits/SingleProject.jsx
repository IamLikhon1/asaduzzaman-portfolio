import { FiExternalLink, FiGithub } from "react-icons/fi";

const SingleProject = ({ data }) => {
    const { img, title, sunTitle, liveLink, client, server} = data;
    return (
        <div>
            <div className="card-container card card-compact bg-base-200  cursor-pointer shadow-md hover:shadow-lg duration-500 my-3 md:my-0 w-fit">
                <figure><img className='img-container' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-medium">{title}</h2>
                    <p className='text-lg'>{sunTitle}</p>

                    <div className='flex justify-between items-center mx-2'>
                        <button className='mx-1 tooltip-warning mt-3 tooltip' data-tip="Website-Live-Link">
                            <a className='flex gap-2 items-center text-lg font-semibold hover:text-orange-400 duration-500' href={liveLink} target='blank'>Live Link <FiExternalLink className='items-center mt-1'></FiExternalLink>

                            </a>
                        </button>
                        <button className='mx-1 tooltip mt-3 tooltip-warning' data-tip="Client-Github-Site">
                            <a className='flex gap-2 items-center text-lg font-semibold hover:text-orange-400 duration-500' href={client} target='blank'>Client<FiGithub className='items-center mt-1 '></FiGithub>

                            </a>
                        </button>

                        <button className='mx-1 tooltip mt-3 tooltip-warning' data-tip="Server-Github-Site">
                            <a className='flex gap-2 items-center text-lg font-semibold hover:text-orange-400 duration-500' href={server} target='blank'>Sever<FiGithub className='items-center mt-1 '></FiGithub>

                            </a>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleProject;