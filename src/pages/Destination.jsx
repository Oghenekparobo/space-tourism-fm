import React, { useEffect, useState } from "react";
import { destinations } from "../utils/data";


import PageTitle from "../components/PageTitle";
import Navigation from "../components/destination/Navigation";

const Destination = () => {
  const [mainDestination, setMainDestination] = useState(destinations[1]);

  const [elKey, setElKey] = useState(0);

  useEffect(() => {
    //  using this to track rendering of the destination images on every change
    setElKey(elKey + 1);
  }, [mainDestination]);

  return (
    <div className="bg-destination-mobile h-full bg-cover px-6 relative py-10 overflow-hidden  md:bg-destination-tablet lg:px-0 lg:h-screen lg:bg-destination-desktop">
      {/*page header */}
      <PageTitle id={"01"} text={"pick your destination"} />

      {/* page content */}
      <section className="w-full relative -top-28">
        <div className="flex flex-col justify-around lg:flex-row">
          {/* display planet image */}
          <div className="img relative top-10 flex items-center justify-center px-8 md:px-0 ">
            <img
              key={elKey}
              src={mainDestination.images.png}
              alt={mainDestination.name}
              className="relative planet-img"
            />
          </div>

          {/* planet details and navigation */}
          <section className="flex flex-col items-center justify-center space-y-8 lg:space-y-8 lg:items-start lg:justify-start">
            {/* navigation */}
            <nav className="navigation">
              {/* planet navigation */}
              <Navigation
                destinations={destinations}
                mainDestination={mainDestination}
                setMainDestination={setMainDestination}
              />
            </nav>

            {/* planet name*/}

            <h1
              key={elKey}
              className="relative name text-6xl text-white uppercase py-20 px-4 md:text-8xl md:px-0 lg:py-0"
            >
              {mainDestination.name}
            </h1>

            {/* planet details */}
            <main className="details px-8 lg:px-0">
              <p className="desc max-w-md text-slate-300 lg:max-w-sm">
                {mainDestination.description}
              </p>
            </main>

            {/* horizontal line */}
            <div className="relative px-10  w-full lg:px-0">
              <div className="h-0.5 bg-white bg-opacity-10 backdrop-blur-md" />
            </div>

            {/* distance - travels */}
            <div className="flex justify-around w-full lg:space-x-20">
              <section className="distance flex flex-col">
                <p className="text-slate-300 uppercase text-sm">
                  Avg. distance
                </p>
                <p className="text-white uppercase text-xl">
                  {mainDestination.distance}
                </p>
              </section>
              <section className="travels">
                <p className="text-slate-300 uppercase text-sm">
                  Est. travel time
                </p>
                <p className="text-white uppercase text-xl">
                  {mainDestination.travel}
                </p>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Destination;
