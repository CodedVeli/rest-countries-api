import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/UseDarkMode";

function Header() {
  const { darkMode, darkModeHandler } = useDarkMode();  

  return (
    <section className="  fixed z-50  left-0 top-0 w-full  bg-White  flex justify-between pt-4 pb-4 pl-10 pr-10 text-Dark-Blue shadow-xl dark:bg-Dark-Blue-Elements">
      <Link to="/"><h1 className=" font-extrabold lg:text-2xl md:text-xl text-lg dark:text-White">Where in the world?</h1></Link>
        <button onClick={() => darkModeHandler()} className=" flex space-x-1 dark:text-White">
          {darkMode ? <MdDarkMode className=" mt-1 size-5 dark:text-White"/> : <MdDarkMode className=" mt-1 size-5 dark:text-White"/>}
          <h2>Dark Mode</h2></button>

    </section>
  )
}

export default Header