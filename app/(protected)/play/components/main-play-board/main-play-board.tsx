import React from 'react';
import WhiteBoard from '../whiteboard/whiteboard';
import GuessChat from '../guess-chat/guess-chat';
import InteractiveChat from '../interactive-chat/interactive-chat';
import clsx from 'clsx';
import ButtonBox from '../button-box/button-box';

const MainPlayBoard = ({
	className,
	isDraw,
}: {
	className?: string;
	isDraw: null | boolean | undefined;
}) => {
	return (
		<div className={clsx(className)}>
			<WhiteBoard className='h-[65%]' />
			<div className='flex items-stretch gap-5 h-[35%]'>
				{isDraw ? <ButtonBox /> : <GuessChat className='flex-1' />}
				<InteractiveChat className='flex-1' />
			</div>
		</div>
	);
};

export default MainPlayBoard;
