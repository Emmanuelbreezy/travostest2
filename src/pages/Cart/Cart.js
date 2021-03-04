import React from 'react';
import { CartCard } from '../../component/CartCard/CartCard';

import Ima32 from '../../assets/images/Ima32.png';
import Ima39 from '../../assets/images/Ima39.png';



export const Cart = (props) => {
	const objectData = [{
		id: 'oj1',
		itemcolor: '#C3E5E4',
		image: `${Ima32}`,
		toptitle: 'UNEO"',
		amount: 199,
		subdesc: 'Unisex Pack Of 2',
		sizeselected: 'M'
	},
	{
		id: 'oj4',
		itemcolor: '#F7F0E4',
		image: `${Ima39}`,
		toptitle: 'UNEO',
		amount: 199,
		subdesc: 'Unisex Pack Of 2',
		sizeselected: 'M'
	}
	];

	const displayallData = () => {
		return objectData.map((item, index) => {
			return (
				<CartCard
					key={item.id} 
					itemcolor={item.itemcolor}
					image={item.image}
					toptitle={item.toptitle}
					amount={item.amount}
					subdesc={item.subdesc}
					sizeselected={item.sizeselected}
				/>
			)
		})
	}

	const backAHandler = () => props.history.push('/');
	return (
		<div className="flex flex-col pb-3 bg-white overflow-hidden h-screen">
			<div className="p-2 mt-2 mb-2 shadow-lg pb-4">
				<button className="focus:outline-none flex items-center space-x-2" onClick={backAHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-5 pl-2 text-black fill-current cursor-pointer" viewBox="0 0 24 24">
						<polygon fillRule="evenodd" points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707" />
					</svg>
					<span className="text-sm font-medium">Shopping</span>
				</button>
			</div>

			<div className="relative w-full h-auto">
				{displayallData()}
				<div className="mt-16 p-5">
					<h2 className="text-black font-semibold text-md">Cart Details</h2>
					<div className="mt-4">
						<ul>
						  <li className="mt-3">
						  	<div className="flex items-center justify-between">
								<span>Total Amount</span>
									<span className="font-bold">Rs 398</span>
						  	</div>
						  </li>
							<li className="mt-3">
								<div className="flex items-center justify-between">
									<span>Discount</span>
									<span className="font-bold">Rs 0</span>
								</div>
							</li>
							<li className="mt-3">
								<span className="block border-b border-gray-200 w-full h-2"></span>
							</li>
							<li className="mt-4">
								<div className="flex items-center justify-between">
									<span>Final Amount</span>
									<span className="font-bold">Rs 398</span>
								</div>
							</li>
						</ul>
					</div>
					<button className="focus:outline-none rounded-3xl text-xs bg-black text-white w-full mt-5 py-3.5 text-center">
						CHEKOUT
					</button>
				</div>


			</div>

	</div>
	)
}