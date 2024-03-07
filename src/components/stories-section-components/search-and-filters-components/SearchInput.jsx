"use client";
import { SearchIcon } from "../../../../public/assets";
import { useEffect, useState } from "react";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams()
  const { createQueryString, router } = useCreateQueryString();
  const [searchValue, setSearchValue] = useState("");
  const [isLabelActive, setIsLabelActive] = useState(false);
  //
  const checkSearchValue = () => {
    searchValue.trim().length <= 0
      ? setIsLabelActive(false)
      : setIsLabelActive(true);
  };
  //
  const handleSearchParams = () => {
    const trimmedSearchValue = searchValue.trim()
    router.push(
      `/?${createQueryString("search", trimmedSearchValue)}#posts-container`
    );
  };
  //
  useEffect(() => {
    if (searchParams.get("search")){
      setSearchValue(searchParams.get("search"));
      setIsLabelActive(true)
      return
    }
    setSearchValue("");
  }, [])
  //
  return (
    <div className="w-full flex justify-start items-center bg-darkGrey rounded-md">
      <div className="p-3 hover:cursor-pointer" onClick={handleSearchParams}>
        <SearchIcon className="flex-none" />
      </div>
      <div className="relative w-full pr-3 py-3">
        <label
          htmlFor="search-input"
          className={`absolute left-3 pointer-events-none ${
            isLabelActive && "opacity-0"
          }`}
        >
          Search
        </label>
        <input
          id="search-input"
          name="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-darkGrey w-full pl-3 outline-none"
          onBlur={() => checkSearchValue()}
          onFocus={() => setIsLabelActive(true)}
          onKeyDown={(e) => e.key === "Enter" ? handleSearchParams() : null}
        />
      </div>
    </div>
  );
};

export default SearchInput;
