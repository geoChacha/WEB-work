import React from "react";

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap", "3D Modelling", "Game Development"];
    const skillIcons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        "https://images.icon-icons.com/2107/PNG/96/file_type_tailwind_icon_130128.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
    ]
    const skillLevels = [88,80, 78, 58, 68, 76, 45, 69, 79, 88, 76];
    return (
        <div><h1 className="text-4xl relative left-12 text-orange-600 font-bold">Skills:</h1>
            {skills.map((a, b) => {
            const skillValue=skillLevels[b];
            return (
                <div className="flex relative left-10 w-screen h-20 text-orange-400 text-lg font-bold border-2 border-blue-900 rounded-2xl m-2 p-2" key={b}>
                    <img className="border-2 border-amber-50 bg-amber-50 rounded-3xl w-10 h-10" src={skillIcons[b]} alt="" />
                    <p className="ml-7">{a}
                        <div className="w-440 bg-gray-200 rounded-full dark:bg-gray-700">
                            
                            <div className="bg-green-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width:skillValue*18 }}> {skillValue}%</div>
                        </div>
                    </p>

                </div>
            )
        })}</div>
    )
}

export default Skills;