import Image from 'next/image';
import React from 'react';

const GameSettings = () => {
	return (
		<div className='w-full flex bg-[#524DBE]  rounded-xl'>
			<div className='flex-1 relative'>
				<Image
					alt='object-2'
					src={'/choose-category/object-2.png'}
					width={150}
					height={200}
					className='absolute bottom-0 left-[50%] -translate-x-[50%]'
				/>
			</div>
			<div className='flex-[2] flex flex-col gap-4 py-7'>
				<div className='relative w-full h-10'>
					<Image
						alt='ribbon'
						src={'/choose-category/Rectangle 50.png'}
						className='absolute w-full h-10 '
						width={400}
						height={40}
					/>
					<h2 className='absolute top-0.5  w-full text-center'>
						<span className='font-[900] text-white text-2xl'>GAME </span>
						<span className='font-[900] text-[#FF4B91] text-2xl'>SETTINGS</span>
					</h2>
				</div>
				<div className='flex w-full gap-5 justify-between '>
                    <div className='flex-1'>
                        <p className='text-white text-lg font-bold text-center'>Max Point</p>
                        <p className='bg-[#FFFFFF] rounded-lg py-2 font-[900] text-2xl text-[#D9D9D9] text-center'>500</p>
                    </div>
                    <div className='flex-1'>
                        <p className='text-white text-lg font-bold text-center'>Public Room</p>
                        <p className='bg-[#FFFFFF] rounded-lg py-2 font-[900] text-2xl text-[#FF4B91] text-center'>NO</p>
                    </div>
                </div>
			</div>
			<div className='flex-1 relative'>
				<Image
					alt='object-1'
					src={'/choose-category/object-1.png'}
					className='absolute bottom-0 left-[50%] -translate-x-[50%]'
					width={150}
					height={200}
				/>
			</div>
		</div>
	);
};

export default GameSettings;
