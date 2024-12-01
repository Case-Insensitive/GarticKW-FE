import React from 'react';
import ColorPicker from './color-picker/color-picker';
import Image from 'next/image';

const ButtonBox = () => {
	return (
		<div className='border-[#524DBE] flex flex-col gap-5  border-[3px] bg-transparent p-5'>
			<ColorPicker />
			<div className='flex gap-5 justify-between'>
				<button className='h-20 flex justify-center items-center flex-1 rounded-lg bg-[#524DBE]'>
					<Image
						alt='pencil icon'
						src={'/play/pencil.png'}
						height={70}
						width={70}
					/>
				</button>
				<button className='h-20 flex-1 flex items-center justify-center rounded-lg bg-[#524DBE]'>
					<Image
						alt='eraser icon'
						src={'/play/eraser.png'}
						height={70}
						width={70}
					/>
				</button>
				<button className='h-20 text-center rounded-lg flex-1 text-white font-[400] text-xl bg-[#524DBE]'>
					ERASER
				</button>
			</div>
		</div>
	);
};

export default ButtonBox;
