import shany from "../images/shany.jpg"
import { ReactComponent as QRCode } from "../images/qr-code.svg"
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsTelephoneForward } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    return (
        <div
            className={"footer w-[90vw] z-50 fixed top-[1%] left-[5%] right[5%] rounded-[16px]"}
        >
            <ul className={"flex justify-center text-center text-p4 tracking-wider my-4 "}>
                <li className={"mr-20 ml-6"}>
                    <img src={shany} alt="profil de Shany" className="w-[160px] h-[190px] rounded-[20px]" />
                </li>
                <li className="mx-6">
                    <QRCode className="w-[150px] h-[150px]"/>
                    <p className="text-xl my-2 ">
                        Mon CV
                    </p>
                </li>
                <li className="mx-6">
                    <div>
                        <BsTelephoneForward className="ml-auto mr-auto w-[64px] h-[64px] hover:scale-125" />
                        <p className="mt-2">0775864745</p>
                    </div>
                    <div className="mt-4">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                            <BiLogoGmail className="ml-auto mr-auto w-[64px] h-[64px] hover:scale-125" />
                        </a>
                        <p>shanyahsam@gmail.com</p>
                    </div>
                </li>
                <li className="mx-6">
                    <div>
                        <a href="https://www.instagram.com/fox_or_17/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="ml-auto mr-auto w-[64px] h-[64px] hover:scale-125" />
                        </a>
                        <p className="mt-2">Fox_or_17</p>
                    </div>
                    <div className="mt-4">
                        <a href="https://www.linkedin.com/in/shany-razafindramary-647866248/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="ml-auto mr-auto w-[64px] h-[64px] hover:scale-125" />
                        </a>
                        <p>Razafindramary shany</p>
                    </div>
                </li>
                <li>
                    <div className="mx-6">
                        <a href="https://github.com/shany10?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="ml-auto mr-auto w-[64px] h-[64px] hover:scale-125" />
                        </a>
                        <p className="mt-2">Shany10</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Footer;