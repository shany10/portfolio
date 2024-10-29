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
            <ul className={"flex flex-col md:flex-row sm:justify-center text-center text-p4 tracking-wider my-4 text-sm "}>
                <li className="ml-auto mr-auto xl:mr-20 md:ml-6 md:mr-4">
                    <img src={shany} alt="profil de Shany" className="w-[120px] h-[150px] lg:w-[140px] lg:h-[170px] xl:w-[160px] xl:h-[190px] rounded-[20px]" />
                </li>
                <li className="mx-1 lg:mx-2 xl:mx-6 flex items-center hidden md:block">
                    <div>
                        <QRCode className="w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]" />
                        <p className="my-2 ">
                            Mon CV
                        </p>
                    </div>
                </li>
                <li className="mt-2 md:mt-0 lg:mx-2 xl:mx-6">
                    <div>
                        <BsTelephoneForward className="ml-auto mr-auto w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] hover:scale-125" />
                        <p className="mt-2">0775864745</p>
                    </div>
                    <div className="mt-4">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                            <BiLogoGmail className="ml-auto mr-auto w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] hover:scale-125" />
                        </a>
                        <p>shanyahsam@gmail.com</p>
                    </div>
                </li>
                <li className="mt-2 md:mt-0 lg:mx-2 xl:mx-6">
                    <div>
                        <a href="https://www.instagram.com/fox_or_17/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="ml-auto mr-auto w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] hover:scale-125" />
                        </a>
                        <p className="mt-2">Fox_or_17</p>
                    </div>
                    <div className="mt-4">
                        <a href="https://www.linkedin.com/in/shany-razafindramary-647866248/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="ml-auto mr-auto w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] hover:scale-125" />
                        </a>
                        <p>Razafindramary shany</p>
                    </div>
                </li>
                <li>
                    <div className="mt-2 md:mt-0 lg:mx-2 xl:mx-6">
                        <a href="https://github.com/shany10?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="ml-auto mr-auto w-[44px] h-[44px] xl:w-[64px] xl:h-[64px] hover:scale-125" />
                        </a>
                        <p className="mt-2">Shany10</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Footer;