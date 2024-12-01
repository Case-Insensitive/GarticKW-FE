'use client';
import { useSearchParams } from 'next/navigation';
import ButtonBox from './components/button-box/button-box';
import GuessChat from './components/guess-chat/guess-chat';
import InteractiveChat from './components/interactive-chat/interactive-chat';
import WhiteBoard from './components/whiteboard/whiteboard';
const Play = () => {
	const searchParams = useSearchParams();
	const isDraw = searchParams.get('isDraw');
	return (
		<div className={'flex flex-col gap-y-10 '}>
			<WhiteBoard className='h-[65%]' />
			<div className='flex items-stretch gap-5 h-[35%]'>
				{isDraw ? <ButtonBox /> : <GuessChat className='flex-1' />}
				<InteractiveChat className='flex-1' />
			</div>
		</div>
	);
};

export default Play;
