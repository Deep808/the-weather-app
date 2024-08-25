import "./App.css";
import Details from "./components/Details";
import MainDetails from "./components/MainDetails";
import useGetColor from "./hooks/useGetColor";

import { useCityStore } from "./hooks/useStore";

function App() {
  const { cityName, bgImage } = useCityStore();

  const { color } = useGetColor(bgImage);

  return (
    <div style={{ background: color }} className="h-[100vh] lg:flex">
      <div className="relative h-screen lg:h-[80vh] my-auto w-full ">
        <img
          className="absolute z-10 top-1/2 w-[100vw] left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen lg:w-[70%] lg:h-[80vh] object-cover shadow-lg"
          alt="bg-poster"
          src={bgImage}
        />

        {cityName.map((c, idx) => (
          <MainDetails
            key={idx}
            date={c.days[0].datetime}
            temp={c.currentConditions.temp}
            name={c.address}
            icon={c.currentConditions.icon}
            desc={c.description}
            condition={c.currentConditions.conditions}
          />
        ))}
        <div className="relative flex flex-col w-[90%] lg:w-[70%] mx-auto">
          <p className="text-white font-bold absolute z-10 py-[2em] lg:px-[3em] lg:py-[2em]">
            the weather.
          </p>

          <div className="absolute z-10 right-0 left-0 md:left-0 lg:left-auto top-24 lg:right-0 2xl:right-0 lg:top-0 lg:w-[50%] 2xl:w-[40%] lg:h-[80vh] bg-transparent backdrop-brightness-75 backdrop-blur-md shadow-lg ">
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
