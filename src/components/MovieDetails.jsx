import { Card } from "flowbite-react";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="">

            <span onClick={()=>{navigate('/')}} className=" bg-blue-700 hover:bg-blue-800 rounded  text-center px-2 text-white">Back</span>
     
        </div>
        <Card
          className="max-w-sm"
          imgSrc="https://newshour-classroom-tc.digi-producers.pbs.org/uploads/images/Oppenheimer-Christopher-Nolan-0-1.width-1024_Kh9HV7C.jpg"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetails;
