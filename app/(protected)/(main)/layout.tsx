import React, { ReactNode } from 'react';
import Image from 'next/image';
import TopButtons from './play/components/top-buttons/top-buttons';
import Navigation from '@/components/navigation/navigation';
import RankBoard from '@/components/rank-board/rank-board';
const MainPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='bg-[#0802A3] min-h-screen relative flex justify-center items-center py-5'>
			<Image
				alt='image animation'
				src={'/play/OBJECTS.png'}
				className='absolute z-30 top-[15%] left-0'
				width={150}
				height={150}
			/>
			<div className='h-fit relative z-40 flex flex-col items-center w-full max-w-[85%] gap-5'>
				<div className='flex w-full gap-5'>
					<h1 className='font-[900] text-white text-5xl text-center flex-1'>
						Lorem Ipsum
					</h1>
					<TopButtons className='flex items-center gap-5 flex-[2.5]' />
				</div>
				<div className='flex items-stretch w-full gap-5'>
					<RankBoard className='flex-1' />
					<div className='flex-[2.5]'>{children}</div>
				</div>
				<Navigation />
			</div>
		</main>
	);
};

export default MainPageLayout;
