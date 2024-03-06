"use client";
import { useSearchParams } from "next/navigation";

const SearchQueryIndicator = () => {
  const params = useSearchParams();
  const currentSearchValue = params.get("search");
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
