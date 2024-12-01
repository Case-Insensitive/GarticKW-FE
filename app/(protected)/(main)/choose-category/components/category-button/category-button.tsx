import Image from 'next/image';
import React from 'react';
import { ICategoryButton } from './categoryButton.type';

const CategoryButton = ({ imgSrc, title }: ICategoryButton) => {
	return (
		<button className='bg-[#524DBE] p-4 rounded-lg flex flex-col items-center gap-1'>
			<Image
				alt='logo'
				src={imgSrc}
				height={90}
				width={125}
			/>
			<span className='text-white font-bold'>{title}</span>
		</button>
	);
};

export default CategoryButton;
