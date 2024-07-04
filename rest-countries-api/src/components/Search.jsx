import { IoIosSearch } from "react-icons/io";

function Search({ setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className="flex gap-2 items-center  dark:bg-Dark-Blue-Elements dark:text-white rounded-lg  px-4 w-full sm:w-1/3   shadow-md"    >
      <IoIosSearch className="text-gray-500 mt-1 size-5" />
      <input
          className="flex-1 p font-nunito-sans border-none outline-none bg-transparent dark:bg-Dark-Blue-Elements"
          placeholder="Search for a country"
          onChange={handleChange}
        />
    </div>
  );
}

export default Search;
