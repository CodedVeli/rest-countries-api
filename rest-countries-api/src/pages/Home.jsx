import { useState } from "react"
import Search from "../components/Search"
import Filters from "../components/Filters"
import CountryListing from "./CountryListing"
function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  
  return (
    <section className=" flex flex-col  bg-Light-Gray min-h-screen  space-y-10 pt-20  dark:bg-Very-Bark-Blue-bg pb-10 ">
        <div className=" flex lg:justify-between md:justify-between flex-wrap mx-10 pt-5 lg:space-y-0 md:space-y-0 space-y-10 ">
        <Search setSearchTerm={setSearchTerm}/>
            <Filters setRegion={setRegion}/>
        </div>
        <CountryListing searchTerm={searchTerm} region={region} />


    </section>
  )
}

export default Home