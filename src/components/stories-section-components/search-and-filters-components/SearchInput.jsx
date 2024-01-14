"use client"
import { SearchIcon } from "../../../../public/assets";
import { useState } from "react";

const SearchInput = () => {
  const [searchValue,setSearchValue] = useState("")
  const [isLabelActive, setIsLabelActive] = useState(false);
  //
  const checkSearchValue = () => {
    searchValue.trim().length <= 0 ? setIsLabelActive(false) : setIsLabelActive(true)
  }
  //
  return (
    <div className="w-full flex justify-start items-center bg-darkGrey px-4 py-3 rounded-md">
      <SearchIcon className="flex-none" />
      <div className="relative w-full">
        <label htmlFor="search-input" className={`absolute left-3 pointer-events-none ${isLabelActive && "opacity-0"}`}>
          Search
        </label>
        <input
          id="search-input"
          name="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-darkGrey w-full px-3 outline-none"
          onBlur={() => checkSearchValue()}
          onFocus={() => setIsLabelActive(true)}
        />
      </div>
    </div>
  );
}

export default SearchInput