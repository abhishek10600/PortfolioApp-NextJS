import React from "react"
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const ProjectCard = ({ _id, title, description, link }) => {
    return (
        <Link href={link} target={"_blank"}>
            <div className={"project-card md:w-[600px] md:h-[200px] my-4 md:my-2 overflow-hidden md:overflow-hidden cursor-pointer md:shadow-2xl shadow-xl"}>
                <div className={"md:w-[600px] md:h-[200px] bg-white flex flex-col gap-2 md:gap-4 md:hover:absolute md:hover:-z-10 md:hover:ease-in items-center justify-center"}>
                    <h1 className={"md:text-4xl md:font-bold text-2xl font-bold py-2"}>{title}</h1>
                    <p className={"md:text-xl text-justify md:px-8 text-sm px-4 pb-2"}>{description}</p>
                </div>
                <div className={"md:w-[600px] md:h-[200px] bg-black md:flex md:flex-col md:gap-4 md:justify-center md:items-center flex gap-2 py-2 justify-center items-center"}>
                    <BsGithub className={"md:w-[80px] md:h-[80px] text-white w-[15px] h-[15px]"} />
                    <h1 className={"text-white text-sm"}>Visit Github Repository</h1>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard