import React, {
	useState,
	useRef,
	useEffect,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { VscQuestion } from 'react-icons/vsc';
import { RiFileList2Line } from 'react-icons/ri';
import uploadImg from '../../../assets/img-upload.jpg';
import {
	CircularProgressbar,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = () => {
	const progressRef = useRef(null);
	const [dragActive, setDragActive] =
		useState(false);
	const duration = 1000;
	const [progress, setProgress] = useState(0);
	const fileRef = useRef(null);

	const [fileData, setFileData] = useState({
		title: '',
		size: '',
	});

	const [selectedFile, setSelectedFile] =
		useState(null);

	const pickFile = () => {
		fileRef.current.value = '';
		fileRef.current.click();
	};

	const filePicked = () => {
		const file = fileRef.current.files[0];
		setFileData({
			title: file.name,
			size: Math.round(file.size / 1048576),
		});
		setSelectedFile(file);
	};

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (
			e.type === 'dragenter' ||
			e.type === 'dragover'
		) {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (
			e.dataTransfer.files &&
			e.dataTransfer.files[0]
		) {
			setSelectedFile(e.dataTransfer.files[0]); // Process the dropped file
			setFileData({
				title: e.dataTransfer.files[0].name,
				size: Math.round(
					e.dataTransfer.files[0].size / 1048576
				),
			});
		}
	};

	useGSAP(
		() => {
			if (selectedFile) {
				setProgress(0);
				gsap.to(progressRef.current, {
					width: '100%',
					duration: 1,
					ease: 'power2.inOut',
				});
				setInterval(() => {
					if (progress <= 100) {
						setProgress((prev) => {
							if (prev < 100) {
								return prev + 1;
							} else {
								return 100;
							}
						});
					}
				}, duration / 100);
			}
		},
		{
			dependencies: [selectedFile],
		}
	);

	const onDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div className='h-auto w-[33%] border bg-white rounded-2xl p-4 relative'>
			<div className='absolute right-[1rem] bg-black/10 p-1 rounded-lg hover:bg-black/20 hover:cursor-pointer transition-all'>
				<IoMdClose
					size={20}
					className='text-black/60'
				/>
			</div>
			<h3 className='text-[1.5rem] font-extrabold'>
				Import customers
			</h3>
			<p className='text-black/40 text-[1rem] font-semibold'>
				Upload a CSV to import customer data to your
				CMS
			</p>
			<div
				className='mt-5 w-full p-3 h-[15rem] flex flex-col items-center justify-center'
				style={{
					border: dragActive
						? '4px dashed #7939EF'
						: '4px dashed #0000001a',
					borderRadius: '1rem',
				}}
				onClick={pickFile}
				onDragEnter={handleDrag}
				onDragOver={handleDrag}
				onDragLeave={handleDrag}
				onDrop={handleDrop}
			>
				<input
					className='hidden'
					type='file'
					accept='.csv'
					ref={fileRef}
					onChange={filePicked}
				/>
				<div className='rounded-full aspect-square w-[7rem] border'>
					{selectedFile ? (
						<CircularProgressbar
							value={progress}
							text={`${progress}%`}
							strokeWidth={6}
							styles={buildStyles({
								pathColor: '#7939EF',
								trailColor: 'lightgray',
								textColor: '#000',
								textSize: '1.5rem',
								fontWeight: 'bold',
							})}
						/>
					) : (
						<img
							className='rounded-full aspect-square w-full h-full object-cover'
							src={uploadImg}
							alt=''
						/>
					)}
				</div>
				<p className='mt-5 text-black font-semibold'>
					Drag CSV here
				</p>
				<p className='text-black/70 text-sm'>
					or, click to browse (4 MB max)
				</p>
			</div>
			<p className='text-sm text-black/80 text-center mt-2 font-normal'>
				Some data formats, such as dates, numbers, and
				colors, may not be recognized.{' '}
				<span className='underline hover:cursor-pointer'>
					Learn More.
				</span>
			</p>
			{selectedFile && (
				<div className='overflow-hidden w-full rounded-xl my-5 p-3 border border-black/10 flex gap-3 relative items-stretch'>
					<div className='flex items-center rounded-lg justify-center p-3 border border-black/10'>
						<RiFileList2Line size={20} />
					</div>
					<div className='w-full flex flex-col items-start justify-center gap-2'>
						<p
							className='font-bold text-base line-clamp-1 max-w-[90%]'
							title={`${fileData.title} 
							${
								fileData.size <= 0
									? '<0.5 MB'
									: fileData.size + ' MB'
							}`}
						>
							{fileData.title} (
							{fileData.size <= 0
								? '<0.5'
								: fileData.size}{' '}
							MB)
						</p>
						<div
							ref={progressRef}
							className='h-2 rounded-full w-0 bg-[#7939EF]'
						/>
					</div>
					<div className='flex items-end'>
						<p className='text-sm font-semibold text-black/70'>
							{progress}%
						</p>
					</div>
					<div
						className='absolute top-1 right-1 bg-black/10 p-1 rounded-lg hover:bg-black/20 hover:cursor-pointer transition-all'
						onClick={() => {
							setSelectedFile(null);
							setFileData({
								title: '',
								size: '',
							});
							setProgress(0);
							gsap.to(progressRef.current, {
								width: '0%',
								duration: 0.5,
								ease: 'power2.inOut',
							});
						}}
					>
						<IoMdClose
							size={15}
							className='text-black/60'
						/>
					</div>
				</div>
			)}
			<div className='w-full flex items-center justify-center mt-5 overflow-hidden'>
				<div className='h-[1px] w-[50%] bg-black/10'></div>
				<p>OR</p>
				<div className='h-[1px] w-[50%] bg-black/10'></div>
			</div>
			<div className='w-full flex flex-col px-2 mt-4'>
				<p className='text-black font-bold'>
					Upload from URL
				</p>
				<div className='h-[3rem] w-full border border-black/20 rounded-lg mt-1 overflow-hidden flex items-center'>
					<div className='h-full w-fit bg-black/5 flex items-center justify-center p-3 border-r-black/20 border'>
						https://
					</div>
					<div className='w-full'>
						<input
							className='w-full h-full px-3 outline-none'
							type='text'
							placeholder='www.dropbox.xom/file/...'
						/>
					</div>
					<div className='h-[80%] mr-1 border w-fit rounded-lg flex items-center justify-center px-4 py-3 active:scale-90 hover:cursor-pointer transition-all'>
						Upload
					</div>
				</div>
			</div>
			<div className='h-[1px] w-[calc(100%+2rem)] bg-black/10 -ml-4 mt-10 mb-3'></div>
			<div className='flex items-center justify-between w-full p-3'>
				<div className='flex items-center justify-center gap-2'>
					<VscQuestion
						size={25}
						className='text-black/40'
					/>
					<p className='font-black text-black/50'>
						Support
					</p>
				</div>
				<div className='flex items-center justify-center gap-2'>
					<button
						className='rounded-xl border-black/20 border p-3 px-5 bg-white text-black font-bold active:scale-90 transition-all'
						onClick={() => {
							setSelectedFile(null);
							setFileData({
								title: '',
								size: '',
							});
							setProgress(0);
							gsap.to(progressRef.current, {
								width: '0%',
								duration: 0.5,
								ease: 'power2.inOut',
							});
						}}
					>
						Discard
					</button>
					<button className='rounded-xl border-black/20 border p-3 px-5 bg-[#7939EF] text-white font-bold active:scale-90 transition-all'>
						Import
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
