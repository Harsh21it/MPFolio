import logo from "../assets/ht.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/"><img className="w-24" src={logo} alt="logo"/></a>
      </div>
      <div className="flex m-8 gap-4 items-center justify-center text-2xl">
        <a href="https://www.linkedin.com/in/harsh-t-b3696a22a/"><FaLinkedin className="shadow-lg shadow-blue-900 rounded-sm" /></a>
        <a href="https://github.com/Harsh21it"><FaGithub className="shadow-lg shadow-blue-900 rounded-full" /></a>
        <a href="https://www.instagram.com/harshtiwari2510/"><FaInstagram className="shadow-lg shadow-blue-900 rounded-lg" /></a>
      </div>
    </nav>
  )
}

export default Navbar
