import { useEffect, useState } from "react";
import Catagory from "./Catagory";


const Catagories = () => {
          const [catagories, setCatagories] = useState([]);

          useEffect(()=>{
            fetch(`/data/categories.json`)
            .then(res => res.json())
            .then(data => setCatagories(data))
          },[])

    return (
        <div className="my-8  max-w-6xl text-center mx-auto ">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">Job Category List : {catagories.length}</h1>
            <p className="text-gray-600 text-[13px]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between items-center px-32 my-5 gap-3">
              {
                catagories.map(item => <Catagory key={item.id} item={item}></Catagory>)
              }
            </div>
        </div>
    );
};

export default Catagories;