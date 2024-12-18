import React from 'react';
import woocom from '../../../assets/Onboarding/woo.png';
import shopify from '../../../assets/Onboarding/shopify.png';
import salesforce from '../../../assets/Onboarding/salesforce.png';
import bigcom from '../../../assets/Onboarding/bigcom.png';
import magento from '../../../assets/Onboarding/magento.png';

const Flowchart = ({ tagname }) => {
	const icons = [
		{
			id: 'shopify',
			label: 'Shopify',
			icon: shopify,
		},
		{
			id: 'magento',
			label: 'Magento',
			icon: magento,
		},
		{
			id: 'woo',
			label: 'WooCommerce',
			icon: woocom,
		},
		{
			id: 'bigcommerce',
			label: 'BigCommerce',
			icon: bigcom,
		},
		{
			id: 'salesforce',
			label: 'Salesforce',
			icon: salesforce,
		},
	];

	return (
		<div className='h-full w-full flex items-center justify-end bg-white'>
			<div className='w-[80%] h-full flex items-center justify-center gap-8'>
				<div
					className={`rounded-full aspect-square border border-black/10 h-[5rem] p-3 w-[5rem] flex items-center justify-center transition-all ${
						tagname == 'shopify'
							? 'border border-blue-300 scale-150'
							: ''
					}`}
				>
					<img
						src={
							icons.find((icon) => icon.id === 'shopify')
								.icon
						}
						className='h-[90%] w-[90%] object-contain'
					/>
				</div>
				<div
					className={`rounded-full aspect-square border border-black/10 h-[5rem] p-3 w-[5rem] flex items-center justify-center transition-all ${
						tagname == 'magento'
							? 'border border-blue-300 scale-150'
							: ''
					}`}
				>
					<img
						src={
							icons.find((icon) => icon.id === 'magento')
								.icon
						}
						className='h-[90%] w-[90%] object-contain'
					/>
				</div>
				<div
					className={`rounded-full aspect-square border border-black/10 h-[5rem] p-3 w-[5rem] flex items-center justify-center transition-all ${
						tagname == 'woocommerce'
							? 'border border-blue-300 scale-150'
							: ''
					}`}
				>
					<img
						src={
							icons.find((icon) => icon.id === 'woo')
								.icon
						}
						className='h-[90%] w-[90%] object-contain'
					/>
				</div>
				<div
					className={`rounded-full aspect-square border border-black/10 h-[5rem] p-3 w-[5rem] flex items-center justify-center transition-all ${
						tagname == 'bigcommerce'
							? 'border border-blue-300 scale-150'
							: ''
					}`}
				>
					<img
						src={
							icons.find(
								(icon) => icon.id === 'bigcommerce'
							).icon
						}
						className='h-[90%] w-[90%] object-contain'
					/>
				</div>
				<div
					className={`rounded-full aspect-square border border-black/10 h-[5rem] p-3 w-[5rem] flex items-center justify-center transition-all ${
						tagname == 'salesforce'
							? 'border border-blue-300 scale-150'
							: ''
					}`}
				>
					<img
						src={
							icons.find(
								(icon) => icon.id === 'salesforce'
							).icon
						}
						className='h-[90%] w-[90%] object-contain'
					/>
				</div>
			</div>
		</div>
	);
};

export default Flowchart;
