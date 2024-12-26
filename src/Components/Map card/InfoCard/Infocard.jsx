import React from 'react';

const Infocard = ({ data, type }) => {
	const Issuecard = () => {
		return (
			<div className='bg-green-100 rounded-lg w-[20rem] min-h-[10rem] overflow-hidden'>
				<div className='flex items-start flex-col justify-start p-4 bg-green-100'>
					<p className='text-black text-base font-bold'>
						{data['issue']}
					</p>
					<p className='text-sm font-regular text-black/75'>
						{data['description']}
					</p>
				</div>
				<div className='flex w-full flex-col justify-center p-3 py-4 gap-3 rounded-t-xl bg-white'>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Operator</p>
						<div className='flex items-center justify-center gap-2'>
							{data.isResolverAssigned && (
								<div className='flex items-center justify-center bg-red-600 w-6 h-6 aspect-square rounded-full text-white'>
									{data.resolver['operator'][0]}
								</div>
							)}
							<p className='font-semibold text-sm text-black'>
								{data.isResolverAssigned
									? data.resolver['operator']
									: 'Not Assigned'}
							</p>
						</div>
					</div>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Arrival Time</p>
						<p className='font-semibold text-sm text-black'>
							{data.isResolverAssigned
								? data.resolver['Arrival Time']
								: '-'}
						</p>
					</div>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Vehicle</p>
						<p className='font-semibold text-sm text-black'>
							{data.isResolverAssigned
								? data.resolver['Vehicle']
								: '-'}
						</p>
					</div>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Vehicle No</p>
						<p className='font-semibold text-sm text-black'>
							{data.isResolverAssigned
								? data.resolver['Vehicle No']
								: '-'}
						</p>
					</div>
				</div>
			</div>
		);
	};
	const Resolvercard = () => {
		return (
			<div className='bg-green-100 rounded-lg w-[20rem] min-h-[10rem] overflow-hidden'>
				<div className='flex items-center justify-start p-4 bg-green-100'>
					<div className='h-10 rounded-full flex items-center justify-center bg-red-600 aspect-square font-bold text-white'>
						{data.resolver['operator'][0]}
					</div>
					<div className='w-full flex justify-center items-start flex-col pl-4'>
						<p className='text-black text-base font-bold'>
							{data.resolver['operator']}
						</p>
						<p className='text-xs font-regular text-black/75'>
							Updated : 2 mins ago
						</p>
					</div>
				</div>
				<div className='flex w-full flex-col justify-center p-3 py-4 gap-3 bg-white rounded-t-xl'>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Vehicle</p>
						<p className='font-semibold text-sm text-black'>
							Black Toyota Hilux
						</p>
					</div>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Vehicle No</p>
						<p className='font-semibold text-sm text-black'>
							BDSI SMR
						</p>
					</div>
					<div className='w-full flex justify-between'>
						<p className='text-sm'>Last job</p>
						<p className='font-semibold text-sm text-black'>
							MTC000173
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{type === 'issue' ? (
				<Issuecard data={data} />
			) : (
				<Resolvercard data={data} />
			)}
		</>
	);
};

export default Infocard;
