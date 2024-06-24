import { IoIosSearch } from "react-icons/io";

function Search({setSearchTerm}) {
   
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex p-2 rounded-[0.5rem] bg-white text-Light-Gray space-x-1 w-full max-w-md border focus:outline-Light-Gray shadow-md">
    <IoIosSearch className="text-gray-500 mt-1 size-5"/>
    <input type="text" className="bg-white w-full max-w-md border-0 text-gray-900 focus:ring-Light-Gray focus:outline-none" onChange={handleChange} placeholder="Search for a country..."/>
  </form>
  )
}

export default Search