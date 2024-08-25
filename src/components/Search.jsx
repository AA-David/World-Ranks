import { useEffect, useState } from "react";
import searchIcon from "../images/Search.svg";

export default function Search({ setSearchedInput }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchedInput(input);
  }

  // Show all countries when search is empty without submitting form
  useEffect(() => {
    if (input.length === 0) {
      setSearchedInput("");
    }
  }, [input]);

  return (
    <form
      className="flex items-center bg-grey py-3 pr-1 rounded-lg md:w-1/3 h-12"
      onSubmit={(e) => handleSubmit(e)}>
      <button
        className="flex justify-center items-center w-12 h-12 hover:cursor-pointer"
        type="submit"
        tabIndex="1">
        <img src={searchIcon} alt="Search Icon" className="w-7"/>
      </button>

      <input
        className="bg-transparent pl-1 border-none rounded-l-none rounded-md w-full text-greyLight placeholder:text-[0.9375rem] placeholder:text-greyMid"
        type="search"
        placeholder="Search by Name"
        onChange={(e) => setInput(e.target.value)}/>
    </form>
  );
}
