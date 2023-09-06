import React from 'react'
import Image from "next/image";
import AbhishekSharmaImage from "public/Images/Abhishek Sharma.jpeg"

const About = () => {
    return (
        <div className="main md:h-[500px]">
            <h1 className="text-center md:py-10 md:text-5xl font-bold">About</h1>
            <div className="container md:flex md:w-[1320px] md:mx-32 py-4 px-4 gap-10 shadow-2xl rounded-2xl">
                <div className={"imageContainer md:w-[900px] md:rounded-full overflow-hidden bg-yellow-400"}>
                    <Image src={AbhishekSharmaImage} alt={"Abhishek Sharma"}/>
                </div>
                <div className="About-Text flex flex-col gap-5 text-justify justify-center">
                    <h1 className="md:text-4xl">Abhishek Sharma</h1>
                    <p className={"text-xl pb-2"}>Greetings! I am Abhishek Sharma. I am a professional <span className={"font-bold"}>
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