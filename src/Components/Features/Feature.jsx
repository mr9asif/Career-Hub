import { Link } from "react-router-dom";


const Feature = ({job}) => {
    console.log(job);
    const {id, logo,salary, job_title, company_name, job_type, location, remote_or_onsite} = job;
    return (
        <div className="flex flex-col p-10  bg-gray-100  rounded-2xl h-[320px] justify-center items-center gap-4">
            <img className="w-[90px]" src={logo} alt="" />
            <h2 className="text-xl font-semibold text-gray-600">{company_name}</h2>
            <h2>{job_title}</h2>
            <div className="flex gap-3">
              <button className="rounded-xl bg-blue-300 text-gray-600 font-semibold p-2">{remote_or_onsite}</button>
              <button className="rounded-xl bg-blue-300 text-gray-600 font-semibold p-2">{job_type}</button>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-1">
                 <img className="w-[20px]" src="https://i.postimg.cc/VLxHykmG/location2.png" alt="" />
                  <h3>{location}</h3>
              </div>
              <div className="flex gap-1">
               <img src="https://i.postimg.cc/cCTCQn2N/money.png" alt="" />
               <h3>{salary}</h3>
              </div>
            </div>
              <Link to={`/job/${id}`}>
              <button className=" bg-red-400 text-gray-800 font-semibold hover:bg-blue-500 rounded-xl p-3">View Details</button>
              </Link> 
        </div>
    );
};

export default Feature;