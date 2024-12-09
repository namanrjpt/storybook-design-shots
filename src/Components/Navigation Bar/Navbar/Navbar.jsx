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
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
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
				{ id: 2, title: 'Posts', icon: <FiImage /> },
				{ id: 3, title: 'Users', icon: <FaUser /> },
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

	const [isSidebarOpen, setIsSidebarOpen] =
		useState(false);

	// Sidebar toggle animation
	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);

		const sidebar =
			document.querySelector('.sidebar');
		if (isSidebarOpen) {
			gsap.to(sidebar, {
				x: '-100%',
				duration: 0.5,
				ease: 'power4.out',
			});
		} else {
			gsap.to(sidebar, {
				x: '0%',
				duration: 0.5,
			});
		}
	};

	const handleMenuItemClick = (item) => {
		setMenuItems((prevItems) =>
			prevItems.map((menuItem) =>
				menuItem.id === item.id
					? {
							...menuItem,
							selected: !menuItem.selected,
					  }
					: { ...menuItem, selected: false }
			)
		);
	};

	return (
		<>
			{/* Navbar */}
			<div className='w-full p-3 rounded-xl min-h-[4.5rem] bg-[#161616] flex justify-between items-center'>
				{/* Hamburger Menu */}
				<div className='md:hidden'>
					<LuMenu
						size={24}
						className='text-white hover:cursor-pointer'
						onClick={toggleSidebar}
					/>
				</div>
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
				<div className='hidden md:flex gap-6'>
					{menuItems.map((item) => (
						<div
							key={item.id}
							onClick={() => handleMenuItemClick(item)}
							className={`${
								item.selected ? 'bg-[#27498266]' : ''
							} relative flex gap-3 items-center justify-center py-[0.6rem] px-5 rounded-lg transition-all duration-300 hover:cursor-pointer`}
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
										!item.selected
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
							{/* SubItems */}
							{item.selected && item.subItems && (
								<div className='absolute top-[100%] left-0 mt-2 w-full bg-white rounded-md overflow-hidden'>
									{item.subItems.map((subItem) => (
										<div
											key={subItem.id}
											className='subItem w-full p-3 flex items-center justify-start gap-4 transition-all hover:bg-slate-200 group'
										>
											<p className='transition-all text-black text-md font-base transform group-hover:translate-x-2'>
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
					<div className='w-[3rem] aspect-square rounded-full overflow-hidden hover:bg-black hover:opacity-90'>
						<img
							className='object-cover w-full h-full hover:cursor-pointer hover:scale-105 transition-all'
							src={NavbarConfig.avatar.src}
							alt={NavbarConfig.avatar.alt}
						/>
					</div>
				</div>
			</div>

			{/* Sidebar */}
			<div
				className='sidebar fixed top-0 left-0 w-[80%] h-full bg-[#161616] z-50 transform -translate-x-full transition-transform duration-500'
				style={{ x: '-100%' }}
			>
				<div className='flex justify-between items-center p-5'>
					<p className='text-white font-bold text-[1.4rem]'>
						Menu
					</p>
					<IoMdClose
						size={24}
						className='text-white hover:cursor-pointer'
						onClick={toggleSidebar}
					/>
				</div>
				<div className='p-5'>
					{menuItems.map((item) => (
						<div key={item.id}>
							<div
								onClick={() => handleMenuItemClick(item)}
								className='p-3 text-white hover:bg-[#27498266] rounded-lg cursor-pointer'
							>
								{item.title}
							</div>
							{/* SubItems for mobile */}
							{item.selected && item.subItems && (
								<div className='pl-5'>
									{item.subItems.map((subItem) => (
										<div
											key={subItem.id}
											className='p-3 text-white hover:bg-[#27498266] rounded-lg cursor-pointer'
										>
											{subItem.title}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
