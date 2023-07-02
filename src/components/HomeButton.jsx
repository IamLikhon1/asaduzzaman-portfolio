import { FaArrowUp} from 'react-icons/fa';

const HomeButton = () => {
    return (
        <div className=" hidden md:fixed z-30 md:inline-block md:mt-96 md:ml-96">
           <a className="ml-96" href="#home"> <button className="btn rounded-xl bg-[#ffcf77] hover:bg-[#fabe4e] ml-48 mt-16"><FaArrowUp className='text-xl text-white'></FaArrowUp></button></a>
            
        </div>
    );
};

export default HomeButton;