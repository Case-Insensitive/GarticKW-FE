import React from 'react';
import GameSettings from './components/game-settings';
import CategoryContainer from './components/category-container';

const page = () => {
	return (
		<div className='flex items-stretch w-full gap-5 flex-col'>
			<GameSettings />
			<CategoryContainer />
		</div>
	);
};

export default page;
