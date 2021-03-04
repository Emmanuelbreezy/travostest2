import React from "react";


export const Layout = (props) => {
   
    return (
        <div className="w-full pt-2 h-screen overflow-hidden bg-gray-200">
           <div className="w-full sm:w-full md:1/2 lg:w-1/4  h-full  m-auto border border-gray-200 bg-white">
            	{props.children}
            </div>
        </div>
    )
}