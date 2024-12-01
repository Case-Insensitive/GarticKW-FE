import clsx from 'clsx';
import React from 'react';
import Word from './word';
import Canvas from '@/components/canvas/canvas';

const WhiteBoard = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx(
				'border-[#524DBE] rounded-2xl flex flex-col items-center bg-white border-[3px] py-4 px-3',
				className
			)}
		>
			<Word isFilled={false}>J _ G _ _ R</Word>
			<Canvas />
			<div className='bg-[#FFCD4B] h-2 rounded-full w-full'></div>
		</div>
	);
};

export default WhiteBoard;
