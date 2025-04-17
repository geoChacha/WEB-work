import React from "react";

const Card = () => {
    const Warn=() => { 
        alert("Project comming soon.")
     }
    return(
        <div className="w-screen h-180 flex">
            <div className="w-1/2 h-150  flex ">
            <div className="flex justify-center items-center hover:w-220 hover:h-120 w-200 h-110 rounded-3xl relative top-20 hover:top-30 left-20">
                <img className="border-2 shadow-2xl shadow-amber-800 border-orange-700 w-150 h-90 relative bottom-9 left-15 rounded-3xl" src="https://media.licdn.com/dms/image/v2/D4D22AQHvckxTMX3h-g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728809777863?e=1747267200&v=beta&t=CeZ6LqV9q2yMFOX5YYAlbkdLeYjV2GgQcI3l30GiNOo" alt="" />
                <button onClick={Warn} className="right-75
                text-white hover:bg-blue-950 relative top-45 p-2 m-2 bg-gray-500 rounded-2xl">View Project</button>
            </div>
            </div>
            <div className="w-1/2 h-150  flex ">
            <div className="w-1/2 h-70 flex relative left-30 top-40 justify-center items-center text-yellow-700 p-4 m-4 shadow-lime-950  shadow-2xl bg-gray-900 rounded-lg border-2 border-yellow-700">
                <p>The project "Get Your Trash Together" is a small indie game developed by Muhammad Asad Ali. It challenges players to organize and manage trash efficiently, likely incorporating elements of sorting, time management, and environmental awareness. The game's core idea revolves around tidiness and responsibility, possibly delivered in a humorous or quirky style.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Card;