import { useState } from "react";

export default function usePagination(filteredCountryArray) {
    const [currentPage, setCurrentPage] = useState(1);
    const paginationNumbers = [];
    const countriesPerPage = 20;

    let indexOfLastCountry = currentPage * countriesPerPage;
    let indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currentCountriesShown = filteredCountryArray.slice(indexOfFirstCountry, indexOfLastCountry);

    for (let i = 1; i <= Math.ceil(filteredCountryArray.length / countriesPerPage); i++) {
        paginationNumbers.push(i);
    }

    return {
        currentCountriesShown,
        paginationNumbers,
        currentPage,
        setCurrentPage
    }
}