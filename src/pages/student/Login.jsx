const Login = () => {
  return (
    <div className="w-[90%] mx-auto shadow-2xl my-12 rounded-lg p-4 md:w-[45%]">
      <p className="text-black font-bold text-xl my-6 font-[rokkitt]">Hi, Welcome back!</p>
      <form action="" className="">
        <input className="border border-gray-300 text-sm p-2 rounded-sm w-full mb-5 text-gray-500 font-[open_sans] " type="text" placeholder="Username or Email Address" />
        <input className="border border-gray-300 text-sm p-2 rounded-sm w-full mb-5 text-gray-500 font-[open_sans] " type="password" placeholder="Password" />
        <button className="bg-[#5c0002] text-white py-2 w-full rounded-lg my-8 font-[open_sans] font-bold" >Sign In</button>
      </form>
    </div>
  );
}
 
export default Login;