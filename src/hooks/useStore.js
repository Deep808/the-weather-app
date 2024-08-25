import { create } from "zustand";

const useCityStore = create((set) => {
  return {
    // Default City
    currentCity: "Toronto",

    // Cities array
    cityName: [],
    setCityName: (cityName) => set({ cityName }),

    // Line Chart Data
    graphData: [],
    setGraphData: (graphData) => set({ graphData }),

    //For background Image
    bgImage: "",
    setBgImage: (bgImage) => set({ bgImage }),
  };
});

export { useCityStore };
