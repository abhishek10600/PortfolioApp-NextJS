import Image from 'next/image'
import React from 'react'
import HomeBannerImage from "../../../../public/Images/HomeBannerImage.jpg"
import Link from "next/link";

const HomeBanner = () => {
    return (
        <div className="md:flex md:items-center md:h-[720px] md:gap-[100px] bg-[#282828] text-white" id={"Home"}>
            <div className="left md:flex md:flex-col md:gap-8 justify-center items-center ml-32">
                <h1 className="md:text-7xl">Full Stack Developer</h1>
                <h2 className="md:text-2xl">Building Websites and Web Applications for you!</h2>
                <Link href={"https://github.com/abhishek10600"} className={"md:px-4 md:py-2 border-2 hover:bg-white hover:text-black transition duration-180 ease-out hover:ease-in"} target={"_blank"}>Visit Github Profile</Link>
            </div>
            <div className="right">
                <div className="ImageContainer md:w-[500px]">
                    <Image className="rounded-full" src={HomeBannerImage} alt="Banner" />
                </div>

            </div>
        </div>
    )
}

export default HomeBanner