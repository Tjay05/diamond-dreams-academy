import apprentice from "../../assets/image/apprenticeship.jpeg";

const Courses = () => {
  return (
    <div className="rule my-6 md:grid grid-cols-3 gap-6">
      <div className="border-2 w-full border-gray-100 rounded-md my-5">
        <img className="my-1 mx-auto rounded-t-md w-[98%] md:w-[99%] " src={apprentice} alt="" />
        <div className="rule">
          <h3 className="text-center font-[rokkitt] text-[#5c0002] font-medium text-xl my-2 uppercase">The Foundations of Elegance</h3>
          <p className="text-center font-[Open_sans] text-black my-2">A 2-week comprehensive course on refining beauty, style and grace.</p>
        </div>
        <div className="flex flex-col items-center my-6 gap-4">
          <a href="" className="bg-[#9d58089c] py-2 px-5 text-white font-[Open_sans] text-sm rounded-md">Login</a>
          <a href="" className="bg-[#5c0002] py-2 px-5 text-white font-[Open_sans] text-sm rounded-md">Register</a>
        </div>
      </div>
      <div className="border-2 w-full border-gray-100 rounded-md my-5">
        <img className="my-1 mx-auto rounded-t-md w-[98%] md:w-[99%] " src={apprentice} alt="" />
        <div className="rule">
          <h3 className="text-center font-[rokkitt] text-[#5c0002] font-medium text-xl my-2 uppercase">The Foundations of Elegance</h3>
          <p className="text-center font-[Open_sans] text-black my-2">A 2-week comprehensive course on refining beauty, style and grace.</p>
        </div>
        <div className="flex flex-col items-center my-6 gap-4">
          <a href="" className="bg-[#9d58089c] py-2 px-5 text-white font-[Open_sans] text-sm rounded-md">Login</a>
          <a href="" className="bg-[#5c0002] py-2 px-5 text-white font-[Open_sans] text-sm rounded-md">Register</a>
        </div>
      </div>
    </div>
  );
}
 
export default Courses;