import { categoryButtons } from '@/data/dummy';
import clsx from 'clsx';
import React from 'react';
import CategoryButton from './category-button/category-button';

const CategoryContainer = ({ className }: { className?: string }) => {
	return (
		<div className={clsx(className)}>
			<div className='grid grid-cols-4 gap-5'>
				{categoryButtons.map((el, index) => (
					<CategoryButton
						key={el.imgSrc + index}
						{...el}
					/>
				))}
			</div>
			<h3 className='text-center font-[900] text-2xl text-white'>
				CHOOSE <span className='text-[#FF4B91]'>THEME</span> ONE OF THEM
			</h3>
		</div>
	);
};

export default CategoryContainer;
