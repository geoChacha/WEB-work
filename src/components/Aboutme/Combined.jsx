import React from "react";
import Me from "./Me";
import Picture from "./Picture";
const Combined = () => {
    return(
        <div className="flex w-screen h-100">
            <Me/>
            <Picture/>
        </div>
    )
}
export default Combined;