import nasa_icon from "@/app/assets/icons/nasa.svg"
import Image from "next/image"
const Header = () => {
    return (
        <header className="bg-white flex items-center justify-between px-10">
            <div>
                <a href="#">
                    <Image src={nasa_icon} alt="nasa icon" className="w-30 h-30" />
                </a>
            </div>
            <nav className="text-black">
                <ul className="flex items-center justify-center gap-10 font-bold text-xl">
                    <li className="hover:text-[#105bd8] cursor-pointer"><a href="https://api.nasa.gov/">Nasa API</a></li>
                    <li className="hover:text-[#105bd8] cursor-pointer"><a href=""></a>About</li>
                    <li className="hover:text-[#105bd8] cursor-pointer"><a href=""></a>Try</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;