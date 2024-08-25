import React from "react";

const useGetDay = (date) => {
  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = new Date(date);
  let newDay = weekday[day.getDay()];

  return newDay;
};

export default useGetDay;
