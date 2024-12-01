import ButtonTransparent from '@/components/button/button-transparent';
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
const TopButtons = ({ className }: { className?: string }) => {
	return (
		<div className={clsx('', className)}>
			<ButtonTransparent className='flex-1'>RANDOM</ButtonTransparent>
			<ButtonTransparent className='flex-1'>FWEF6260</ButtonTransparent>
			<button>
				<Image
					alt='icon-button'
					src={'/play/settings.png'}
					width={30}
					height={30}
				/>
			</button>
		</div>
	);
};

export default TopButtons;
