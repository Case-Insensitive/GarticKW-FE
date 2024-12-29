'use client';
import ButtonTransparent from '@/components/button/button-transparent';
import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ShareLinkModal from '@/components/modal/share-link-modal';
const TopButtons = ({ className }: { className?: string }) => {
	const [isButtonChecked, setIsButtonChecked] = useState(false);
	const [modalShareLinkActive, setModalShareLinkActive] = useState(false);
	return (
		<div className={clsx('', className)}>
			<ButtonTransparent className='flex-1'>RANDOM</ButtonTransparent>
			<ButtonTransparent className='flex-1'>FWEF6260</ButtonTransparent>
			<div className='dropdown dropdown-end'>
				<button
					tabIndex={0}
					role='button'
				>
					<Image
						alt='icon-button'
						src={'/play/settings.png'}
						width={30}
						height={30}
					/>
				</button>

				<ul
					tabIndex={0}
					className='font-[700] dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
				>
					<li>
						<div className='flex items-center justify-between'>
							<p>Sound</p>
							<input
								onClick={() => setIsButtonChecked((prev) => !prev)}
								type='checkbox'
								className={clsx(
									'toggle border-blue-500 bg-white  hover:bg-white',
									isButtonChecked ? '[--tglbg:#D9D9D9]' : '[--tglbg:#524DBE]'
								)}
							/>
						</div>
					</li>
					<div className='divider !my-0'></div>
					<li>
						<button
							onClick={(active) => setModalShareLinkActive(() => !active)}
						>
							Copy Room Link
						</button>
						<ShareLinkModal isActive={modalShareLinkActive} />
					</li>
					<div className='divider !my-0'></div>
					<li>
						<button>Exit</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopButtons;
