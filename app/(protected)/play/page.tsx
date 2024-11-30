import React from 'react';
import ButtonTransparent from '@/components/button/button-transparent';
import Navigation from '@/components/navigation/navigation';
import RankBoard from '@/components/rank-board/rank-board';
import WhiteBoard from './components/whiteboard/whiteboard';
import Image from 'next/image';
import GuessChat from './components/guess-chat/guess-chat';
import InteractiveChat from './components/interactive-chat/interactive-chat';
const Play = () => {
	return (
		<div className='h-fit relative z-40 flex flex-col items-center w-full max-w-[85%] gap-5'>
			<div className='flex w-full gap-5'>
				<h1 className='font-[900] text-white text-5xl text-center flex-1'>
					Lorem Ipsum
				</h1>
				<div className='flex items-center gap-5 flex-[2.5]'>
					<ButtonTransparent className='flex-1'>RANDOM</ButtonTransparent>
					<ButtonTransparent className='flex-1'>FWEF6260</ButtonTransparent>
					<button>
						<Image
							alt='icon-button'
							src={'/play/settings.png'}
							width={30}
							height={30}
						/>
					</button>
				</div>
			</div>
			<div className='flex items-stretch w-full gap-5'>
				<div className='flex-1'>
					<RankBoard className='' />
				</div>

				<div className='flex-[2.5] flex flex-col gap-y-10'>
					<WhiteBoard className='h-[65%]' />
					<div className='flex items-stretch gap-5 h-[35%]'>
						<GuessChat className='flex-1' />
						<InteractiveChat className='flex-1' />
					</div>
				</div>
			</div>
			<Navigation />
		</div>
	);
};

export default Play;
