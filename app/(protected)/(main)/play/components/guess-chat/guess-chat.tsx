import React from 'react';
import ChatBox from '../chat-box/chat-box';
import { guessChats } from '@/data/dummy';
const GuessChat = ({ className }: { className?: string }) => {
	return (
		<ChatBox
			title='GUESS'
			chats={guessChats}
			className={className}
		/>
	);
};

export default GuessChat;
