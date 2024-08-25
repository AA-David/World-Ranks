import { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import CountryStats from "./components/CountryStats";

export default function App() {
  const [countrySelected, setCountrySelected] = useState(undefined);

  return (
    <>
      <Header />

      <Content
        countrySelected={countrySelected}
        setCountrySelected={setCountrySelected}
      />
      <CountryStats
        countrySelected={countrySelected}
        setCountrySelected={setCountrySelected}
      />
    </>
  );
}
