import MainLayout from '@/components/layout/main-layout';
import React, { ReactNode } from 'react';

const PlayLayout = ({ children }: { children: ReactNode }) => {
	return (
		<MainLayout
			imgUrl='/play/OBJECTS.png'
			positionImg='top-left'
		>
			{children}
		</MainLayout>
	);
};

export default PlayLayout;
