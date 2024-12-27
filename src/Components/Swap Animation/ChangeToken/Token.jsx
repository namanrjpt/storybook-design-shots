import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const cryptocurrencies = [
	{
		name: 'Solana',
		symbol: 'SOL',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Serum',
		symbol: 'SRM',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/serum-srm-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Raydium',
		symbol: 'RAY',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/raydium-ray-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Mango Markets',
		symbol: 'MNGO',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/mango-markets-mngo-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Bonfida',
		symbol: 'FIDA',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/bonfida-fida-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Step Finance',
		symbol: 'STEP',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/step-finance-step-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},
	{
		name: 'Star Atlas',
		symbol: 'ATLAS',
		network: 'Solana',
		cryptoIcon:
			'https://cryptologos.cc/logos/star-atlas-atlas-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/solana-sol-logo.png?v=025',
	},

	// 6. Avalanche Network
	{
		name: 'Avalanche',
		symbol: 'AVAX',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Trader Joe',
		symbol: 'JOE',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/trader-joe-joe-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Benqi',
		symbol: 'QI',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/benqi-qi-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Pangolin',
		symbol: 'PNG',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/pangolin-png-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Platypus',
		symbol: 'PTP',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/platypus-ptp-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Yield Yak',
		symbol: 'YY',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/yield-yak-yy-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},
	{
		name: 'Snowball',
		symbol: 'SNOB',
		network: 'Avalanche',
		cryptoIcon:
			'https://cryptologos.cc/logos/snowball-snob-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025',
	},

	// 7. Tron Network
	{
		name: 'Tron',
		symbol: 'TRX',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'JUST',
		symbol: 'JST',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/just-jst-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'USDT (Tron)',
		symbol: 'USDT',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/tether-usdt-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'WINKLink',
		symbol: 'WIN',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/wink-win-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'Sun Token',
		symbol: 'SUN',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/sun-sun-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'BitTorrent',
		symbol: 'BTT',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/bittorrent-btt-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'APENFT',
		symbol: 'NFT',
		network: 'Tron',
		cryptoIcon:
			'https://cryptologos.cc/logos/apenft-nft-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/tron-trx-logo.png?v=025',
	},
	{
		name: 'Bitcoin',
		symbol: 'BTC',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Wrapped Bitcoin',
		symbol: 'WBTC',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Stacks',
		symbol: 'STX',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/stacks-stx-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Bitcoin Cash',
		symbol: 'BCH',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Bitcoin SV',
		symbol: 'BSV',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Litecoin',
		symbol: 'LTC',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},
	{
		name: 'Dogecoin',
		symbol: 'DOGE',
		network: 'Bitcoin',
		cryptoIcon:
			'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025',
	},

	// 2. Ethereum Network
	{
		name: 'Ethereum',
		symbol: 'ETH',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'Tether',
		symbol: 'USDT',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/tether-usdt-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'Chainlink',
		symbol: 'LINK',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/chainlink-link-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'Wrapped Ethereum',
		symbol: 'WETH',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/wrapped-ethereum-weth-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'USD Coin',
		symbol: 'USDC',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'Dai',
		symbol: 'DAI',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},
	{
		name: 'Shiba Inu',
		symbol: 'SHIB',
		network: 'Ethereum',
		cryptoIcon:
			'https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
	},

	// 3. Binance Smart Chain (BSC)
	{
		name: 'Binance Coin',
		symbol: 'BNB',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'PancakeSwap',
		symbol: 'CAKE',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'SafeMoon',
		symbol: 'SAFEMOON',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'Binance USD',
		symbol: 'BUSD',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'Venus',
		symbol: 'XVS',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/venus-xvs-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'BakeryToken',
		symbol: 'BAKE',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/bakerytoken-bake-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},
	{
		name: 'Ellipsis',
		symbol: 'EPS',
		network: 'Binance Smart Chain',
		cryptoIcon:
			'https://cryptologos.cc/logos/ellipsis-eps-logo.png?v=025',
		networkIcon:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHVZiXbO3ml-_IyI9cWz9mf5lIzFYog-fRw&s',
	},

	// 4. Polygon Network
	{
		name: 'Polygon',
		symbol: 'MATIC',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'QuickSwap',
		symbol: 'QUICK',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/quickswap-quick-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'Aave',
		symbol: 'AAVE',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/aave-aave-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'Curve Finance',
		symbol: 'CRV',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'USD Coin',
		symbol: 'USDC',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'Dai',
		symbol: 'DAI',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
	{
		name: 'SushiSwap',
		symbol: 'SUSHI',
		network: 'Polygon',
		cryptoIcon:
			'https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=025',
		networkIcon:
			'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
	},
];
const Token = ({ data, close, requestedBy }) => {
	const iconsRef = useRef(null);
	const currencyRef = useRef(null);
	const [selectedNetwork, setSelectedNetwork] =
		useState('Solana');
	const [selectedToken, setSelectedToken] =
		useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (selectedToken != '') {
			setTimeout(() => {
				data({
					requestedBy: requestedBy,
					token: selectedToken,
					network: selectedNetwork,
					tokenIcon: cryptocurrencies.find(
						(crypto) => crypto.symbol === selectedToken
					).cryptoIcon,
					networkIcon: cryptocurrencies.find(
						(crypto) =>
							crypto.network === selectedNetwork
					).networkIcon,
				});
			}, 1000);
		}
	}, [selectedToken]);

	useEffect(() => {
		if (iconsRef.current) {
			gsap.fromTo(
				iconsRef.current.children,
				{ opacity: 0, y: 10 },
				{
					opacity: 1,
					y: 0,
					duration: 0.1,
					stagger: 0.1,
				}
			);
		}
		if (currencyRef.current) {
			gsap.from(currencyRef.current.children, {
				opacity: 0,
				duration: 0.5,
			});
		}
	}, []);

	return (
		<div className='h-full w-full py-8 px-8 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<h2 className='text-white text-3xl'>
					Select a Token
				</h2>
				<span
					onClick={close}
					className='border border-white/20 rounded-full p-3'
				>
					<IoMdClose className='text-white' />
				</span>
			</div>
			<div className='flex flex-col mt-3'>
				<p className='text-white font-thin'>
					Network
				</p>
				<div
					ref={iconsRef}
					className='icons gradient-none w-full max-w-full mt-3 overflow-hidden overflow-x-auto pb-5 flex items-center gap-2'
				>
					{[
						...new Set(
							cryptocurrencies.map(
								(currency) => currency.network
							)
						),
					].map((network) => {
						return (
							<div
								key={network}
								title={network}
								className={`child flex bg-white/10 aspect-square min-w-[6rem] max-w-[6rem] justify-center items-center rounded-xl transition-all ${
									selectedNetwork === network
										? 'gradient-border'
										: 'gradient-none'
								}`}
								onClick={() =>
									setSelectedNetwork(network)
								}
							>
								<div className='inner flex flex-col items-center'>
									<img
										src={
											cryptocurrencies.find(
												(crypto) => crypto.network === network
											).networkIcon
										}
										alt={
											cryptocurrencies.find(
												(crypto) => crypto.network === network
											).network
										}
										className='h-8 w-8 object-contain'
									/>
									<p className='text-white text-center line-clamp-1 text-sm mt-2'>
										{network}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='border border-white/10 rounded-lg w-full p-3 mt-10 flex items-center'>
				<input
					placeholder='Token name or address'
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='bg-transparent outline-none w-full text-white placeholder-white/50'
				/>
				<IoSearchOutline className='text-white text-2xl cursor-pointer transition-all active:scale-75' />
			</div>
			<div
				ref={currencyRef}
				className='min-h-[20rem] w-full flex flex-col overflow-y-auto max-h-[20rem] gap-2 pr-3'
			>
				{cryptocurrencies
					.filter(
						(crypto) =>
							crypto.network === selectedNetwork
					)
					.filter((crypto) =>
						crypto.name
							.toLowerCase()
							.includes(search.toLowerCase())
					)
					.map((crypto) => (
						<div
							key={crypto.symbol}
							className={`flex items-center gap-3 border border-white/10 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
								selectedToken === crypto.symbol
									? 'gradient-border'
									: 'gradient-none'
							}`}
							onClick={() =>
								setSelectedToken(crypto.symbol)
							}
						>
							<div className='token'>
								<img
									src={crypto.cryptoIcon}
									alt={crypto.name}
									className='h-10 w-10 object-contain'
								/>
								<div>
									<p className='text-white text-lg'>
										{crypto.name}
									</p>
									<p className='text-white text-sm'>
										{crypto.symbol}
									</p>
								</div>
								<p className='text-white text-sm ml-auto'>
									{Math.floor(Math.random() * 1000) + 1}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Token;
