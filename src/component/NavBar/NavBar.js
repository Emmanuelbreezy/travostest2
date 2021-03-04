import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="p-2 mt-2">
	   	 <ul className="flex items-center justify-between text-center">
			  <li>
				  <svg fill="none" className="w-8 h-5 pl-2 text-black fill-current cursor-pointer">
				   <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				  </path></svg>
			  </li>
			  <li className="flex-1 flex justify-center text-center">
				  <Link to="/"><div className="flex flex-wrap content-center cursor-pointer justify-center w-12 h-12 text-white ml-6 rounded-full bg-black">
			  		<span className="text-md">N8</span>
			  	</div></Link>
			  </li>
			  <li>
			  	<div className="flex items-center space-x-4 pr-2">
				  <svg className="w-5 h-5 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				  	<path d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z" />
				  </svg>

				   <svg className="w-5 h-5 fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				    <path d="M21.08,7a2,2,0,0,0-1.7-1H6.58L6,3.74A1,1,0,0,0,5,3H3A1,1,0,0,0,3,5H4.24L7,15.26A1,1,0,0,0,8,16h9a1,1,0,0,0,.89-.55l3.28-6.56A2,2,0,0,0,21.08,7Z" />
				    <circle cx="1.5" cy="1.5" r="1.5" transform="translate(6 18)" /><circle cx="1.5" cy="1.5" r="1.5" transform="translate(16 18)" />
				  </svg>
			  	</div>
			  </li>

	   	 </ul>
     </div>
  );
}

