import React from 'react'
import Image from "next/image";
import AbhishekSharmaImage from "public/Images/Abhishek Sharma.jpeg"

const About = () => {
    return (
        <div className="main md:h-[600px]" id={"About"}>
            <h1 className="text-center py-6 text-xl font-bold md:text-center md:py-10 md:text-5xl md:font-bold">About</h1>
            <div className="container flex flex-col justify-center items-center md:flex md:flex-row md:w-[1320px] md:mx-32 md:py-4 md:px-4 md:gap-10 md:shadow-xl md:rounded-2xl">
                <div className={"imageContainer w-[120px] border-2 border-black rounded-full overflow-hidden md:w-[900px] md:rounded-full md:border-4 md:border-black md:overflow-hidden"}>
                    <Image src={AbhishekSharmaImage} alt={"Abhishek Sharma"} />
                </div>
                <div className="px-3 mx-4 my-4 text-justify About-Text flex flex-col gap-2 justify-center shadow-xl rounded-xl md:flex md:flex-col md:gap-5 md:text-justify md:justify-center">
                    <h1 className="md:text-4xl text-xl">Abhishek Sharma</h1>
                    <p className={"md:text-xl md:pb-2 text-sm pb-2"}>Greetings! I am Abhishek Sharma. I am a professional <span className={"font-bold"}>
                        full stack developer</span> with a degree in engineering in the field of Information Technology.
                        I have 3 years of experience in the field of development. I can develop customised web applications
                        for you with full responsibility. I am skilled in technologies like <span className={"font-bold"}>NextJS</span>,
                        <span className={"font-bold"}> ReactJs</span>, <span className={"font-bold"}> NodeJs</span>,
                        <span className={"font-bold"}> ExpressJs</span>, <span className={"font-bold"}>MongoDB</span>,
                        <span className={"font-bold"}> Javascript</span>, HTML, CSS, <span className={"font-bold"}>Java</span>,
                        <span className={"font-bold"}> Python</span> and<span className={"font-bold"}> Git</span>.
                        Feel free to contact me if you want to know more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About