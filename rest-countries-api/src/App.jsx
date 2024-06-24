import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CountryInfo from "./pages/CountryInfo"
import Header from "./components/Header"
function App() {

  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/country-info/:id" element={<CountryInfo/>}/>
    </Routes>
      
    </>
  )
}

export default App
