import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {
    const [features, setFeatures] = useState([]);
    const [displayJobs, setDisplayJobs] = useState(4);
   

    const handleSeemore =()=>{
        setDisplayJobs(features.length);
      
    }
     useEffect(()=>{
         fetch(`/data/jobs.json`)
         .then(res=> res.json())
         .then(data => setFeatures(data))
     },[])
    return (
        <div className="max-w-6xl mx-auto text-center my-6">
            <h1 className="text-3xl mb-4 font-extrabold text-gray-700">Featured Jobs : {features.length}</h1>
            <p className="text-[13px] ">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid  px-6 grid-cols-2 gap-3 max-w-6xl mx-auto ">
              {
                features.slice(0, displayJobs).map(job=> <Feature key={job.id} job={job}></Feature>)
              }
            </div >
           <div className={features.length === displayJobs && 'hidden'}>
         
           <button onClick={handleSeemore}  className="bg-blue-500 hover:bg-red-500 p-3 rounded-xl text-gray-600 font-semibold text-center my-6">See more</button>
       
          
           </div>   
            
        </div>
     
    );
};

export default Features;