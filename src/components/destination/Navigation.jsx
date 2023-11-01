import React from "react";

const Navigation = ({ destinations, mainDestination, setMainDestination }) => {
  return (
    <div className="relative top-20 links nav-links__right flex justify-center space-x-10 items-center uppercase text-sm text-slate-300 h-[75px] lg:top-0 lg:justify-evenly">
      {destinations.map((destination, index) => (
        <p
          key={index}
          className={`${
            destination.name === mainDestination.name
              ? "flex text-white items-center space-x-1 h-full border-b-4 transition ease-in-out lg:space-x-2"
              : ""
          }flex items-center space-x-1 cursor-pointer tracking-[0.2rem] h-full border-b-none transition-all ease-in-out hover:border-b-4 hover:border-white lg:space-x-2`}
          onClick={() => setMainDestination(destinations[index])}
        >
          {destination.name}
        </p>
      ))}
    </div>
  );
};

export default Navigation;
