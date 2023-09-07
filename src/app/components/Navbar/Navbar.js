import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="md:flex md:justify-between bg-[#282828] md:py-8 md:items-center text-white md:fixed md:w-full">
            <div className="Logo md:ml-32">
                <h1 className={"text-2xl font-bold"}><Link href={"#Home"}>Abhishek Sharma</Link></h1>
            </div>
            <div className="navlinks md:flex md:gap-10 list-none md:mr-32">
                <Link href={"#Home"}>Home</Link>
                <Link href={"#About"}>About</Link>
                <Link href={"#Project"}>Projects</Link>
                <Link href={"#Skills"}>Skills</Link>
            </div>
        </div>
    )
}

export default Navbar