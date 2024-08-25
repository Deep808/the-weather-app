import axios from "axios";

const fetchData = async (cityInput) => {
  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${cityInput}/EN`,
    headers: {
      "x-rapidapi-key": "0bd3353516mshbbae9479b6e1a16p13c3a3jsn1f57bd8d5ad0",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
