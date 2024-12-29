import React from 'react';
import ButtonColor from './button-color/button-color';
import { colors } from '@/data/colors';
import { useMainboardStore } from '@/store/main';
const ColorPicker = () => {
	const { color: activeColor, setColor } = useMainboardStore();
	const handleColorClick = (color: string) => {
		setColor(color);
	};
	return (
		<div className='grid grid-cols-6 gap-5'>
			{colors.map((color) => (
				<ButtonColor
					key={color}
					color={color}
					isActive={activeColor === color}
					onClick={() => handleColorClick(color)}
				/>
			))}
		</div>
	);
};

export default ColorPicker;
