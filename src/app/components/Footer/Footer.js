import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={"bg-[#282828] md:w-full md:h-[200px] flex flex-col gap-4 justify-center items-center text-white"}>
            <div>
                <h1 className={"text-2xl"}>Developed by: <span className={"font-bold"}>Abhishek Sharma</span></h1>
            </div>
            <div>
                <p className={"text-xl"}>2023</p>
            </div>
            <div className={"flex gap-4"}>
                <Link href={"https://github.com/abhishek10600"} target="_blank" className="cursor-pointer"><BsGithub /></Link>
                <Link href={"https://www.linkedin.com/in/abhishek-sharma10600/"} target={"_blank"} className={"cursor-pointer"}><BsLinkedin className={"md:w-[20px] md:h-[20px]"} /></Link>
                <Link href={"https://www.instagram.com/revoprogramming/"} target={"_blank"} className={"cursor-pointer"}><BsInstagram className={"md:w-[20px] md:h-[20px]"} /></Link>
            </div>
        </div>
    )
}

export default Footer