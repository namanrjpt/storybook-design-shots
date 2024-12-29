import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import './style.css';
import { RxCountdownTimer } from 'react-icons/rx';
import { BiSliderAlt } from 'react-icons/bi';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { HiMiniChevronDown } from 'react-icons/hi2';
import Token from '../ChangeToken/Token';
import Success from '../Success/Success';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import gsap from 'gsap';

const icons = {
	bitcoin:
		'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
	matic:
		'https://static.crypto.com/token/icons/polygon/color_icon.png',
	avax:
		'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=040',
	tether:
		'https://cdn-icons-png.flaticon.com/512/825/825508.png',
	polygon:
		'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=013',
};

const dataCurrency = [
	{
		name: 'USDT',
		icon: icons.tether,
		network: 'BNB',
		networkIcon: icons.bitcoin,
		transferRate: 0.0001,
	},

	{
		name: 'Solana',
		symbol: 'SOL',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
];

const Transfer = () => {
	const mainRef = useRef();
	const [changeToken, setChangeToken] =
		useState('pay');
	const [isEditing, setIsEditing] =
		useState(false);
	const [recipientAddress, setRecipientAddress] =
		useState('0x1234567890');
	const [requestedBy, setRequestedBy] =
		useState('');

	const [transferDetails, setTransferDetails] =
		useState({
			payer: {
				amount: '',
				currency: 'USDT',
				network: 'BNB',
				icon: icons.tether,
				networkIcon: icons.bitcoin,
				transferRate: 1.25,
			},
			receiver: {
				amount: '',
				name: 'Solana',
				currency: 'SOL',
				network: 'Solana',
				icon:
					'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
				networkIcon:
					'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
				transferRate: 0.1,
			},
		});

	const swapCurrency = () => {
		const temp = transferDetails.payer;
		setTransferDetails({
			...transferDetails,
			payer: transferDetails.receiver,
			receiver: temp,
		});
	};

	const getTokenData = (data) => {
		setTransferDetails({
			...transferDetails,
			[requestedBy]: {
				...transferDetails[requestedBy],
				currency: data.token,
				network: data.network,
				icon: data.tokenIcon,
				networkIcon: data.networkIcon,
			},
		});
		setChangeToken('pay');
	};

	// Handle payer amount change
	const handlePayerAmountChange = (e) => {
		const payerAmount = parseFloat(
			e.target.value || 0
		);
		setTransferDetails((prev) => ({
			...prev,
			payer: {
				...prev.payer,
				amount: payerAmount,
			},
			receiver: {
				...prev.receiver,
				amount: (
					payerAmount * prev.payer.transferRate
				).toFixed(2),
			},
		}));
	};

	// Handle receiver amount change
	const handleReceiverAmountChange = (e) => {
		const receiverAmount = parseFloat(
			e.target.value || 0
		);
		setTransferDetails((prev) => ({
			...prev,
			receiver: {
				...prev.receiver,
				amount: receiverAmount,
			},
			payer: {
				...prev.payer,
				amount: (
					receiverAmount / prev.receiver.transferRate
				).toFixed(2),
			},
		}));
	};

	useEffect(() => {
		if (changeToken == 'pay') {
			gsap.to(mainRef.current, {
				height: '75vh',
				duration: 0.5,
			});
		}
		if (changeToken == 'success') {
			gsap.to(mainRef.current, {
				height: '60vh',
				duration: 0.5,
			});
		}
	}, [changeToken]);

	return (
		<div
			ref={mainRef}
			className='h-[60dvh] w-full flex items-center justify-center flex-col'
		>
			{changeToken == 'transfer' && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.5 }}
						className='h-full w-full'
					>
						<Token
							data={getTokenData}
							requestedBy={requestedBy}
							close={() => {
								setChangeToken('pay');
							}}
						/>
					</motion.div>
				</AnimatePresence>
			)}
			{changeToken == 'pay' && (
				<AnimatePresence>
					<motion.div
						initial={{
							opacity: 0,
							scale: 1.05,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 1.05,
						}}
						transition={{
							duration: 0.5,
						}}
						className='h-full w-full py-8 px-8'
					>
						<div className='flex justify-between items-center w-full'>
							<h3 className='text-white text-3xl font-semibold'>
								Transfer
							</h3>
							<div className='flex items-center gap-2'>
								<div className='h-10 w-10 border border-white/30 rounded-full flex items-center justify-center text-white text-base'>
									<RxCountdownTimer />
								</div>
								<div className='h-10 w-10 border border-white/30 rounded-full flex items-center justify-center text-white text-base'>
									<BiSliderAlt />
								</div>
							</div>
						</div>
						<div className='w-full flex justify-end items-center gap-2 pt-4 pb-2 px-2'>
							<p className='text-white/40 text-sm'>
								Balance : 123454
							</p>
							<span className='inline-block text-sm text-white hover:cursor-pointer'>
								MAX
							</span>
						</div>
						<div className='relative w-full p-1'>
							<div
								className='absolute h-11 top-[50%] left-[50%] aspect-square bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2'
								onClick={swapCurrency}
							>
								<FaArrowRightArrowLeft className='text-black rotate-90' />
							</div>
							<div className='flex items-stretch border border-white/10 rounded-xl'>
								<div className='w-[70%] flex flex-col px-2 py-1'>
									<p className='text-white/50 font-light text-sm p-2 pb-0'>
										Pay:
									</p>
									<input
										placeholder='0.00'
										type='text'
										onChange={handlePayerAmountChange}
										value={transferDetails.payer.amount}
										className='bg-transparent outline-none text-white w-full p-2 text-2xl placeholder-white placeholder:font-normal'
										onWheel={(e) => e.target.blur()}
									/>
								</div>
								<div
									className='flex items-center rounded-[.75rem] bg-white/15 w-[30%] m-3'
									onClick={() => {
										setRequestedBy('payer');
										setChangeToken('transfer');
									}}
								>
									<div className='relative w-8 h-8 mx-2'>
										<img
											src={transferDetails.payer.icon}
											alt=''
											className='w-10 object-contain aspect-square rounded-full'
										/>
										<img
											src={transferDetails.payer.networkIcon}
											alt=''
											className='absolute w-4 h-4 top-[55%] right-[-0.2rem]'
										/>
									</div>
									<div className='flex flex-col ml-2 w-[45%]'>
										<p className='text-white text-sm'>
											{transferDetails.payer.currency}
										</p>
										<p className='text-white/50 text-xs'>
											{transferDetails.payer.network}
										</p>
									</div>
									<HiMiniChevronDown className='text-white mr-2' />
								</div>
							</div>
							<div className='flex mt-3 items-stretch border border-white/10 rounded-xl'>
								<div className='w-[70%] flex flex-col px-2 py-1'>
									<p className='text-white/50 font-light text-sm p-2 pb-0'>
										Receive:
									</p>
									<input
										placeholder='0.00'
										type='text'
										onChange={handleReceiverAmountChange}
										value={transferDetails.receiver.amount}
										className='bg-transparent outline-none text-white w-full p-2 text-2xl placeholder-white placeholder:font-normal'
										onWheel={(e) => e.target.blur()}
									/>
								</div>
								<div
									className='flex items-center rounded-[.75rem] bg-white/15 w-[30%] m-3'
									onClick={() => {
										setRequestedBy('receiver');
										setChangeToken('transfer');
									}}
								>
									<div className='relative w-8 h-8 mx-2'>
										<img
											src={transferDetails.receiver.icon}
											alt=''
											className='w-10 object-contain aspect-square rounded-full'
										/>
										<img
											src={
												transferDetails.receiver.networkIcon
											}
											alt=''
											className='absolute w-4 h-4 top-[55%] right-[-0.2rem]'
										/>
									</div>
									<div className='flex flex-col ml-2 w-[45%]'>
										<p className='text-white text-sm'>
											{transferDetails.receiver.currency}
										</p>
										<p className='text-white/50 text-xs'>
											{transferDetails.receiver.network}
										</p>
									</div>
									<HiMiniChevronDown className='text-white mr-2' />
								</div>
							</div>
						</div>
						<div className='w-full flex flex-col mt-2'>
							<p className='text-white/80 text-base mt-3'>
								Recipient Address
							</p>
							<div className='flex w-full overflow-hidden rounded-xl border border-white/10 mt-2'>
								<input
									disabled={!isEditing}
									type='text'
									value={recipientAddress}
									onChange={(e) =>
										setRecipientAddress(e.target.value)
									}
									className='bg-white/10 outline-none font-light text-white/40 w-full p-2 pl-4 text-lg placeholder-white placeholder:font-normal select-none'
								/>
								<button
									className='bg-white/10 text-white px-5 font-light rounded-r-lg'
									onClick={() => setIsEditing(!isEditing)}
								>
									{isEditing ? 'Save' : 'Edit'}
								</button>
							</div>
						</div>
						<div className='flex justify-between items-center w-full mt-5 px-1'>
							<p className='text-white font-light'>
								Slippage
							</p>
							<p className='text-white font-light'>
								{transferDetails.payer.amount > 0
									? '0.5'
									: '0'}
							</p>
						</div>
						<div className='flex justify-between items-center w-full mt-3 px-1'>
							<p className='text-white font-light'>
								Gas on Destination
							</p>
							<p className='text-white font-light'>
								{transferDetails.payer.amount > 0
									? '0.5 BNB'
									: '0 BNB'}
							</p>
						</div>
						<div className='flex justify-between items-center w-full mt-3 px-1'>
							<p className='text-white/40 font-light'>
								Fee
							</p>
							<p className='text-white/40 font-light'>
								{transferDetails.payer.amount > 0
									? (
											transferDetails.payer.amount * 0.005
									  ).toFixed(2)
									: '0.0'}
							</p>
						</div>
						<div className='flex justify-between items-center w-full mt-3 px-1'>
							<p className='text-white/40 font-light'>
								Gas Cost
							</p>
							<p className='text-white/40 font-light'>
								{transferDetails.payer.amount > 0
									? (
											transferDetails.payer.amount * 0.005
									  ).toFixed(2)
									: '0.0'}
							</p>
						</div>
						<div className='flex justify-between items-center w-full mt-3 px-1'>
							<p className='text-white/40 font-light'>
								Estimated time for transfer
							</p>
							<p className='text-white/40 font-light'>
								{transferDetails.payer.amount > 0
									? '2 min'
									: '0 min'}
							</p>
						</div>
						{transferDetails.payer.amount > 0 ? (
							<AnimatePresence>
								<motion.button
									initial={{ opacity: 0, scale: 1 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 1 }}
									transition={{ duration: 0.5 }}
									className='w-full bg-gradient-to-r from-red-500 via-orange-400 to-green-500 text-white font-light py-3 px-6 rounded-full focus:outline-none hover:opacity-90 transition duration-300 mt-8 text-lg focus:scale-90 active:scale-95'
									onClick={() => setChangeToken('success')}
								>
									Transfer
								</motion.button>
							</AnimatePresence>
						) : (
							<div className='rounded-full bg-[#474747] p-3 flex items-center justify-center w-full text-lg font-light text-white/70 mt-8'>
								Enter Amount
							</div>
						)}
					</motion.div>
				</AnimatePresence>
			)}
			{changeToken == 'success' && (
				<AnimatePresence>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{
							duration: 0.5,
						}}
					>
						<Success
							close={() => {
								setChangeToken('pay');
							}}
						/>
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	);
};

export default Transfer;
