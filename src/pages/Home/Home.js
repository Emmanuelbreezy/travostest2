import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from '../../component/NavBar/NavBar';
import { HomeCard } from '../../component/HomeCard/HomeCard';

import ModelData from '../../model/model';




export const Home = () => {

  const displayallData = () =>{
	  return new ModelData().allData.map((item, index) => {
	  	return (
			<Link 
				key={item.id} to={`/detail/${item.id}`}>
			  <HomeCard
				itemcolor={item.itemcolor}
				image={item.image}
				toptitle={item.toptitle}
				amount={item.amount}
				subdesc={item.subdesc}
			/>
		   </Link>
	  	)
	  })
  }
  return (
    <div className="flex flex-col pb-3 bg-white overflow-hidden h-screen">
	   <NavBar />
	   <div className="flex-1 pb-5 overflow-y-auto">
			{displayallData()}
	   </div>
     </div>
  );
}

