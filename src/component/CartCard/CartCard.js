import React from 'react';

export const CartCard = (props) => {
  return (
	  <div className="px-2">
		  <div className="flex flex-row items-center justify-between h-auto mt-3 w-full">
			  <div className="w-24 h-24 p-2 flex flex-wrap content-center justify-center" style={{ backgroundColor: props.itemcolor }}>
			  	<img src={props.image} alt='' /></div>
			  <div>
				  <ul>
					  <li><h2 className="text-black font-bold text-lg">{props.toptitle}</h2></li>
					  <li><span className="text-xs font-medium text-gray-700">Rs {props.amount} {props.subdesc}</span></li>
					  <li><span className="text-xs font-medium text-gray-700">Size: {props.sizeselected}</span></li>
					  <li><button className="text-red-500 font-medium text-xs mt-2 focus:outline-none">REMOVE</button></li>
				  </ul>
			  </div>
			  <div className=" flex flex-col items-center p-3 pr-3 text-md space-y-2 rounded-3xl border border-gray-200">
				  <button className="focus:outline-none">
					  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
						  <polygon fillRule="evenodd" points="13 11 22 11 22 13 13 13 13 22 11 22 11 13 2 13 2 11 11 11 11 2 13 2" />
					  </svg>
				  </button>
				  <span>1</span>
				  <button>
					  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
						  <polygon fill-rule="evenodd" points="22 11 22 13 2 13 2 11" />
					  </svg>
				  </button>
			  </div>

		  </div>

	  </div>
  );
}

