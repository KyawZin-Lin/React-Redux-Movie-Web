import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const Movie = () => {
  return (
  <div className="container mx-auto mt-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
    <Link to="movies/1">
    <div className="max-w-sm">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://newshour-classroom-tc.digi-producers.pbs.org/uploads/images/Oppenheimer-Christopher-Nolan-0-1.width-1024_Kh9HV7C.jpg"
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
      </Link>
    </div>
  </div>
  );
};

export default Movie;
