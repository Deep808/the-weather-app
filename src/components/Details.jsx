import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import WeatherDetails from "./WeatherDetails";

import { useCityStore } from "../hooks/useStore";
import axios from "axios";

import useGetColor from "../hooks/useGetColor";

const Details = () => {
  const [searched, setSearched] = useState(false);

  const { cityName, setCityName, currentCity, setGraphData, bgImage } =
    useCityStore();

  const { color } = useGetColor(bgImage);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [cityInput, setCityInput] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCurrentData = async () => {
      if (!searched) {
        try {
          const response = await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentCity}?unitGroup=metric&key=${API_KEY}&contentType=json`,
            { signal }
          );

          setCityName([response.data]);
          setGraphData([response.data.days]);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error.message);
          } else {
            console.error("An error occurred:", error);
          }
        }
      }
    };

    getCurrentData();

    // Cleanup function to abort the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  const handleSubmit = async () => {
    try {
      setSearched(true);
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );

      setCityName([response.data]);

      setGraphData([response.data.days]);

      setCityInput("");
    } catch (error) {
      console.error(error);
      alert("Location Invalid, Please Enter a Valid Location!", error);
      setCityInput("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div style={{ borderColor: color }} className="flex items-center border">
        <input
          onKeyDown={handleEnter}
          className="p-4 lg:p-7 text-[0.8em] bg-slate-600 bg-opacity-10 outline-none w-full text-white"
          placeholder="Enter any location..."
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <div
          onClick={handleSubmit}
          className="py-3 px-0 lg:py-6 lg:px-3 cursor-pointer border border-white/50"
          style={{ background: color }}
        >
          <IoIosSearch className="text-white w-6 h-6 lg:w-8 lg:h-8 mx-4 hover:scale-110 transition-all ease-linear" />
        </div>
      </div>

      <div className="p-6 md:pt-[10em] lg:overflow-y-hidden lg:pt-6 pt-[10em]">
        {cityName.map((city, idx) => (
          <WeatherDetails
            key={idx}
            desc={city.description}
            humidity={city.currentConditions.humidity}
            windSpeed={city.currentConditions.windspeed}
            uvidx={city.currentConditions.uvindex}
            visibility={city.currentConditions.visibility}
            sunrise={city.currentConditions.sunrise}
            sunset={city.currentConditions.sunset}
            lat={city.latitude}
            long={city.longitude}
            tz={city.timezone}
          />
        ))}
      </div>
    </>
  );
};

export default Details;
