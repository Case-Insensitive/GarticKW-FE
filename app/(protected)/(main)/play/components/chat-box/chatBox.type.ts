export type IChatBox = {
	id?: string;
	title: string;
	chats: { user: string; message: string; color: string }[];
};
