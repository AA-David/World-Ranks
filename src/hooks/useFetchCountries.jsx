import { useEffect, useState } from "react";

// Fetches all the countries at the beginning from an API
export default function useFetchCountries() {
  const [countryArray, setCountryArray] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryArray([...data].sort((a, b) => b.population - a.population));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { countryArray };
}
