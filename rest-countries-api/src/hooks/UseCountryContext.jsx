import { useContext } from "react";
import CountriesContext from "../context/Country";

function UseCountryHookContext() {
    return useContext(CountriesContext);
    }

export default UseCountryHookContext;