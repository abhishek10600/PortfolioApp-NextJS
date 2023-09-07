import React from "react"
import {BsGithub} from "react-icons/bs";
import Link from "next/link";

const ProjectCard = ({_id, title, description, link})=>{
    return (
        <Link href={link} target={"_blank"}>
            <div className={"project-card md:w-[600px] h-[200px] my-2 overflow-hidden cursor-pointer shadow-xl"}>
                <div className={"w-[600px] h-[200px] bg-white shadow-2xl flex flex-col gap-4 hover:absolute hover:-z-10 hover:ease-in items-center justify-center"}>
                    <h1 className={"md:text-4xl md:font-bold"}>{title}</h1>
                    <p className={"md:text-xl text-justify px-8"}>{description}</p>
                </div>
                <div className={"md:w-[600px] md:h-[200px] bg-black md:flex flex-col gap-4 md:justify-center md:items-center"}>
                    <BsGithub className={"md:w-[80px] md:h-[80px] text-white"}/>
                    <h1 className={"text-white"}>Visit Github Repository</h1>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard