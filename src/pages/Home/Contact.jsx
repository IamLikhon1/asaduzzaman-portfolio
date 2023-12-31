import {  FaAddressCard, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3qo1qw9', 'template_5iv4esr', form.current, 'iwq7hgBp_3uHz524q')
      .then((result) => {
          console.log(result.text);
          toast.success('Email Send Successfully ')
          e.target.reset()
          
          
      }, (error) => {
          console.log(error.text);
          toast.error('Something Wrong!')
      });
      
      
      
  };
    return (
       <div id="contact" className="mx-5 mt-16 md:p-5" data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
        <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Contact Me</span></h2>
         <div className="my-16 grid md:grid-cols-2 items-center gap-16">
            
            {/* card */}
            <div className="grid md:grid-cols-2 gap-8"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className="card hover:bg-orange-300 duration-500 text-center card-compact w-full bg-base-100 shadow-2xl">
 <div className="mx-auto mt-5"> <FaPhone className="text-5xl text-orange-500"></FaPhone></div>
  <div className="card-body">
    <h2 className="card-title mx-auto">Phone Number</h2>
    <p className="font-medium">+8801614266733</p>
    
  </div>
</div>

<div className="card hover:bg-orange-300 duration-500  text-center card-compact w-full bg-base-100 shadow-2xl">
 <div className="mx-auto mt-5"> <FaEnvelope className="text-5xl text-orange-500"></FaEnvelope></div>
 
  <div className="card-body">
    <h2 className="card-title mx-auto">Email</h2>
    <p className="font-medium"><a href="likhonadnana55@gmail.com"></a>likhonadnana55@gmail.com</p>
    
  </div>
</div>

<div className="card hover:bg-orange-300 duration-500  text-center card-compact w-full bg-base-100 shadow-2xl">
 <div className="mx-auto mt-5"> <FaAddressCard className="text-5xl text-orange-500"></FaAddressCard></div>
 
  <div className="card-body">
    <h2 className="card-title mx-auto">Address</h2>
    <p className=" font-medium">Narshindi,Bangladesh</p>
    
  </div>
</div>

            </div>
            {/* card */}
            {/* from */}
            <div className="bg-orange-300 rounded-xl px-10 py-10"data-aos="fade-left"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                <h2 className="text-4xl text-white font-medium border-b-4 w-1/2 mx-auto text-center border-orange-400">Send Mail</h2>
                <div>
                    <section className="mt-10">
            
           <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="user_name"placeholder="Enter Name" className="input input-bordered input-md w-full my-5 shadow-xl " required/>

<input type="email" name="user_email" placeholder="Enter Your Email Address " className="input input-bordered input-md w-full my-5 shadow-xl "required/> 

<textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg w-full shadow-xl"required ></textarea>
        <button type="submit" className="btn   bg-[#FFA500] hover:bg-[#FFA500] text-white  my-5 ">Send Message</button>
           </form>
        </section>
                </div>

            </div>
            {/* from */}
            
        </div>
       </div>
    );
};

export default Contact;