import clsx from 'clsx';
import React, { ReactNode } from 'react';

const Word = ({ children }: { children: ReactNode; isFilled: boolean }) => {
	return <p className={clsx('text-[#000000] font-[900] text-2xl')}>{children}</p>;
};

export default Word;
