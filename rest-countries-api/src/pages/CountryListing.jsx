/* eslint-disable react/prop-types */
import CountryCard from '../components/CountryCard'
import { useGetAllCountriesQuery } from '../rtk/apis/CountryApi'
import Skeleton from '../components/Skeleton'
import { useGetCountryByNameQuery } from '../rtk/apis/CountryApi'
import { useGetCountryByRegionQuery } from '../rtk/apis/CountryApi'
function CountryListing({searchTerm,region}) {
  const { data = [], error, isLoading } = useGetAllCountriesQuery()
  const { data: countryData = [], isLoadingSearch, errorSearch } = useGetCountryByNameQuery(searchTerm)  
  const { data: dataRegion = [], isLoadingRegion, errorRegion} = useGetCountryByRegionQuery(region);

  let countryList;
  if (searchTerm) {
    countryList =  countryData.map((country) => (
      <CountryCard key={country.name.common} {...country} />
    ))    
  }  
  else if (region) {
    countryList = dataRegion.map((country) => (
      <CountryCard key={country.name.common} {...country} />
    ))    
  }
  else if (isLoading || isLoadingSearch || isLoadingRegion) {
    countryList = <Skeleton  className=' h-[350px] w-full max-w-[15rem]' count={8}/>
  }
  else if (error || errorSearch || errorRegion) {
    countryList = <div>Error: {error.message}</div>
  }
   else {
   countryList = data.map((country) => (
    <CountryCard key={country.name.common} {...country} />
  ))    
}
  return (
    <div className=" bg-White  grid grid-cols-1 md:grid-cols-4 mx-auto lg:gap-10 gap-5 dark:bg-Very-Bark-Blue-bg" >
        {countryList}            
            
        </div>
  )
}

export default CountryListing