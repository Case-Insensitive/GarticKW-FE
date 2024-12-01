import Navigation from '@/components/navigation/navigation';
import Main from './components/main';
import TopButtons from './components/top-buttons/top-buttons';
const Play = () => {
	return (
		<div className='h-fit relative z-40 flex flex-col items-center w-full max-w-[85%] gap-5'>
			<div className='flex w-full gap-5'>
				<h1 className='font-[900] text-white text-5xl text-center flex-1'>
					Lorem Ipsum
				</h1>
				<TopButtons className='flex items-center gap-5 flex-[2.5]' />
			</div>
			<Main className='flex items-stretch w-full gap-5' />
			<Navigation />
		</div>
	);
};

export default Play;
