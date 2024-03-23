import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData()
      const {id} = useParams();
      const idInt = parseInt(id);
      const j = job.find(j => j.id === idInt);
      console.log(j,)
      const {job_title, company_name , logo, job_description,salary, job_responsibility, educational_requirements, experiences, contact_information} = j;
      
    return (
        <div className="max-w-6xl  mx-auto ">
            <h3 className="text-center text-3xl font-bold text-gray-800">Job Details</h3>
            <div className="grid gap-4 md:grid-cols-4">
            <div className=" border grid md:col-span-3 flex flex-col justify-center items-center gap-5 rounded-xl p-8 bg-slate-50 text-gray-500 my-6 ">
              <img className="w-[150px] my-6" src={logo} alt="" />
               <h2 className="font-semibold text-xl text-gray-700">{job_title}</h2>
               <h2 className="font-bold text-xl text-gray-700">{company_name}</h2>
               <h4><span className="text-[15px] font-semibold text-gray-700">Job Discription:</span> {job_description}</h4>
               <h4><span className="text-[15px] font-semibold text-gray-700">Job Responsibilities:</span> {job_responsibility}</h4>
               <h4><span className="text-[15px] font-semibold text-gray-700">Educational Requirments:</span> {educational_requirements}</h4>
               <h4><span className="text-[15px] font-semibold text-gray-700">Experience:</span> {experiences}</h4>

            </div>
            <div className="border flex flex-col justify-start items-start gap-5 rounded-xl p-8 bg-slate-50 text-gray-500 my-6">
                 <h1 className="text-center text-2xl font-bold">Job Details :</h1><hr className="w-full" />    
                  <div className="flex gap-3 justify-start items-center">
                   <img className="w-[20px]" src='https://i.postimg.cc/VLxHykmG/location2.png' alt="" />
                    <h3><span className="text-[15px] font-semibold">Job Title: </span>{job_title}</h3>
                  </div>
                 <div className="flex gap-2 justify-start items-center">
                  <img src="https://i.postimg.cc/cCTCQn2N/money.png" alt="" />
                   <h1><span className="text-[15px] font-semibold">Salary: </span>{salary}</h1>
                 </div>
                  <h1 className="text-center font-semibold text-xl">Contact Information :</h1> <hr className="w-full" />
                    <h3><span className="text-[15px] font-semibold ">Phone: </span>{contact_information.phone}</h3>
                    <h3><span className="text-[15px] font-semibold ">Email: </span>{contact_information.email}</h3>
                    <h3><span className="text-[15px] font-semibold ">Address: </span>{contact_information.address}</h3>
                    <button className="bg-red-500 hover:bg-blue-400 rounded-xl px-3 py-2 text-xl text-white font-semibold w-full">Apply Now</button>
            </div>
            </div>
        </div>
    );
};

export default JobDetails;