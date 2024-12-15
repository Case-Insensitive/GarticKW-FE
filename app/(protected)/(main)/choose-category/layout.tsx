import MainLayout from '@/components/layout/main-layout';
import React, { ReactNode } from 'react';

const ChooseCategoryLayout = ({ children }: { children: ReactNode }) => {
	return <MainLayout imgUrl='/animation.png' positionImg='bottom-right'>{children}</MainLayout>;
};

export default ChooseCategoryLayout;
