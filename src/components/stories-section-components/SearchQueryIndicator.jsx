"use client";
import { useSearchParams } from "next/navigation";

const SearchQueryIndicator = () => {
  const params = useSearchParams();
  const currentSearchValue = params.get("search");
  console.log("SearchQueryIndicator", currentSearchValue);
  //
  return (
    <div
      className={`text-center lgLap:text-left ${
        currentSearchValue ? "block" : "hidden"
      }`}
    >
      <p>
        Showing Results For:{" "}
        <span className="ml-2">{`"${currentSearchValue}"`}</span>
      </p>
    </div>
  );
};

export default SearchQueryIndicator;
