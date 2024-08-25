import { useState } from "react";
import Pagination from "./Pagination";

export default function CountryGrid({
  filteredCountryArray,
  setCountrySelected,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationNumbers = [];
  const countriesPerPage = 20;

  let indexOfLastCountry = currentPage * countriesPerPage;
  let indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  let currentCountriesShown = filteredCountryArray.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  for (let i = 1; i <= Math.ceil(filteredCountryArray.length / countriesPerPage); i++) {
    paginationNumbers.push(i);
  }

  function handleClick(country) {
    window.scrollTo(0, 0);
    setCountrySelected(country);
  }

  return (
    <section className="md:w-3/4 lg:w-2/3">
      <table className="block my-7 w-full text-greyLight text-left overflow-x-auto sm:table">
        <thead>
          <tr className="border-greyMid border-b-[1px] h-14 text-greyMid">
            <th className="font-medium">Flag</th>
            <th className="font-medium">Name</th>
            <th className="font-medium">Population</th>
            <th className="font-medium">Area (km&sup2;)</th>
            <th className="xl:table-cell hidden font-medium">Region</th>
          </tr>
        </thead>
        <tbody>
          {currentCountriesShown.map((country) => {
            return (
              <tr
                key={country.name.common}
                className="hover:border-y-[1px] hover:border-blue text-lg transition-transform hover:translate-x-10 hover:cursor-pointer hover:scale-105"
                tabIndex={3}
                onClick={() => handleClick(country)}
                role="button">
                <td className="py-2">
                  <img
                    src={`https://flagcdn.com/h60/${country.cca2.toLowerCase()}.png`}
                    alt={`${country.name.common}'s flag`}
                    className="rounded-lg min-w-fit"/>
                </td>
                <td className="w-min">{country.name.common}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td className="hidden xl:table-cell">{country.region}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        paginationNumbers={paginationNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
