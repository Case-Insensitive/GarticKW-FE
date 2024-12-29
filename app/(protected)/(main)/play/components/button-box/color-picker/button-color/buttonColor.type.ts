import { ButtonHTMLAttributes } from 'react';

export type IButtonColor = ButtonHTMLAttributes<HTMLButtonElement> & {
	color: string;
	isActive?: boolean;
};
