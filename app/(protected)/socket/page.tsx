'use client';
import { socket } from '@/utils/socket/socket';
import React, { useEffect } from 'react';

const SocketPage = () => {
	function sendMessage() {
		socket.emit('send', { message: 'hello' });
	}
	useEffect(() => {
		function onConnect() {
			socket.on('receive', (data) => {
				alert(data);
			});
		}
		socket.on('connect', onConnect);

		return () => {
			socket.off('connect', onConnect);
		};
	}, []);
	return (
		<div>
			<button onClick={sendMessage}>Send Message</button>
		</div>
	);
};

export default SocketPage;
