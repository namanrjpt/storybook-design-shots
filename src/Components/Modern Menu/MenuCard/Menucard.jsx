import React, {
	useState,
	useRef,
	useEffect,
} from 'react';
import { GoArrowRight } from 'react-icons/go';
import gsap from 'gsap';
import './style.scss';

const Menucard = () => {
	const [menuItems, setMenuItems] = useState([
		{
			id: 1,
			title: 'Home',
			link: '/',
		},
		{
			id: 2,
			title: 'About Me',
			link: '/about-me',
		},
		{
			id: 3,
			title: 'Works',
			link: '/works',
		},
		{
			id: 4,
			title: 'Insights',
			link: '/insights',
		},
	]);

	const formatNumber = (number) => {
		if (number < 10) {
			return '0' + number;
		}
	};

	return (
		<div className='flex flex-col w-full overflow-clip'>
			{menuItems.map((item, index) => (
				<div
					key={item.id}
					className='menuItem w-full flex items-center justify-between gap-3'
					onClick={() => {
						window.location.href = item.link;
					}}
				>
					<div className='flex items-baseline gap-4'>
						<p className='text-white text-[6rem] font-semibold'>
							{item.title}
						</p>
						<p className='text-white/50 text-xl font-light'>
							({formatNumber(item.id)})
						</p>
					</div>
					<div className='buttonUrl rounded-full flex items-center justify-center py-5 px-8 border border-white'>
						<GoArrowRight className='text-white text-[1.75rem]' />
					</div>
				</div>
			))}
		</div>
	);
};

export default Menucard;
