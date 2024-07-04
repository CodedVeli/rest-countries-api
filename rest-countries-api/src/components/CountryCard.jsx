import { Link } from "react-router-dom"
function CountryCard( {name, population, region, capital, flags}) {
  return (
    <div className=" rounded-lg w-full max-w-[15rem] h-auto shadow-lg cursor-pointer font-nunito-sans  hover:scale-110">
      <Link to={`/country-info/${name.official}`}>
        <img className=" w-full h-[9rem] rounded-tr-lg rounded-tl-lg  font-bold" src={flags.png} alt={name.official}/>
        <div className=" flex flex-col px-4  pb-5 bg-White dark:bg-Dark-Blue-Elements   ">
            <div className=" pt-5 pb-5" >
            <h1 className="   font-bold text-[16px]  w-40 truncate dark:text-White">{name.official}</h1>
            <div >
                <div className="flex flex-row space-x-2"><h1 className="  font-light dark:text-White">Population:</h1> <p className=" text-Dark-Gray dark:text-White">{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-light dark:text-White">Region:</h1> <p className=" text-Dark-Gray dark:text-White">{region}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-light dark:text-White">Capital:</h1><p className=" text-Dark-Gray dark:text-White">{capital ? capital[0] : 'N/A'}</p></div>
            </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default CountryCard