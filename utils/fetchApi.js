import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "012781eb43mshca7bde609ea7ff3p1531b1jsnb9d440365b1c",
    },
  });

  return data;
};
