import React from 'react'

const Navbar = () => {
    return (
        <div className="md:flex md:justify-between bg-[#282828] md:py-8 items-center text-white">
            <div className="Logo md:ml-32">
                <h1 className="md:text-2xl font-bold">Abhishek Sharma</h1>
            </div>
            <div className="navlinks md:flex md:gap-10 list-none md:mr-32">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
            </div>
        </div>
    )
}

export default Navbar