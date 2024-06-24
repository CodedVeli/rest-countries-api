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
    <section className="bg-Light-Gray h-screen ">
     <div className="mt-24 pl-10 pr-10">
     <button onClick={goBack} className="   flex flex-row p-2 text-Dark-Blue shadow-lg w-28  space-x-2  mb-5 ">
        <IoIosArrowRoundBack className=" text-Dark-Blue text-2xl " />{" "}
        <p className="text-Dark-Blue">Back</p>
      </button>
      <div className=" flex lg:flex-row md:flex-row flex-col   lg:justify-evenly ">
        <img className=" w-full max-w-sm" src={searchedCountry.flags.png} alt={searchedCountry.flags.alt}/>
        <div>
            <div className="  pt-5 pb-5 ">
            <h1 className=" font-bold text-xl ">{id}</h1>
           <div className=" flex lg:flex-row md:flex-row flex-col gap-5  ">
           <div className="  pt-5 pb-5">
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Native Name:</h1> <p className=" font-normal  break-all">  {Object.values(searchedCountry.name.nativeName)[0].official}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Population:</h1> <p className=" font-normal">{searchedCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Region:</h1> <p className=" font-normal">{searchedCountry.region}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Sub Region:</h1> <p className=" font-normal">{searchedCountry.subregion}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Capital:</h1> <p className=" font-normal">{searchedCountry.capital}</p></div>
            </div>
            <div >
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Top Level Domain:</h1> <p className=" font-normal">{searchedCountry.tld[0]}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Currencies:</h1> <p className=" font-normal">   {Object.values(searchedCountry.currencies)[0].name}</p></div>
                <div className="flex flex-row space-x-2"><h1 className="  font-medium">Languages:</h1> <p className=" font-normal">{searchedCountry.languages.isl} {Object.values(searchedCountry.languages)[0]}</p></div>               

            </div>
           </div>
           <div className=" flex lg:flex-row md:flex-row flex-col space-x-2   ">
           <label className=" text-Dark-Blue font-bold mt-2"> Border Countries:</label>
           {dataRegion.slice(0, 3).map((country) => (
  <div key={country.name.common} className="flex flex-row space-x-5">
    <Link to={`/country-info/${country.name.common}`}>
    <div className="flex flex-row p-2 text-Dark-Blue shadow-lg w-full max-w-24">{country.name.common}</div>
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
