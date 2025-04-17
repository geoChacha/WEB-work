import React from "react";
import { useState } from "react";
const Form =()=>{
     
    const [title,changeTitle]=useState("");
    const [para,changePara]=useState("");
    const HandlePara=(event)=>{
        changePara(event.target.value);
    }
    const HandleTitle=(event)=>{

         changeTitle(event.target.value);
    }
    const HandleForm=(event)=>{
       event.preventDefault()
       console.log(title,para)
    }
    return(
        <div className="border-2 bg-blue-300">
            <form onSubmit={HandleForm}>
                <label htmlFor="Title" className="text-2xl mr-25 p-7 ">Title</label>
                <input id="Title" type="text" className="m-4 border-2 rounded-2xl" value={title} onChange={HandleTitle} />
                <br />
                <label htmlFor="area" className="text-2xl m-7 relative bottom-145 right-7 p-7">Paragraph</label>

                <textarea name="" id="area" className=" border-2 rounded-2xl w-300 h-150" value={para} onChange={HandlePara}></textarea>
                 <input type="submit" className="bg-red-500 m-4 rounded-2xl border-2 text-lg p-2" />
            </form>
        </div>
    )
}
export default Form;