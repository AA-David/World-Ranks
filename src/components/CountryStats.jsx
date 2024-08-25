import { useEffect, useState } from "react";

export default function CountryStats({ countrySelected, setCountrySelected }) {
  const [neighboursURL, setNeighboursURL] = useState("");
  const [neighboursData, setNeighboursData] = useState([]);

  // Converts bordering countries' cca3's into suitable format for link
  useEffect(() => {
    if (countrySelected) {
      setNeighboursURL(countrySelected.borders?.join(",").toLowerCase());
    }
  }, [countrySelected]);

  useEffect(() => {
    if (neighboursURL) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${neighboursURL?.replace(/["]+/g,"")}`)
        .then((response) => response.json())
        .then((data) => {
          setNeighboursData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setNeighboursData([]);
    }
  }, [neighboursURL]);

  function handleClick(borderingCountry) {
    window.scrollTo(0, 0);
    setCountrySelected(borderingCountry);
  }

  return (
    <div
      className={`border-grey border-y-[1px] md:border-[1px] bg-blackLight md:mx-auto md:-mt-14 mb-16 pb-5 md:rounded-2xl md:max-w-[60%] lg:max-w-[45%] text-greyLight ${
        countrySelected ? "" : "hidden"}`}>
      <section>
        <div className="flex flex-col items-center">
          <img
            src={`https://flagcdn.com/h240/${countrySelected?.cca2.toLowerCase()}.png`}
            alt={`${countrySelected?.name.common}'s flag`}
            className="-mt-10 mb-7 rounded-3xl max-w-[90%]"/>
          <p className="mb-2 font-semibold text-4xl text-center">
            {countrySelected?.name.common}
          </p>
          <p>{countrySelected?.name.official}</p>
        </div>

        <div className="flex xl.5:flex-row flex-col xl.5:justify-center xl.5:space-x-5 space-y-5 xl.5:space-y-0 mt-7 mb-7 px-2">
          <div className="flex space-x-5 bg-grey px-4 py-3 rounded-xl w-fit leading-8">
            <p className="pr-5 border-r-[1px] border-blackLight h-8">
              Population
            </p>
            <p>{countrySelected?.population.toLocaleString()}</p>
          </div>
          <div className="flex space-x-5 bg-grey px-4 py-3 rounded-xl w-fit leading-8">
            <p className="pr-5 border-r-[1px] border-blackLight h-8">
              Area (km&sup2;)
            </p>
            <p>{countrySelected?.area.toLocaleString()}</p>
          </div>
        </div>
      </section>

      <section className="mb-7">
        <div className="flex justify-between border-grey border-y-[1px] px-5 py-7">
          <p className="text-greyMid">Captial</p>
          <p>{countrySelected?.capital?.join(", ")}</p>
        </div>

        <div className="flex justify-between border-grey px-5 py-7 border-b-[1px]">
          <p className="text-greyMid">Subregion</p>
          <p>{countrySelected?.subregion}</p>
        </div>

        <div className="flex justify-between border-grey px-5 py-7 border-b-[1px]">
          <p className="text-greyMid">Language</p>
          <p>
            {countrySelected
              ? Object.values(countrySelected.languages).join(", ")
              : ""}
          </p>
        </div>

        <div className="flex justify-between border-grey px-5 py-7 border-b-[1px]">
          <p className="text-greyMid">Currencies</p>
          <p>
            {countrySelected
              ? Object.values(countrySelected.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : ""}
          </p>
        </div>

        <div className="flex justify-between border-grey px-5 py-7 border-b-[1px]">
          <p className="text-greyMid">Continents</p>
          <p>{countrySelected?.continents.join(", ")}</p>
        </div>
      </section>

      <section className="px-4">
        <p className="mb-4 text-greyMid">Neighbouring Countries</p>

        {neighboursData.length !== 0 ? (
          <div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] mb-7">
            {neighboursData?.map((borderingCountry) => {
              return (
                <div
                  key={borderingCountry.name.common}
                  tabIndex="0"
                  className="hover:bg-grey px-4 py-3 rounded-lg transition-colors duration-[50ms] hover:cursor-pointer"
                  onClick={() => handleClick(borderingCountry)}
                >
                  <img
                    src={`https://flagcdn.com/w160/${borderingCountry?.cca2.toLowerCase()}.png`}
                    alt={`${borderingCountry?.name.common}'s flag`}
                    className="mb-2 rounded-lg w-full max-h-[70px]"/>
                  <p className="w-fit text-sm self-start">
                    {borderingCountry.name.common}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mb-7 font-semibold text-greyMid text-xl">
            No Bordering Countries
          </p>
        )}
      </section>

      <button onClick={() => setCountrySelected(undefined)}
              className="flex border-[1px] bg-grey ml-4 px-4 py-2 border-transparent hover:border-blue rounded-lg transition-all duration-[50ms]">
        Back
      </button>
    </div>
  );
}
