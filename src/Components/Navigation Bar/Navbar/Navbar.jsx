import React, {
	useState,
	useEffect,
} from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMoonOutline } from 'react-icons/io5';
import { LuBell } from 'react-icons/lu';
import { HiOutlineChevronUp } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import gsap from 'gsap';

const Navbar = () => {
	const [menuItems, setMenuItems] = useState([
		{
			id: 1,
			selected: false,
			title: 'Dashboard',
			icon: <AiOutlineHome />,
			subItems: [
				{
					id: 1,
					title: 'Home',
					icon: <AiOutlineHome />,
				},
				{
					id: 2,
					title: 'Posts',
					icon: <FiImage />,
				},
				{
					id: 3,
					title: 'Users',
					icon: <FaUser />,
				},
			],
		},
		{
			id: 2,
			selected: false,
			title: 'Analytics',
			icon: <AiOutlineHome />,
		},
		{
			id: 3,
			selected: false,
			title: 'Products',
			icon: <AiOutlineHome />,
		},
		{
			id: 4,
			selected: false,
			title: 'Settings',
			icon: <AiOutlineHome />,
		},
	]);

	const NavbarConfig = {
		avatar: {
			src: 'https://detectortools.ai/wp-content/uploads/2024/07/How-to-Detect-AI-Generated-Fake-Profile-Pictures-5.webp',
			alt: 'Avatar',
		},
		isNotificationAvailable: true,
	};

	const [selectedItem, setSelectedItem] =
		useState(-1);

	useEffect(() => {
		menuItems.forEach((_, index) => {
			const subItemWrapper = document.querySelector(
				`.subItemWrapper-${index}`
			);

			if (subItemWrapper) {
				gsap.to(subItemWrapper, {
					duration: 0.3,
					opacity: 0,
					height: 0,
					display: 'none',
					ease: 'power4.out',
				});
			}
		});

		if (
			menuItems[selectedItem]?.subItems?.length > 0
		) {
			const subItemWrapper = document.querySelector(
				`.subItemWrapper-${selectedItem}`
			);

			if (subItemWrapper) {
				subItemWrapper.style.display = 'block';
				subItemWrapper.style.height = 'auto';
				const fullHeight =
					subItemWrapper.scrollHeight;

				subItemWrapper.style.height = '0';

				gsap.to(subItemWrapper, {
					duration: 0.5,
					opacity: 1,
					height: fullHeight,
					display: 'block',
					ease: 'power4.inOut',
					onComplete: () => {
						subItemWrapper.style.height = 'auto';
					},
				});
			}
		}
	}, [selectedItem, menuItems]);

	const handleMenuItemClick = (item) => {
		setMenuItems(
			menuItems.map((menuItem) =>
				menuItem.id === item.id
					? { ...menuItem, selected: true }
					: { ...menuItem, selected: false }
			)
		);
		setSelectedItem(item.id - 1);
	};

	return (
		<div className='w-full p-3 rounded-xl min-h-[4.5rem] bg-[#161616] flex justify-between items-center'>
			<div className='px-7 flex gap-4 items-center'>
				<div className='rounded-[100%] bg-blue-500 w-[2rem] aspect-square flex items-center justify-center'>
					<p className='line-clamp-1 text-black font-bold'>
						D
					</p>
				</div>
				<p className='text-white font-bold text-[1.4rem]'>
					deFransz
				</p>
			</div>
			<div className='flex gap-6 md:flex md:gap-2'>
				{menuItems.map((item, index) => (
					<div
						key={item.id}
						onClick={() => handleMenuItemClick(item)}
						className={`${
							item.selected ? 'bg-[#27498266]' : ''
						} relative flex min-w-[7rem] gap-3 items-center justify-center py-[0.6rem] px-5 rounded-lg transition-all hover:cursor-pointer`}
					>
						<p
							className={`${
								item.selected
									? 'text-[#65AAF3]'
									: 'text-white/80'
							} font-normal text-[1.05rem] transition-all`}
						>
							{item.title}
						</p>
						{item.subItems?.length > 0 && (
							<HiOutlineChevronUp
								style={
									item.selected
										? { transform: 'rotate(180deg)' }
										: {}
								}
								size={20}
								className={`ml-1 transition-all ${
									item.selected
										? 'text-[#65AAF3]'
										: 'text-white/80'
								}`}
							/>
						)}
						{item.subItems?.length > 0 && (
							<div
								className={`subItemWrapper subItemWrapper-${index} absolute top-[100%] mt-2 w-full bg-white rounded-xl overflow-hidden`}
								style={{
									opacity: 0,
									height: 0,
									display: 'none',
								}}
							>
								{item.subItems.map((subItem) => (
									<div
										key={subItem.id}
										className='subItem w-full p-3 flex items-center justify-start gap-2 transition-all hover:bg-slate-200 group'
									>
										<div className='icon transition-all transform group-hover:translate-x-2 text-black/70'>
											{subItem.icon}
										</div>
										<p className='transition-all text-black/80 text-sm font-semibold transform group-hover:translate-x-2'>
											{subItem.title}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
			<div className='flex items-center justify-center gap-8'>
				<IoMoonOutline
					size={22}
					className='text-white hover:scale-110 hover:cursor-pointer transition-all'
				/>
				<div className='relative hover:scale-110 transition-all hover:cursor-pointer'>
					<LuBell
						size={22}
						className='text-white transition-all'
					/>
					{NavbarConfig.isNotificationAvailable && (
						<span className='animate-pulse absolute top-[-1px] right-[1px] w-[8px] block aspect-square rounded-full bg-orange-400'></span>
					)}
				</div>
				<div className='w-[3rem] aspect-square rounded-full overflow-hidden hover:bg-black hover:opacity-90 '>
					<img
						className='object-cover w-full h-full hover:cursor-pointer hover:scale-105 transition-all'
						src={NavbarConfig.avatar.src}
						alt={NavbarConfig.avatar.alt}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
