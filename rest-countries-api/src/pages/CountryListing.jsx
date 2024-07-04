/* eslint-disable react/prop-types */
import CountryCard from '../components/CountryCard'
import { useGetAllCountriesQuery } from '../rtk/apis/CountryApi'
import Skeleton from '../components/Skeleton'
import { useGetCountryByRegionQuery } from '../rtk/apis/CountryApi'
function CountryListing({searchTerm,region}) {
  const { data = [], error, isLoading } = useGetAllCountriesQuery()
  const { data: dataRegion = [], isLoadingRegion, errorRegion} = useGetCountryByRegionQuery(region);

  let filteredCountries = data;
  if (searchTerm ) {
    filteredCountries = filteredCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (region) {
    filteredCountries = filteredCountries.filter(country => country.region === region);
  }

  let countryList;
  if (filteredCountries) {
    countryList = filteredCountries.length > 0 ? 
        filteredCountries.map((country) => <CountryCard key={country.name.common} {...country} />) 
        :(isLoading ||  isLoadingRegion) ? <Skeleton  className=' h-[350px] w-full max-w-[15rem]' count={8}/> : <div className="text-center text-2xl">No countries found</div>
}
  else if (region) {
    countryList = dataRegion.map((country) => (
      <CountryCard key={country.name.common} {...country} />
    ))    
  }
  else if (isLoading ||  isLoadingRegion) {
    countryList = <Skeleton  className=' h-[350px] w-full max-w-[15rem]' count={8}/>
  }
  else if (error ||  errorRegion) {
    countryList = <div>Error: {error.message}</div>
  }
   else {
   countryList = data.map((country) => (
    <CountryCard key={country.name.common} {...country} />
  ))    
} 
  return (
    <div className=" bg-Light-Gray  grid grid-cols-1 md:grid-cols-4 mx-auto lg:gap-10 gap-5 dark:bg-Very-Bark-Blue-bg" >
        {countryList}            
            
        </div>
  )
}

export default CountryListing