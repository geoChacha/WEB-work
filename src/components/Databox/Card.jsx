import React from "react";

const Card = () => {
 const Warn=() => { 
    alert("Project comming soon.")
 }
    return(
        <div className="w-screen h-180 flex">
            <div className="w-1/2 h-150  flex ">
            <div className=" flex justify-center items-center hover:w-220 hover:h-120 w-200 h-110  rounded-3xl relative top-20 hover:top-30 left-20">
                <img className="border-2 shadow-2xl shadow-amber-800 border-orange-700 w-150 h-90 relative bottom-9 left-15 rounded-3xl" src="https://media.licdn.com/dms/image/v2/D4D22AQE7wkJ_YwI6Hg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1697434014632?e=1747267200&v=beta&t=lPKlvofde0gOHsEoqgEFZOlvcQ5FEe6TJVMQzdkjIIc" alt="" />
                <button onClick={Warn} className="right-75
                text-white  hover:bg-blue-950 relative top-45 p-2 m-2 bg-gray-500 rounded-2xl ">View Project</button>
            </div>
            </div>
            <div className="w-1/2 h-150  flex ">
            <div className="w-1/2 h-70 flex relative left-30 top-40 justify-center items-center text-yellow-700 p-4 m-4 shadow-lime-950  shadow-2xl bg-gray-900 rounded-lg border-2 border-yellow-700">
                <p>"Gargoyle" is a 3D environment project crafted by Muhammad Asad Ali, developed between July 25 and October 16. Set in a moody, atmospheric night scene, it showcases a gargoyle-themed environment brought to life with detailed modeling, dynamic lighting, and strong environmental storytelling.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Card;