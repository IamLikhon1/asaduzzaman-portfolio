import { FaArrowUp } from 'react-icons/fa';

const HomeButton = () => {
    return (
       <div className='flex justify-end'>
         <div className="hidden md:fixed z-30 md:block mt-40" data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <a href="#home"> <button className="btn rounded-xl bg-[#ffca68] hover:bg-[#ffca68] mt-96"><FaArrowUp className='text-xl text-white '></FaArrowUp></button></a>

        </div>
       </div>
    );
};

export default HomeButton;