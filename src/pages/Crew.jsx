import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Slide from "../components/crew/Slide";

const Crew = () => {


  return (
    <div className="h-full bg-crew-mobile bg-cover relative py-10  md:bg-crew-tablet lg:h-screen lg:overflow-hidden lg:bg-crew-desktop">
      {/*page header */}
      <PageTitle id={"02"} text={"Meet your crew"} />

      {/* crew slider */}
     <Slide/>
    </div>
  );
};

export default Crew;
