import React from "react";
import NextJsLogo from "../../../../public/Images/nextjslogo.png"
import ReactJsLogo from "../../../../public/Images/reactjsLogo.png"
import ExpressJsLogo from "../../../../public/Images/expressjsLogo.png"
import NodeJsLogo from "../../../../public/Images/nodejsLogo.png"
import MongoDbLogo from "../../../../public/Images/mongodbLogo.png"
import JavascriptLogo from "../../../../public/Images/javascriptLogo.jpg"
import PythonLogo from "../../../../public/Images/pythonLogo.png"
import JavaLogo from "../../../../public/Images/javaLogo.png"
import TailwindcssLogo from "../../../../public/Images/tailwindcssLogo.png"
import SkillCard from "@/app/components/Skill Card/SkillCard";
import Link from "next/link";
const Skills = ()=> {
    return (
        <div className={"main md:h-[1000px]"} id={"Skills"}>
            <h1 className={"text-center md:py-10 md:text-5xl md:font-bold"}>Skills</h1>
            <div className={"skills-container md:grid md:grid-cols-3 md:mx-32"}>
                <SkillCard imageComponent={NextJsLogo}/>
                <SkillCard imageComponent={ReactJsLogo}/>
                <SkillCard imageComponent={ExpressJsLogo}/>
                <SkillCard imageComponent={NodeJsLogo}/>
                <SkillCard imageComponent={MongoDbLogo}/>
                <SkillCard imageComponent={JavascriptLogo}/>
                <SkillCard imageComponent={PythonLogo}/>
                <SkillCard imageComponent={JavaLogo}/>
                <SkillCard imageComponent={TailwindcssLogo}/>
            </div>
            <div className={"md:flex md:justify-center md:items-center md:mt-[20px]"}>
                <Link href={"https://drive.google.com/file/d/1tYNlvxO64GP0ReKsmb4IECmMnuXDqOcs/view?usp=sharing"} target="_blank" className={"py-4"}>Download Resume</Link>
            </div>
        </div>
    )
}

export default Skills;
