import React, { useEffect } from "react";
import { FaSun } from "react-icons/fa6";
import useGetDay from "../hooks/useGetDay";
import { weatherIcons } from "../weatherData";
import { useCityStore } from "../hooks/useStore";

const MainDetails = ({ name, temp, date, icon, condition }) => {
  const { setBgImage } = useCityStore();

  const day = useGetDay(date);

  const newName = name[0].toUpperCase() + name.slice(1);

  const selectedIcon = weatherIcons.find((wIcon) => wIcon.name === icon)
    ?.icon || <FaSun className="w-6 h-6" />;

  const selectedImage = weatherIcons.find(
    (wIcon) => wIcon.name === icon
  )?.image;

  useEffect(() => {
    setBgImage(selectedImage);
  }, [selectedImage, setBgImage]);

  return (
    <div className="absolute h-[15vh] lg:h-auto mx-auto w-[80%] lg:max-w-[60%] left-1/2 -translate-x-1/2 lg:left-[48%] top-[11em] lg:top-auto z-30 transform lg:bottom-4 text-white flex flex-col leading-[4em]">
      <h1 className="text-2xl lg:text-[6em] mx-auto lg:mx-0 font-extrabold lg:mb-2">
        {temp}&deg;<span className="lg:text-[0.6em]"> c</span>
      </h1>
      <div className="flex justify-between md:min-w-[60%] md:mx-auto lg:mx-0 lg:justify-start items-center mt-4">
        <div className="flex flex-col  leading-7 lg:leading-[4em]">
          <p className="text-[1.5em] lg:text-[3em] ">{newName}</p>
          <p className="lg:px-1 px-0">
            {date} , {day}
          </p>
        </div>
        <div className="flex justify-center items-center leading-6 lg:leading-[4] flex-col lg:items-center lg:mx-6">
          <span className="text-[1.5em] lg:text-[4em]">{selectedIcon}</span>
          <p className="text-[.8em] text-center">{condition}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
