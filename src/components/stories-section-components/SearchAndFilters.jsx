import { SearchInput, Categories } from "./search-and-filters-components";

const SearchAndFilters = () => {
  return (
    <div className="w-full max-w-md mx-auto medTab:max-w-[520px]">

      <SearchInput/>

      <Categories/>

    </div>
  );
};

export default SearchAndFilters;
