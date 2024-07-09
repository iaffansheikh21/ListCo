"use client"
import Navbar from "../components/NavBar";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import DescriptionPara from "../components/DescriptionPara";
import MainLayout from "../components/MainLayout"



const Page_listing: React.FC = () => {
    return (
        <div className="relative">
            <Navbar />
            <DescriptionPara/>
            {/* <DescriptionPic/>
            <ContactForm/> */}
            <MainLayout/>
        </div>
    );
};

export default Page_listing;