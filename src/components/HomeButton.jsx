import { FaArrowUp } from 'react-icons/fa';

const HomeButton = () => {
    return (
       <div className='flex justify-end'>
         <div className="hidden md:fixed z-30 md:inline-block" data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <a href="#home"> <button className="btn rounded-xl bg-[#ffcf77] hover:bg-[#fabe4e] mt-96"><FaArrowUp className='text-xl text-white'></FaArrowUp></button></a>

        </div>
       </div>
    );
};

export default HomeButton;