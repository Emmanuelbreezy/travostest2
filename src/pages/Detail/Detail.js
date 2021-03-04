import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { DetailNavBar } from '../../component/DetailNavBar/DetailNavBar';
import { DetailCard } from '../../component/DetailCard/DetailCard';

import ModelData from '../../model/model';





export const Detail = (props) => {
	const { params: { itemid } } = props.match;

	const [toggle, setToggle] = useState(false);
	const [btncheck, setBtnCheck] = useState(false);
	const [objectData, setObjectData] = useState(
			new ModelData().DatabyId(itemid)
		);	

	const displaybyId = () => {
		const itembyid = objectData;
		return (
				<DetailCard
					key={itembyid.id}
					itemcolor={itembyid.itemcolor}
					image={itembyid.image}
					toptitle={itembyid.toptitle}
					amount={itembyid.amount}
					subdesc={itembyid.subdesc}
				/>
		)
	}

	const gobackAHandler = () => props.history.goBack;
	const toggleHandler = () => setToggle((prevState) => !prevState);
	const updateModalDataSize = (id, size) => {
		const updateddata = new ModelData().UpdateSize(id, size);
		setObjectData({
			...objectData,
			...updateddata
		});
		setToggle(false);
		setBtnCheck(true);
	}

	const defaultStyle = "w-10 h-10 shadow-lg font-semibold p-2 bg-white rounded-full text-black flex flex-wrap justify-center content-center";
	const activeStyle = "w-10 h-10 shadow-lg font-semibold p-2 bg-black text-white rounded-full flex flex-wrap justify-center content-center";

  return (
		<div className="flex flex-col pb-0 bg-white overflow-hidden h-screen">
		  <DetailNavBar handler={gobackAHandler()} />
			<div className="flex-1 pb-5 overflow-y-auto">
			  <div>{displaybyId()}</div>
			  <div className=" relative w-full h-auto pl-5 -mt-5 pl-7 pr-3 text-left transition-opactiy delay-150 duration-500 ease-in">
                 <div className="flex items-center space-x-2">
					  <div className={objectData['sizeselected'] === 'S' ? activeStyle : defaultStyle }><span>S</span></div>
					  <div className={objectData['sizeselected'] === 'M' ? activeStyle : defaultStyle}><span>M</span></div>
					  <div className={objectData['sizeselected'] === 'L' ? activeStyle : defaultStyle}><span>L</span></div>
                 </div>
                 <div className="mt-4">
                 	<p className="text-left text-sm font-normal text-black">
						  100% Original Products This item is not returnable. Items like inner-wear, personal care, make-up, socks and certain accessories do not come under our return policy. 
					    <span className="font-medium" style={{ color: '#F72626' }}> Read More.</span>
                 	</p>
                 </div>
                 <div className="mt-4">
					<span className="text-center py-0.5 px-3 text-md w-auto h-auto pt-0 text-black font-medium" style={{ backgroundColor: '#D6D6D6' }}>Spec</span>
					<ul className="mt-4 pl-1 text-left space-y-3">
						<li>
							  <div className="flex flex-row items-center space-x-4 text-sm font-medium">
							  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 stroke-current" viewBox="0 0 24 24">
								<path  d="M19,14.737Q19,18.316,12,21q-7-2.684-7-6.263V5.789A22.257,22.257,0,0,1,12,4a22.257,22.257,0,0,1,7,1.789Z" transform="translate(-5 -4)" />
							  </svg>
							 <span>Anti-pollution, anti-dust</span>
							</div>
						</li>
						  <li>
							  <div className="flex flex-row items-center space-x-4 text-sm  font-medium">
								  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  mt-1 stroke-current" viewBox="0 0 24 24">
									  <path d="M19,14.737Q19,18.316,12,21q-7-2.684-7-6.263V5.789A22.257,22.257,0,0,1,12,4a22.257,22.257,0,0,1,7,1.789Z" transform="translate(-5 -4)" />
								  </svg>
								  <span>Reusable</span>
							  </div>
						  </li>
						  <li>
							  <div className="flex flex-row items-center space-x-4 text-sm font-medium">
								  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  mt-1 stroke-current" viewBox="0 0 24 24">
									  <path  d="M19,14.737Q19,18.316,12,21q-7-2.684-7-6.263V5.789A22.257,22.257,0,0,1,12,4a22.257,22.257,0,0,1,7,1.789Z" transform="translate(-5 -4)" />
								  </svg>
								  <span>Pleated at sides for extra comfort</span>
							  </div>
						  </li>
						  <li>
							  <div className="flex flex-row items-start space-x-4 text-sm font-medium">
								  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  mt-1 stroke-current" viewBox="0 0 24 24">
									  <path d="M19,14.737Q19,18.316,12,21q-7-2.684-7-6.263V5.789A22.257,22.257,0,0,1,12,4a22.257,22.257,0,0,1,7,1.789Z" transform="translate(-5 -4)" />
								  </svg>
								  <span>Wider face coverage for maximum protection</span>
							  </div>
						  </li>
					</ul>
                 </div>
                 { toggle ? (
                 <div>
				  <div className="absolute w-64 pl-20 pt-16 h-56 top-56 right-0 bg-black rounded-tl-full rounded-bl-3xl rounded-tr-3xl">
				  	<div className="relative text-white pt-3 pl-3">
				  		<h6 className="text-sm font-medium">Select Size</h6>
				  		<div className="flex items-center space-x-2 mt-2 mb-6">
						  <button onClick={() => updateModalDataSize(itemid,'S')} className="focus:outline-none w-7 h-7 text-sm font-semibold p-2 bg-white rounded-full text-black flex flex-wrap justify-center content-center"><span>S</span></button>
						  <button onClick={() => updateModalDataSize(itemid, 'M')} className="focus:outline-none w-7 h-7 text-sm font-semibold p-2 bg-white rounded-full text-black flex flex-wrap justify-center content-center"><span>M</span></button>
						  <button onClick={() => updateModalDataSize(itemid, 'L')} className="focus:outline-none w-7 h-7 text-sm  font-semibold p-2 bg-white rounded-full text-black flex flex-wrap justify-center content-center"><span>L</span></button>
				  		</div>
				  		<span className="font-light text-xs ">Size Chart</span>
				  	</div>
				  </div>
				 </div>) : null
				}

				  {btncheck ? (<Link to="/cart"><button className="focus:outline-none rounded-3xl text-xs bg-black text-white w-full mt-6 py-3 text-center">CONTINUE</button></Link>) : (
					  <button onClick={toggleHandler} className="focus:outline-none rounded-3xl text-xs bg-black text-white w-full mt-6 py-3 text-center">ADD TO CART</button>
				  )}
				  
			  </div>
		   </div>
     </div>
  );
}

// #D6D6D6