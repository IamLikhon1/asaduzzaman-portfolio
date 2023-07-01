import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-10 '>
            <footer className="footer items-center p-4  text-neutral-content bg-orange-300">
  <div className="items-center grid-flow-col">
     
    <p className='text-lg'>Copyright © 2023 - All right reserved By <span className='text-orange-500'>Asaduzzaman Likhon</span></p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl ">
    <a className='hover:text-[#1877F2]  duration-500 tooltip tooltip-info' data-tip="Facebook" href="https://www.facebook.com/likhon.adnan.58" target='blank'><FaFacebook></FaFacebook></a>
   <a className='hover:text-[#171515] duration-500 tooltip'data-tip="Github" href="https://github.com/IamLikhon1" target='blank'> <FaGithub></FaGithub></a>
    <a className='hover:text-[#DD2A7B] duration-500 tooltip tooltip-secondary'data-tip="Instagram" href="https://www.instagram.com/iamlikhu0098/ tooltip" target='blank'><FaInstagram></FaInstagram></a>
   <a className='hover:text-[#0077B5] duration-500 tooltip tooltip-info'data-tip="Linkedin"  href=""> <FaLinkedin></FaLinkedin></a>
   
  </div>
</footer>
            
        </div>
    );
};

export default Footer;