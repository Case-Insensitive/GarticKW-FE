import React from 'react';
import ColorPicker from './color-picker/color-picker';
import Image from 'next/image';
import clsx from 'clsx';
import { useMainboardStore } from '@/store/main';

const ButtonBox = () => {
	const { tool, setTool, clearMainboard } = useMainboardStore();
	return (
		<div className='border-[#524DBE] flex flex-col gap-5  border-[3px] bg-transparent p-5'>
			<ColorPicker />
			<div className='flex gap-5 justify-between'>
				<button
					onClick={() => setTool('pen')}
					className={clsx(
						'h-20 flex justify-center items-center flex-1 rounded-lg bg-[#524DBE]',
						tool === 'pen' ? 'border-white border-2 ' : ''
					)}
				>
					<Image
						alt='pencil icon'
						src={'/play/pencil.png'}
						height={70}
						width={70}
					/>
				</button>
				<button
					onClick={() => setTool('eraser')}
					className={clsx(
						'h-20 flex-1 flex items-center justify-center rounded-lg bg-[#524DBE]',
						tool === 'eraser' ? 'border-white border-2 ' : ''
					)}
				>
					<Image
						alt='eraser icon'
						src={'/play/eraser.png'}
						height={70}
						width={70}
					/>
				</button>
				<button
					onClick={clearMainboard}
					className='h-20 text-center rounded-lg flex-1 text-white font-[400] text-xl bg-[#524DBE]'
				>
					CLEAR
				</button>
			</div>
		</div>
	);
};

export default ButtonBox;
