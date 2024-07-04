import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CountryInfo from "./pages/CountryInfo"
import Header from "./components/Header"
function App() {

  
  return (
    <>
    <section className="bg-Light-Gray min-h-screen  dark:bg-Very-Bark-Blue-bg " >
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/country-info/:id" element={<CountryInfo/>}/>
    </Routes>
    </section>
      
    </>
  )
}

export default App
