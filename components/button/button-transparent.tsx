import clsx from 'clsx';
import React, { ReactNode } from 'react';

const ButtonTransparent = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return <button className={clsx('bg-transparent border-[3px] border-[#524DBE] rounded-full py-2 text-white', className)}>{children}</button>;
};

export default ButtonTransparent;
