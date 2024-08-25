import { useEffect, useState } from "react";
import useFetchCountries from "./useFetchCountries";

// Components that should affect what countries are being displayed use this hook to change the respective states.
// After the hook detects a state change, it re-renders the countries and use the states as criteria in order to be re-rendered.
export default function useFilterCountryArray() {
  // Filters
  const [selectedSorting, setSelectedSorting] = useState("population");
  const [selectedRegions, setSelectedRegions] = useState([
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const [unMember, setUnMember] = useState(true);
  const [independent, setIndependent] = useState(true);

  // Search
  const [searchedInput, setSearchedInput] = useState("");
  const [filteredCountryArray, setFilteredCountryArray] = useState([]);

  const { countryArray } = useFetchCountries();

  // Whenever the filters/search change, update the filtered rray
  useEffect(() => {
    let newSearchedCountryArray = countryArray.filter((country) => {
      if (
        country.name.common
          .toLowerCase()
          .includes(searchedInput.toLowerCase()) &&
        selectedRegions.includes(country.region) &&
        country.unMember === unMember &&
        country.independent === independent
      ) {
        return true;
      }
    });

    setFilteredCountryArray(newSearchedCountryArray);
  }, [searchedInput, selectedRegions, unMember, independent, countryArray]);

  // Sorting options
  useEffect(() => {
    let sortedArray;

    switch (selectedSorting) {
      case "population":
        sortedArray = [...filteredCountryArray].sort(
          (a, b) => b.population - a.population
        );
        setFilteredCountryArray(sortedArray);
        break;
      case "area":
        sortedArray = [...filteredCountryArray].sort((a, b) => b.area - a.area);
        setFilteredCountryArray(sortedArray);
        break;
      case "alphabetical":
        sortedArray = [...filteredCountryArray].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setFilteredCountryArray(sortedArray);
        break;
    }
  }, [selectedSorting]);

  // Region chips toggling
  function editRegions(selectedRegion) {
    if (selectedRegions.includes(selectedRegion)) {
      setSelectedRegions((prevRegions) =>
        prevRegions.filter((region) => region !== selectedRegion));
    } else {
      setSelectedRegions((prevRegions) => [...prevRegions, selectedRegion]);
    }
  }
 
  return {
    countryArray,
    filteredCountryArray,
    setFilteredCountryArray,
    setSearchedInput,
    selectedSorting,
    setSelectedSorting,
    selectedRegions,
    setSelectedRegions,
    setIndependent,
    setUnMember,
    editRegions,
  };
}
