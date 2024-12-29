import React from 'react';
import Image from 'next/image';
const ShareLinkModal = ({ isActive }: { isActive: boolean }) => {
	return (
		<div className='flex-[2] flex flex-col gap-4 py-7'>
			<div className='relative w-full h-10'>
				<Image
					alt='ribbon'
					src={'/choose-category/Rectangle 50.png'}
					className='absolute w-full h-10 '
					width={400}
					height={40}
				/>
				<h2 className='absolute top-0.5  w-full text-center text-white font-extrabold'>
					SHARE YOUR <span className='bg-[#FFCD4B]'>LINK!!</span>
				</h2>
			</div>
			<div className='flex w-full gap-5 justify-between '>
				<div className='flex-1'>
					<p className='text-white text-lg font-bold text-center'>Max Point</p>
					<p className='bg-[#FFFFFF] rounded-lg py-2 font-[900] text-2xl text-[#D9D9D9] text-center'>
						500
					</p>
				</div>
				<div className='flex-1'>
					<p className='text-white text-lg font-bold text-center'>
						Public Room
					</p>
					<p className='bg-[#FFFFFF] rounded-lg py-2 font-[900] text-2xl text-[#FF4B91] text-center'>
						NO
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShareLinkModal;
