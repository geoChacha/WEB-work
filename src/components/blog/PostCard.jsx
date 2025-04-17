import React from 'react';

const PostCard =(props)=>{
    return (
    <div className="w-200 h-100 bg-amber-300 p-5 m-2 flex justify-center border-4 rounded-3xl">
     <div><h1 className="text-3xl text-center m-4 p-3 bg-amber-600 rounded-2xl">{props.title}</h1>
     <p className="mt-20 font-semibold bg-blue-800 p-5 rounded-2xl">{props.para}</p></div>
    </div>
    )
}
export default PostCard;