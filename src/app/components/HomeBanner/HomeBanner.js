import Image from 'next/image'
import React from 'react'
import HomeBannerImage from "../../../../public/Images/HomeBannerImage.jpg"
import Link from "next/link";

const HomeBanner = () => {
    return (
        <div className="flex items-center justify-center h-[250px] md:h-[720px] gap-3 md:gap-[100px] bg-[#282828] text-white px-6 py-8" id={"Home"}>
            <div className="left flex flex-col gap-3 md:gap-8 justify-center items-center md:ml-32">
                <h1 className="md:text-7xl text-base font-bold">Full Stack Developer</h1>
                <h2 className="md:text-2xl text-xs text-center">Building Websites and Web Applications for you!</h2>
                <Link href={"https://github.com/abhishek10600"} className={"px-1 py-1 md:px-4 md:py-2  border text-xs md:border-2 md:text-xl hover:bg-white hover:text-black transition duration-180 ease-out hover:ease-in"} target={"_blank"}>Visit Github Profile</Link>
            </div>
            <div className="right">
                <div className="ImageContainer w-[170px] md:w-[500px]">
                    <Image className="rounded-full" src={HomeBannerImage} alt="Banner" />
                </div>

            </div>
        </div>
    )
}

export default HomeBanner