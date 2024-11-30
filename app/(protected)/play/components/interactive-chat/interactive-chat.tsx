import React from 'react';
import ChatBox from '../chat-box/chat-box';
import { guessChats } from '@/data/dummy';

const InteractiveChat = ({ className }: { className?: string }) => {
	return (
		<ChatBox
			title='CHAT'
			chats={guessChats}
			className={className}
		/>
	);
};

export default InteractiveChat;
