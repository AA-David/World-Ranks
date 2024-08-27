import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";

export default function CountryGrid({
  filteredCountryArray,
  setCountrySelected,
}) {
  const { currentCountriesShown, paginationNumbers, currentPage, setCurrentPage } = usePagination(filteredCountryArray);

  function handleClick(country) {
    window.scrollTo(0, 0);
    setCountrySelected(country);
  }

  return (
    <div className="basis-full">
      <section className="xs:overflow-visible overflow-x-scroll">
        <table className="border-collapse mt-7 mb-1 w-full min-w-[500px] text-greyLight text-left table">
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
                  className="hover:border-y-[1px] hover:border-blue text-lg transition-transform lg:hover:translate-x-10 hover:cursor-pointer lg:hover:scale-105"
                  tabIndex={3}
                  onClick={() => handleClick(country)}
                  role="button">
                    <td className="py-2 min-w-[120px]">
                    <img
                      src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
                      width="120px"
                      alt={`${country.name.common}'s flag`}
                      className="rounded-lg"/>
                  </td>
                  <td>{country.name.common}</td>
                  <td>{country.population.toLocaleString()}</td>
                  <td>{country.area.toLocaleString()}</td>
                  <td className="hidden xl:table-cell">{country.region}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <Pagination
        paginationNumbers={paginationNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
