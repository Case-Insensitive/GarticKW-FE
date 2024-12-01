import React from 'react';
import { IRankCard } from './rankCard.type';
import clsx from 'clsx';
import ProfilePhoto from './profile-photo';

const RankCard = ({
	color,
	photo,
	point,
	userName,
	className,
}: IRankCard & { className?: string }) => {
	return (
		<div
			style={{ backgroundColor: `#${color}` }}
			className={clsx('flex gap-3 px-5 py-3 rounded-2xl items-center', className)}
		>
			<ProfilePhoto photo={photo} />
			<div className='flex flex-col'>
				<p className='text-[#FFFFFF] text-2xl font-[900]'>{userName}</p>
				<p className=' text-[#FFFFFF] text-lg font-normal'>{point} point</p>
			</div>
		</div>
	);
};

export default RankCard;
