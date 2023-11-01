import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { crew } from "../../utils/data";

const Slide = () => {
  const [currentCrewIndex, setCurrentCrewIndex] = useState(3);
  const [elKey, setElKey] = useState(0);

  const showCrew = () => {
    const isLastSlide = currentCrewIndex === crew.length - 1;

    const newIndex = isLastSlide ? 0 : currentCrewIndex + 1;

    setCurrentCrewIndex(newIndex);
  };

  useEffect(() => {
    const autoShowInterval = setInterval(() => {
      showCrew();
    }, 5000);

    return () => clearInterval(autoShowInterval);
  }, [currentCrewIndex]);

  useEffect(() => {
    //  using this to track rendering on every change
    setElKey(elKey + 1);
  }, [currentCrewIndex]);
  return (
    <section className="carousel__content relative px-10 lg:px-0 lg:-left-8">
      <div className="wrapper flex flex-col justify-evenly space-y-20 lg:space-y-0 lg:flex-row">
        <div
          className="wrapper-content flex flex-col space-y-10 transition duration-300"
          key={elKey}
        >
          {/* crew memeber details */}
          <div className="flex flex-col space-y-8 justify-center items-center  lg:items-start">
            <p className="role uppercase text-white/50 text-2xl">
              {crew[currentCrewIndex].role}
            </p>
            <h1 className="relative name pt-2 pb-4 text-white relative left-3 text-4xl uppercase font-bold">
              {crew[currentCrewIndex].name}
            </h1>
            <p className="bio max-w-sm md:max-w-md text-slate-300">
              {crew[currentCrewIndex].bio}
            </p>
          </div>

          {/* crew slide or index indicator, that dot that shows the positions of the crew members in this context sha */}
          <section className="flex items-center justify-center  lg:justify-start">
            {crew.map((c, index) => {
              return (
                <div
                key={index}
                  className={`${
                    index === currentCrewIndex ? "text-white text-2xl" : ""
                  } text-gray-700 text-md cursor-pointer`}
                  onClick={() => setCurrentCrewIndex(index)}
                >
                  <GoDotFill />
                </div>
              );
            })}
          </section>
        </div>
        <div className="flex justify-center items-center wrapper-img relative lg:-top-8">
          <img
            src={crew[currentCrewIndex].images.png}
            alt="placeholder"
            className="w-5/12 h-5/12 lg:w-9/12  lg:h-9/12"
          />
        </div>
      </div>
    </section>
  );
};

export default Slide;
