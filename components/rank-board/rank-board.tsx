import clsx from 'clsx';
import React from 'react';
import { ranks } from '@/data/dummy';
import RankCard from './rank-card/rank-card';
const RankBoard = ({ className }: { className?: string }) => {
	return (
		<aside className={clsx('bg-[#524DBE] py-5 pl-5 pr-2 rounded-2xl', className)}>
			<div className='overflow-y-auto max-h-[90vh] flex flex-col gap-1'>
				{ranks.map((el) => (
					<RankCard
						key={el.id}
						{...el}
					/>
				))}
			</div>
		</aside>
	);
};

export default RankBoard;
