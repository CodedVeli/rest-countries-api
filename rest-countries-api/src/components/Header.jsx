import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

function Header() {
  return (
    <section className="  fixed z-50  left-0 top-0 w-full  bg-White  flex justify-between pt-4 pb-4 pl-10 pr-10 text-Dark-Blue shadow-xl">
      <Link to="/"><h1 className=" font-extrabold lg:text-2xl md:text-xl text-lg">Where in the world?</h1></Link>
        {/* <div className=" flex space-x-1"><MdOutlineDarkMode className=" mt-1 size-5"/><h2>Dark Mode</h2></div> */}

    </section>
  )
}

export default Header