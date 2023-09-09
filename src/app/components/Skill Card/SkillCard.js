import React from "react";
import Image from "next/image";

const SkillCard = ({ imageComponent }) => {
    return (
        <div className={"skill md:mx-4 md:my-4 my-4 mx-4"}>
            <Image src={imageComponent} alt={"skill"} className={""} />
        </div>
    )
}

export default SkillCard;