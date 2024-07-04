import { useParams, useNavigate  } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useGetCountryByNameQuery } from "../rtk/apis/CountryApi";
import { useGetCountryByRegionQuery } from "../rtk/apis/CountryApi";
import { Link   } from "react-router-dom";

function CountryInfo() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { data = [], error, isLoading } = useGetCountryByNameQuery(id);
  const { data: dataRegion = [], errorRegion, isLoadingRegion } = useGetCountryByRegionQuery(data[0]?.region);
  const goBack = () => {
    navigate(-1);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const searchedCountry = data[0];
  if (isLoadingRegion) return <div>Loading...</div>;
  if (errorRegion) return <div>Error: {errorRegion.message}</div>;
    return (
    <section className="bg-Light-Gray h-screen  dark:bg-Very-Bark-Blue-bg ">
     <div className="pt-24 pl-10 pr-10">
     <button onClick={goBack} className=" dark:bg-Dark-Blue-Elements bg-White  flex flex-row p-2 text-Dark-Blue shadow-lg w-28  space-x-2  mb-5 ">
        <IoIosArrowRoundBack className=" text-Dark-Blue text-2xl dark:text-Light-Gray " />{" "}
        <p className="text-Dark-Blue font-nunito-sans dark:text-Light-Gray">Back</p>
      </button>
      <div className="  flex lg:flex-row md:flex-row flex-col   lg:justify-evenly font-nunito-sans pt-10 ">
        <div className=" flex items-center justify-center  dark:bg-Dark-Blue-Elements/20 pr-5 pl-5  "><img className="  min-w-sm" src={searchedCountry.flags.png} alt={searchedCountry.flags.alt}/></div>
        <div>
            <div className="  pt-5 pb-5 ">
            <h1 className=" font-bold break-words w-[20rem]   lg:text-2xl text-xl dark:text-White">{id}</h1>
           <div className=" flex lg:flex-row md:flex-row flex-col gap-5  ">
           <div className="  pt-5 pb-5">
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White ">Native Name:</h1> <p className=" text-Dark-Blue dark:text-gray-300 font-light  break-all w-[20rem]">  {Object.values(searchedCountry.name.nativeName)[0].official}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Population:</h1> <p className=" text-Dark-Blue font-light dark:text-gray-300">{searchedCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold dark:text-White">Region:</h1> <p className=" text-Dark-Blue font-light dark:text-gray-300">{searchedCountry.region}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Sub Region:</h1> <p className=" text-Dark-Blue font-light dark:text-gray-300">{searchedCountry.subregion}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Capital:</h1> <p className=" text-Dark-Blue font-light dark:text-gray-300">{searchedCountry.capital}</p></div>
            </div>
            <div >
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Top Level Domain:</h1> <p className=" font-light text-Dark-Blue dark:text-gray-300">{searchedCountry.tld[0]}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Currencies:</h1> <p className=" font-light text-Dark-Blue dark:text-gray-300">   {Object.values(searchedCountry.currencies)[0].name}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-semibold  dark:text-White">Languages:</h1> <p className=" font-light text-Dark-Blue dark:text-gray-300">{searchedCountry.languages.isl} {Object.values(searchedCountry.languages)[0]}</p></div>               

            </div>
           </div>
           <div className=" flex lg:flex-row md:flex-row flex-col space-x-2   ">
           <label className=" text-Dark-Blue font-bold mt-2   dark:text-White"> Border Countries:</label>
           {dataRegion.slice(0, 3).map((country) => (
  <div key={country.name.common} className="flex flex-row space-x-5">
    <Link to={`/country-info/${country.name.common}`}>
    <div className="flex flex-row p-2 text-Dark-Blue break-keep shadow-lg w-full dark:text-Light-Gray dark:bg-Dark-Blue-Elements ">{country.name.common}</div>
    </Link>
  </div>
))}
           
           </div>
            </div>
        </div>
      </div>
     </div>
    </section>
  );
}

export default CountryInfo;
