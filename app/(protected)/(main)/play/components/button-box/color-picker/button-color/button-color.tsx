import React from 'react';
import { IButtonColor } from './buttonColor.type';
import clsx from 'clsx';

const ButtonColor = ({
	color,
	className,
	isActive = false,
}: IButtonColor & { className?: string }) => {
	return (
		<button
			className={clsx(
				'h-10 w-10 rounded-lg',
				isActive ? 'border-2 border-white' : '',
				className
			)}
			style={{ backgroundColor: `#${color}` }}
		></button>
	);
};

export default ButtonColor;
