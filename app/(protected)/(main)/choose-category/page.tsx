import React from 'react';
import GameSettings from './components/game-settings';
import CategoryContainer from './components/category-container';

const page = () => {
	return (
		<div className='flex items-stretch w-full gap-5 flex-col	 h-full'>
			<GameSettings className='w-full flex bg-[#524DBE] rounded-xl' />
			<CategoryContainer className='border-[#524DBE] rounded-xl flex flex-col justify-between border-[3px] p-5 h-full' />
		</div>
	);
};

export default page;
