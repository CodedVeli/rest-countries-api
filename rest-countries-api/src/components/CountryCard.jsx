import { Link } from "react-router-dom"
function CountryCard( {name, population, region, capital, flags}) {
  return (
    <div className=" rounded-lg w-full max-w-[15rem] h-auto shadow-lg cursor-pointer">
      <Link to={`/country-info/${name.official}`}>
        <img className=" max-w-[15rem]  rounded-tr-lg rounded-tl-lg " src={flags.png} alt={name.official}/>
        <div className=" flex flex-col items-center justify-center   ">
            <div className=" pt-5 pb-5" >
            <h1 className=" font-bold text-xl ">{name.official}</h1>
            <div >
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Population:</h1> <p className=" font-normal">{population}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Region:</h1> <p className=" font-normal">{region}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Capital:</h1><p className=" font-normal">{capital ? capital[0] : 'N/A'}</p></div>
            </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default CountryCard