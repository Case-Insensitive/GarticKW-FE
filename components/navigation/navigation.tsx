import Link from 'next/link';
import React from 'react';

const Navigation = ({ className }: { className?: string }) => {
	return (
		<nav className={className}>
			<ul className='flex items-stretch gap-5 text-[#FFFFFF]'>
				<li>
					<Link href={'/'}>TERMS OF SERVICE</Link>
				</li>
				<div className='w-[1px] bg-white'></div>
				<li>
					<Link href={'/'}>PRIVACY</Link>
				</li>
				<div className='w-[1px] bg-white'></div>
				<li>
					<Link href={'/'}>ASSETS</Link>
				</li>
				<div className='w-[1px] bg-white'></div>
				<li>
					<Link href={'/'}>BLOG</Link>
				</li>
				<div className='w-[1px] bg-white'></div>
				<li>
					<Link href={'/'}>CONTACT</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
