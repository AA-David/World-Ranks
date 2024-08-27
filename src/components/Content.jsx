import Filter from "./Filter";
import CountryGrid from "./CountryGrid";
import Search from "./Search";

import useFilterCountryArray from "../hooks/useFilterCountryArray";
import Pagination from "./Pagination";

export default function Content({ countrySelected, setCountrySelected }) {
  const {
    filteredCountryArray,
    setFilteredCountryArray,
    setSearchedInput,
    setSelectedSorting,
    setIndependent,
    setUnMember,
    editRegions,
  } = useFilterCountryArray();

  return (
    <>
      <main
        className={`border-grey border-y-[1px] md:border-[1px] bg-blackLight md:mx-5 xl:mx-28 md:-mt-14 mb-16 p-10 md:rounded-2xl ${
          countrySelected ? "hidden" : ""}`}>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-greyMid text-lg">
            {`Found ${filteredCountryArray?.length} countries`}
          </p>

          <Search setSearchedInput={setSearchedInput} />
        </div>

        <div className="md:flex gap-10">
          <Filter
            setSelectedSorting={setSelectedSorting}
            setUnMember={setUnMember}
            setIndependent={setIndependent}
            setFilteredCountryArray={setFilteredCountryArray}
            editRegions={editRegions}
          />
          <CountryGrid
            filteredCountryArray={filteredCountryArray}
            setCountrySelected={setCountrySelected}
          />
        </div>
      </main>
    </>
  );
}
