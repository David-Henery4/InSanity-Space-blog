import { SearchInput, Categories } from "./search-and-filters-components";

const SearchAndFilters = () => {
  return (
    <div className="w-full max-w-md mx-auto medTab:max-w-[520px] lgLap:col-start-9 lgLap:col-end-13">

      <SearchInput/>

      <Categories/>

    </div>
  );
};

export default SearchAndFilters;
