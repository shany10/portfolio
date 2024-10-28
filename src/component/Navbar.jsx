import { FaHouse } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Footer from "./Footer";
import { useState } from "react";

const Navebar = () => {

    const [displayContact, setDisplayContact] = useState('none');
    const [isDisplay, setisDisplay] = useState(false);

    const handleClick = () => {
        setisDisplay(!isDisplay)
        if (!isDisplay) setDisplayContact("block")
        else setDisplayContact('none')
    }

    return (
        <div>
            <nav>
                <ul className="w-[100vw] text-sm sm:text-lg lg:text-xl xl:text-2xl flex justify-center fixed bottom-[1vh] z-10 text-p4">
                    <li
                        className="py-[1vh] px-[1.2%] mx-[1.5vw] rounded-full font-bold textColorPrimary cursor-pointer bgBlur opacity-50 hover:scale-110 hover:opacity-100 ">
                        <a href="#career">
                            <FaHouse className="ml-auto mr-auto" />
                            Accueil
                        </a>
                    </li>
                    <li
                        className="py-[1vh] px-[1.2%] mx-[1.5vw] rounded-full font-bold textColorPrimary cursor-pointer bgBlur opacity-50 hover:scale-110 hover:opacity-100 ">
                        <a href="#projet">
                            <FaFlask className="ml-auto mr-auto" />
                            Projets
                        </a>
                    </li>
                    <li
                        className="py-[1vh] px-[1.2%] mx-[1.5vw] rounded-full font-bold textColorPrimary cursor-pointer bgBlur opacity-50 hover:scale-110 hover:opacity-100">
                        <button id="button_contact" onClick={() => handleClick()}>
                            <FaPhone className="ml-auto mr-auto" />
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
            <div style={{ display: displayContact }}>
                <Footer />
            </div>
        </div>
    )
}

export default Navebar;