import { MdEmail, MdFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import laptop from "../../assets/image/laptop.jpeg";

const Contact = () => {
  return (
    <div className="mb-6 relative">
      <header 
        className="relative w-full bg-cover bg-center py-4 mb-2 md:py-8"
        style={{ backgroundImage: `url(${laptop})` }}
      >
        <div className="absolute inset-0 opacity-85 bg-black"></div>
        <div className="rule relative">
          <h2 className="text-white font-[rokkitt] text-center text-4xl font-bold md:text-6xl">Contact Us</h2>
          <p className="text-white text-center font-[Open_sans] text-sm pb-4 md:text-lg"><span className="underline text-[#b17a13]">Home </span>/ Contact</p>
        </div>
      </header>
      <section className="rule rounded-lg shadow-md p-4 my-4 md:p-10 md:my-10 md:flex justify-between">
        <div className="my-6 font-[Open_sans] md:w-[47%]">
          <h3 className="border-b border-gray-300 p-4 text-center font-bold text-2xl text-[#5c0002] font-[rokkitt] md:text-left md:text-4xl">Let's Hear From You</h3>
          <a className="flex text-sm gap-1 my-4 items-center">
            <MdEmail color="#5c0002" size={20}/>
            <p className="md:text-xl">diamondreamsevents@gmail.com</p>
          </a>
          <a href="https://www.instagram.com/diamondreamsevents?igsh=NHI2OHRzcXNqM2Y5" target='_blank' className="flex text-sm items-center w-fit my-4 gap-1">
            <PiInstagramLogoFill color="#5c0002" size={20}/>
            <p className="md:text-xl">Diamonddreams Event</p>
          </a>
          <a href="https://web.facebook.com/diamondreamsevents" target='_blank' className="flex text-sm items-center w-fit gap-1 my-4">
            <MdFacebook color="#5c0002" size={20}/>
            <p className="md:text-xl">Diamonddreams Event</p>
          </a>
        </div>
        <form action="" className="md:w-[47%]">
          <label className="label" htmlFor="name">Name</label><br />
          <input className="input_field" id="name" type="text" /><br />
          <div className="md:flex justify-between items-stretch">
            <div className="md:w-[48%]">
              <label className="label" htmlFor="Email">Email</label><br />
              <input className="input_field" type="email" name="" id="Email" /><br />
            </div>
            <div className="md:w-[48%]">
              <label className="label" htmlFor="Number">Whatsapp Number</label><br />
              <input className="input_field" type="number" id="Number" /><br />
            </div>
          </div>
          <label className="label" htmlFor="message">Message</label><br />
          <textarea className="input_field" name="message" id="message" cols="30" rows="5"></textarea><br />
          <button className=" uppercase rounded py-2 w-full font-[open_sans] font-bold text-[#5c0002] bg-[#9d58089c] hover:cursor-pointer">send message</button>
        </form>
      </section>
    </div>
  );
}
 
export default Contact;