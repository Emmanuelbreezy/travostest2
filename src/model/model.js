import Ima32 from '../assets/images/Ima32.png';
import Ima36 from '../assets/images/Ima36.png';
import Ima37 from '../assets/images/Ima37.png';
import Ima39 from '../assets/images/Ima39.png';
import Ima42 from '../assets/images/Ima42.png';

class ModelData {
	constructor(){
		this.data = [
				{
					id: 'oj1',
					itemcolor: '#C3E5E4',
					image: `${Ima32}`,
					toptitle: 'UNEO"',
					amount: 199,
					subdesc: 'Unisex Pack Of 2',
					sizeselected: ''
				},
				{
					id: 'oj2',
					itemcolor: '#E6E6E6',
					image: `${Ima36}`,
					toptitle: 'US POLO',
					amount: 299,
					subdesc: 'Unisex Pack Of 3',
					sizeselected: ''
				},
				{
					id: 'oj3',
					itemcolor: '#D1D4D8',
					image: `${Ima37}`,
					toptitle: 'HERO',
					amount: 199,
					subdesc: 'Unisex Pack Of 2',
					sizeselected: ''
				},
				{
					id: 'oj4',
					itemcolor: '#F7F0E4',
					image: `${Ima39}`,
					toptitle: 'UNEO',
					amount: 199,
					subdesc: 'Unisex Pack Of 2',
					sizeselected: ''
				},
				{
					id: 'oj5',
					itemcolor: '#FCEAF2',
					image: `${Ima42}`,
					toptitle: 'Wild Craft',
					amount: 150,
					subdesc: 'Unisex Pack Of 3',
					sizeselected: ''
				}


		]
	}

	_datalist = () => this.data;

	get allData(){
		return this._datalist()
	}

	DatabyId(id){
		return this._datalist().find(item => item.id === id);
	}

	UpdateSize(id,size){
		const obj = this._datalist().find(item => item.id === id);
		obj['sizeselected'] = size;
		return obj;
	}
}

export default ModelData;


