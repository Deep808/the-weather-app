import React from "react";
import WeatherLineChart from "./WeatherLineChart";
import BottomDetails from "./BottomDetails";
import { useCityStore } from "../hooks/useStore";

const WeatherDetails = ({
  desc,
  humidity,
  windSpeed,
  uvidx,
  visibility,
  lat,
  long,
  sunrise,
  sunset,
  tz,
}) => {
  const { graphData } = useCityStore();

  const weatherData = [
    { title: "Humidity", value: humidity },
    { title: "Wind Speed", value: windSpeed },
    { title: "UV Index", value: uvidx },
    { title: "Visibility", value: visibility },
  ];

  return (
    <div className="space-y-4 md:max-w-[50%] lg:max-w-full md:mx-auto">
      {graphData.map((data, idx) => (
        <WeatherLineChart key={idx} data={data} />
      ))}

      <div className="flex text-sm items-center justify-center border p-2 max-w-[100%] mx-auto border-white/70">
        {weatherData.map((data, idx) => (
          <div
            key={idx}
            className="flex justify-around text-[0.8em] px-2 text-center"
          >
            <div className="text-white flex flex-col items-center">
              <p>{data.title}</p>
              <p className=" text-white/70 ">{data.value}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-white text-[0.8em]">~ {desc}</p>

      <BottomDetails
        tz={tz}
        lat={lat}
        long={long}
        sunrise={sunrise}
        sunset={sunset}
      />
    </div>
  );
};

export default WeatherDetails;
