import Image from 'next/image';
import React, { ReactNode } from 'react';

const PlayLaout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='bg-[#0802A3] min-h-screen relative flex justify-center items-center py-5'>
			<Image
				alt='image animation'
				src={'/play/OBJECTS.png'}
				className='absolute z-30 top-[15%] left-0'
				width={150}
				height={150}
			/>
			{children}
		</main>
	);
};

export default PlayLaout;
