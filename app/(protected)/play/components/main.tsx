'use client';
import RankBoard from '@/components/rank-board/rank-board';
import React from 'react';
import MainPlayBoard from './main-play-board/main-play-board';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';

const Main = ({ className }: { className?: string }) => {
	const searchParams = useSearchParams();
	const isDraw = searchParams.get('isDraw');
	console.log(isDraw);
	return (
		<div className={clsx(className)}>
			<RankBoard className='flex-1' />
			<div className='flex-[2.5] '>
				<MainPlayBoard
					isDraw={Boolean(isDraw)}
					className='flex flex-col gap-y-10'
				/>
			</div>
		</div>
	);
};

export default Main;
