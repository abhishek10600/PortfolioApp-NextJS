import React from "react"
import ProjectCard from "@/app/components/Project Card/ProjectCard";
import Link from "next/link";
const Project = ()=>{
    const myProjects = [
        {
            "_id": 1,
            "title": "Feedback-System",
            "description": "This is a feedback system built using NextJs. Users can login and upload files here and other users can comment on posts and can give their votes to a post.",
            "link": "https://github.com/abhishek10600/Feedback-System"
        },
        {
            "_id": 2,
            "title":"NextJs-Blog-App",
            "description": "I developed this full stack blog app. It allows users to share blogs and control their blogs through a dashbaord. It also has google authetication system.",
            "link": "https://github.com/abhishek10600/NextJs-Blog-App"
        },
        {
            "_id": 3,
            "title": "PotfolioApp-NextJs",
            "description": "This is my portfolio app. It is the code of the application that you are visiting now",
            "link": "https://github.com/abhishek10600/PortfolioApp-NextJS"
        },
        {
            "_id": 4,
            "title": "Traveler",
            "description": "This is a full stack blog app that allows users to share their travel experiences with other users.",
            "link": "https://github.com/abhishek10600/Traveler"
        },
        {
            "_id": 5,
            "title": "Gallery-App-MERN",
            "description": "This is full stack gallery app that allows users to store images and view their images. This application is built using ExpressJs, ReactJs, NodeJS and MongoDB.",
            "link": "https://github.com/abhishek10600/Gallery-App-MERN"
        },
        {
            "_id": 6,
            "title": "React-Restaurent-App",
            "description": "I created a front-end of an restaurent app using React js",
            "link": "https://github.com/abhishek10600/React-Restaurent-App"
        }
    ]
    return (
        <div className={"main md:h-[1000px] bg-gray-100"} id={"Project"}>
            <h1 className={"text-center md:py-10 md:text-5xl font-bold"}>Projects</h1>
            <div className={"project-container md:mx-32 md:my-4 md:grid md:grid-cols-2"}>
                {myProjects.map(myProject => (
                    <ProjectCard {...myProject}/>
                ))}
            </div>
            <div className={"flex justify-center items-center mt-24"}>
                <Link href={"https://github.com/abhishek10600?tab=repositories"} target={"_blank"} className={"bg-transparent py-4 px-3"}>View More...</Link>
            </div>
        </div>
    )
}

export default Project;