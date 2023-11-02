import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { technology } from "../utils/data";

const Technology = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [mainTechnology, setMainTechnology] = useState(
    technology[currentTechIndex]
  );
  const [elKey, setElKey] = useState(0);

  useEffect(() => {
    // Using this to track rendering on every change
    setElKey(elKey + 1);
  }, [mainTechnology]);

  const handleNavigationClick = (index) => {
    setCurrentTechIndex(index);
    setMainTechnology(technology[index]);
  };

  return (
    <div className="h-full bg-technology-mobile bg-cover relative py-10 px-8 md:bg-technology-tablet md:px-0 lg:h-screen lg:overflow-hidden lg:bg-technology-desktop">
      {/* Page header */}
      <PageTitle id={"03"} text={"Space launch 101"} />

      {/* Page content */}
      <section className="w-full relative -top-28">
        <div className="flex flex-col justify-evenly flex-col-reverse lg:flex-row">
          {/* Technology details and navigation */}
          <section
            key={elKey}
            className="flex flex-col space-x-20  items-center justify-center lg:flex-row lg:space-y-0"
          >
            {/* Navigation */}
            <div className="numbering">
              <div className="flex flex-row my-20 space-x-10 justify-center items-center  lg:space-x-0 lg:flex-col lg:space-y-6  lg:my-0">
                {technology.map((tech, index) => (
                  <div
                    className={`${
                      index === currentTechIndex
                        ? "bg-white text-black"
                        : "text-white"
                    } w-16 h-16 rounded-full flex border border-slate-700 items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-slate-300 hover:text-black`}
                    key={index}
                    onClick={() => handleNavigationClick(index)}
                  >
                    <p className="text-xl ">{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <section className="details flex flex-col space-y-4">
              <h1 className="relative text-slate-300 text-md uppercase lg:-top-2">
                the terminology...
              </h1>
              <h1 className="relative text-fade text-4xl text-white uppercase lg:-top-2">
                {mainTechnology.name}
              </h1>

              {/* Technology description */}
              <main className="details ">
                <p className="desc text-fade max-w-lg  text-slate-300 lg:max-w-sm">
                  {mainTechnology.description}
                </p>
              </main>
            </section>
          </section>

          {/* Display technology image */}
          <div className="img relative top-10 flex items-center justify-center md:px-0">
            <img
              key={elKey}
              src={mainTechnology.images.portrait}
              alt={mainTechnology.name}
              className="relative text-fade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
