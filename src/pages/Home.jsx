import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <main className="bg-home-mobile h-full bg-cover relative py-10 px-8 flex justify-center items-center lg:px-0 lg:h-screen md:bg-home-tablet lg:bg-home-desktop">
      <section className="grid grid-cols-1 pt-64 gap-y-24 lg:gap-y-0 lg:pt-0 lg:gap-x-60 lg:grid-cols-2">
        <div className="text px-4 flex flex-col text-center space-y-4 md:px-0 lg:text-justify lg:space-y-6">
          <p className="text-sm text-slate-400 uppercase tracking-[0.2rem] md:text-xl lg:tracking-wide">
            So, you want to travel to
          </p>
          <h1 className="text-xl tracking-widest text-white uppercase relative md:text-[10rem] md:tracking-[1rem] lg:tracking-widest lg:text-9xl lg:-right-10">
            <TypeAnimation
              sequence={["Space", 500, "space", 500, "space", 500]}
              cursor={false}
              repeat={0}
              preRenderFirstString={false}
              speed={{ type: "keyStrokeDelayInMs", value: 800 }}
            />
          </h1>
          <p className="text-center max-w-sm leading-8 text-slate-300 md:max-w-md py-16 md:py-0 lg:max-w-sm lg:text-sm">
            <TypeAnimation
              sequence={[
                "  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this  world experience!",
                3000,
                "  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this  world experience!",
                1000,
                "  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this  world experience!",
                500,
              ]}
              cursor={false}
              repeat={0}
              preRenderFirstString={false}
              speed={{ type: "keyStrokeDelayInMs", value: 10 }}
            />
            {/* Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! */}
          </p>
        </div>
        <div className="explore exp flex justify-center items-center lg:relative lg:top-20">
          <Link to="destination">
            <div className="w-60 h-60 bg-slate-200 rounded-full flex items-center  justify-center cursor-pointer transition-all ease-in-out duration-300 lg:w-52 lg:h-52 hover:bg-slate-300">
              <p className="text-black uppercase tracking-[0.4rem] text-xl ">
                explore
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
