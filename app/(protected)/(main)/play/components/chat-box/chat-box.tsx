import React from 'react';
import { IChatBox } from './chatBox.type';
import clsx from 'clsx';

const ChatBox = ({
	title,
	chats,
	className,
}: IChatBox & { className?: string }) => {
	return (
		<div
			className={clsx(
				'flex relative flex-col justify-between bg-white rounded-2xl px-6 py-5',
				className
			)}
		>
			<div className='absolute shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)] bg-[#524DBE] py-1.5 rounded-xl text-white font-[900] text-2xl w-[90%] left-[50%] -translate-x-[50%] -top-6'>
				<p className='text-center'>{title}</p>
			</div>
			<div className='max-h-36 mt-3 overflow-y-auto'>
				{chats.map((el, index) => {
					return (
						<div
							className='flex items-center gap-3 text-lg'
							key={index + el.message}
						>
							<p
								style={{ color: `#${el.color}` }}
								className='font-bold'
							>
								{el.user}
							</p>
							<p>{el.message}</p>
						</div>
					);
				})}
			</div>
			<form action=''>
				<input
					type='text'
					className='border-[#524DBE] w-full border px-4 py-1 rounded-lg outline-none'
					id='chat'
					name='chat'
				/>
			</form>
		</div>
	);
};

export default ChatBox;
