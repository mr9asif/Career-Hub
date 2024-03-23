

const Banner = () => {
    return (
        <div className="my-6 bg-blue-50 rounded-xl max-w-6xl mx-auto px-8 flex justify-between items-center">
         <div>
         <div  className="flex flex-col gap-4">
         <h1 className="text-5xl font-bold text-black">One Step</h1>
         <h1 className="text-5xl font-bold text-black">Closer To Your</h1>
         <h1 className="text-5xl font-bold text-blue-600">Dream Job</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn bg-red-600 hover:bg-blue-500 font-semibold text-xl w-[180px]">Get Started</button>
         </div>
         </div>
            <div className="w-[450px]">
               <img src="/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;