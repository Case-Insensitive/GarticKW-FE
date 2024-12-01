import React from 'react';
import Image from 'next/image';
import { IRankCard } from './rankCard.type';
const ProfilePhoto = ({ photo }: Pick<IRankCard, 'photo'>) => {
	return (
		<div>
			<Image
				alt='profile-pic'
				src={photo}
				className='rounded-full'
				width={50}
				height={50}
			/>
		</div>
	);
};

export default ProfilePhoto;
