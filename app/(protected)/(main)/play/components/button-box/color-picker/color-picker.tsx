import React from 'react';
import ButtonColor from './button-color/button-color';

const ColorPicker = () => {
	return (
		<div className='grid grid-cols-6 gap-5'>
			<ButtonColor isActive color='000000' />
			<ButtonColor color='794E2D' />
			<ButtonColor color='FF0000' />
			<ButtonColor color='FFD300' />
			<ButtonColor color='0AEFFF' />
			<ButtonColor color='580AFF' />
			<ButtonColor color='D9D9D9' />
			<ButtonColor color='666666' />
			<ButtonColor color='FF8700' />
			<ButtonColor color='A1FF0A' />
			<ButtonColor color='147DF5' />
			<ButtonColor color='BE0AFF' />
		</div>
	);
};

export default ColorPicker;
