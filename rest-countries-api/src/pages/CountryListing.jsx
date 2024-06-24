import React from 'react'
import CountryCard from '../components/CountryCard'
import { useGetAllCountriesQuery } from '../rtk/apis/CountryApi'
import Skeleton from '../components/Skeleton'
import { useGetCountryByNameQuery } from '../rtk/apis/CountryApi'
import { useGetCountryByRegionQuery } from '../rtk/apis/CountryApi'
function CountryListing({searchTerm,region}) {
  const { data = [], error, isLoading } = useGetAllCountriesQuery()
  const { data: countryData = [] } = useGetCountryByNameQuery(searchTerm)  
  const { data: dataRegion = []} = useGetCountryByRegionQuery(region);

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
  else if (isLoading) {
    countryList = <Skeleton  className=' h-[350px] w-full max-w-[15rem]' count={8}/>
  }
  else if (error) {
    countryList = <div>Error: {error.message}</div>
  }
   else {
   countryList = data.map((country) => (
    <CountryCard key={country.name.common} {...country} />
  ))    
}
  return (
    <div className=" flex flex-wrap items-center justify-center  mx-10 gap-5" >
        {countryList}            
            
        </div>
  )
}

export default CountryListing