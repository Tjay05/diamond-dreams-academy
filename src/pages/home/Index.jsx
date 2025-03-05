import guy from "../../assets/image/guy-laptop.jpeg";
import lady from "../../assets/image/lady-laptop.jpeg";
import apprentice from "../../assets/image/apprenticeship.jpeg";
import handbag from "../../assets/image/handbag.jpeg";
import laptop from "../../assets/image/laptop.jpeg";

const Home = () => {
  return (
    <div className="relative">
      <header 
        className='relative w-full h-70 bg-cover bg-center'
        style={{ backgroundImage: `url(${guy})` }}
      >
        <div className="absolute inset-0 opacity-70 bg-linear-105 from-black to-white"></div>
        <div className="relative z-1 flex flex-col items-center justify-center rule py-4">
          <h1 className="uppercase text-white text-center font-extrabold text-4xl font-[Open_Sans] pt-6">Diamonddreams Academy</h1>
          <button className="rounded uppercase text-center w-full font-bold font-[Open_Sans] text-lg text-[#5c0002] p-2 my-6 bg-white hover:cursor-pointer md:w-1/4">Courses</button>
        </div>
      </header>
      <section className="cta rule">
        <h2 className="font-extrabold text-2xl text-[#5c0002] font-[rokkitt]">Join Us</h2>
        <form className="font-[Open_Sans] my-4">
          <div className="md:flex justify-between">
            <input
              className="input_field"
              type="text"
              placeholder="Name"
            />
            <input
              className="input_field"
              type="email"
              placeholder="Email"
            />
          </div>
          <button className="rounded py-2 w-full font-bold text-black bg-[#9d58089c] hover:cursor-pointer">Join Now</button>
        </form>
      </section>
      <section className="rule pt-56 pb-6 md:flex">
        <img className="rounded-md w-full my-4 md:w-2/4" src={handbag} alt="" />
        <div className="md:ml-10">
          <p className="my-2 tracking-widest font-[rokkitt] text-[#5c0002] font-medium md:text-center md:text-xl">Who We Are</p>
          <h2 className="font-bold font-[rokkitt] my-3 text-3xl md:text-4xl">Your one-stop guide for Career transformation</h2>
          <p className="font-[Open_sans] text-black my-2 md:text-lg">
            From wedding planning to corporate events, our comprehensive courses and training programs will equip you with the expertise to deliver unforgettable experiences.<br/>Join our community of event enthusiats and transform your passion into a rewarding career. Explore our courses, workshops and resources today and take the first step towards a brighter future in event management
          </p>
        </div>
      </section>
      {/* Our Courses */}
      <section 
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${lady})` }}
      >
        <div className="absolute inset-0 opacity-85 bg-black"></div>
        <div className="relative z-1 flex flex-col items-center justify-center text-white rule py-4">
          <h2 className="font-bold text-3xl my-4 text-center font-[rokkitt] md:text-5xl">Our Courses</h2>
          <p className="text-center text-lg font-[Open_sans] my-2 md:text-xl">
            Unlock your potential in the event managemnt industry with our comprehensive courses. Designed to equip you with the skills and knowledge needed to succeed, our programs cover a wide range of topics, from wedding planning to corporate events.<br/>
            Our courses are led by experienced professionals and offer a unique blend of theoretical and practical learning. Whether you're just starting out or looking to enhance your existing skills, we have a course that's right for you. <br/>
            Explore our range of courses below and discover how we can help you achieve your goals in event management
          </p>
          <button className="uppercase rounded py-2 w-full font-bold text-black bg-[#9d5808] hover:cursor-pointer my-3 md:w-1/10 md: text-lg">courses</button>
        </div>
      </section>
      <section className="rule py-6">
        <p className="mt-2 tracking-widest font-[rokkitt] text-[#5c0002] font-medium text-center md:text-xl">What We Offer</p>
        <h2 className="font-[rokkitt] text-3xl font-bold text-center md:text-5xl">What You Get</h2>
        {/* Courses Displayed */}
        <div className="md:grid grid-cols-3 gap-4">
          <div className="border-2 w-full rounded-md my-5">
            <img className="my-1 mx-auto rounded-t-md w-[98%] md:w-[99%] " src={apprentice} alt="" />
            <div className="rule">
              <h3 className="text-center font-[rokkitt] text-[#5c0002] font-medium text-xl my-2 uppercase">The Foundations of Elegance</h3>
              <p className="text-center font-[Open_sans] text-black my-2">A 2-week comprehensive course on refining beauty, style and grace.</p>
            </div>
            <div className="border-t-gray-200 flex py-4 justify-between border-t-2 w-[80%] mx-auto">
              <div className="flex gap-2 text-[#5c0002]">
                <p>2 Modules</p>
              </div>
              <div className="">
                <p>6 Lessons</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Summary */}
      <section 
        className="relative w-full bg-center bg-cover grid grid-cols-2 py-4 md:grid-cols-4"
        style={{ backgroundImage: `url(${laptop})` }}
      >
        <div className="absolute inset-0 opacity-85 bg-black"></div>
        <div className="relative flex flex-col my-4 md:mb-2 font-[rokkitt] items-center">
          <p className="text-5xl font-bold text-center text-white">30+</p>
          <p className="text-xl font-bold text-[#9d5808] text-center md:text-2xl">Students</p>
        </div>
        <div className="relative flex flex-col my-4 md:mb-2 font-[rokkitt] items-center">
          <p className="text-5xl font-bold text-center text-white">10+</p>
          <p className="text-xl font-bold text-[#9d5808] text-center md:text-2xl">Courses</p>
        </div>
        <div className="relative flex flex-col my-4 md:mb-2 font-[rokkitt] items-center">
          <p className="text-5xl font-bold text-center text-white">15+</p>
          <p className="text-xl font-bold text-[#9d5808] text-center md:text-2xl">Topics</p>
        </div>
        <div className="relative flex flex-col my-4 md:mb-2 font-[rokkitt] items-center">
          <p className="text-5xl font-bold text-center text-white">50+</p>
          <p className="text-xl font-bold text-[#9d5808] text-center md:text-2xl">Reviews</p>
        </div>
      </section>
      {/* CEO */}
      <section className="rule">
        <img src='' alt="Emma Collins" />
        <div className="text-black">
          <h2 className="font-bold my-3 text-3xl font-[rokkitt]">Meet our mentor, Dr Emma Collins.</h2>
          <p className="my-4 font-[Open_Sans]">
            Dr Emma Collins a seasoned event management professional with numerous years of planning and executing high-profile events on the Plateau and environs. With a passion for sharing knowledge and inspiring others, she bring a wealth of expertise and enthusiasm to our academy. Her dedication to mentoring the next generation of event planners is unparalleled and we're thrilled to have her on our team.
          </p>
        </div>
      </section>
      {/* Testimonials */}
      <section className="rule my-4">
        <p className="my-2 tracking-widest font-[rokkitt] text-[#5c0002] font-medium text-center md:text-xl">Testimonials</p>
        <h2 className="font-[rokkitt] text-3xl font-bold text-center md:text-5xl">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="shadow-lg my-2 text-center rounded-lg p-4">
            <p className="italic font-[Open_Sans] my-2">
              I'm forever grateful for the experience I had at Diamonddreams Academy. The event management course was comprehensive, enagaging and perfectly balanced between theory and practicality. The mentorship I recieved from Dr Emma Collins was invaluable and her industry insights helped me navigate the field with confidence.
            </p>
            <span className="font-bold text-xl font-[rokkitt]">Toppin Poppins</span>
            <p className="font-[Open_Sans] text-sm">Du, Plateau</p>
          </div>
          <div className="shadow-lg my-2 text-center rounded-lg p-4">
            <p className="italic font-[Open_Sans] my-2">
              I'm forever grateful for the experience I had at Diamonddreams Academy. The event management course was comprehensive, enagaging and perfectly balanced between theory and practicality. The mentorship I recieved from Dr Emma Collins was invaluable and her industry insights helped me navigate the field with confidence.
            </p>
            <span className="font-bold text-xl font-[rokkitt]">Toppin Poppins</span>
            <p className="font-[Open_Sans] text-sm">Du, Plateau</p>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Home;