import React from "react";
import Image from "next/image";

const SkillCard = ({imageComponent})=>{
    return (
        <div className={"skill1 md:mx-4 md:my-4"}>
            <Image src={imageComponent} alt={"skill"} className={""}/>
        </div>
    )
}

export default SkillCard;