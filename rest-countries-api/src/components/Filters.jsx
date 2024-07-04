

function Filters({setRegion}) {


  return (
    <div className="px-4 py-4 w-1/2 sm:w-auto flex justify-center items-center  ">
<select
  
  className="dark:bg-Dark-Blue-Elements  w-full bg-white dark:text-white p-2 shadow font-nunito-sans font-medium rounded-md"
  onChange={(e) => setRegion(e.target.value)}
>
  <option value="">Select Continent</option>
  <option value="Africa">Africa</option>
  <option value="Asia">Asia</option>
  <option value="Americas"> Americas</option>
  <option value="Oceania">Oceania</option>
  <option value="Europe">Europe</option>
  <option value="Asia">Asia</option>
</select>
</div>

  );
}


export default Filters;
