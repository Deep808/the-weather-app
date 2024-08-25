import React from "react";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";

const BottomDetails = ({ lat, long, sunrise, sunset, tz }) => {
  return (
    <div className="text-white lg:text-sm md:space-y-4">
      <div className="flex lg:max-w-[80%] text-[0.8em] mx-auto justify-between">
        <div className="flex flex-col justify-center items-center space-y-2">
          <LuSunrise className="w-6 h-6" />
          <p className="text-white/70">{sunrise}</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <LuSunset className="w-6 h-6" />
          <p className="text-white/70">{sunset}</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <TbWorldLatitude className="w-6 h-6" />
          <p className="text-white/70">{lat}</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <TbWorldLongitude className="w-6 h-6" />
          <p className="text-white/70">{long}</p>
        </div>
      </div>

      <div className="text-center mt-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-5 text-[0.8em]">
        <h1>
          Timezone - <span className="text-white/70 ">{tz}</span>
        </h1>
      </div>
    </div>
  );
};

export default BottomDetails;
