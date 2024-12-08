import React, {
	useState,
	useEffect,
} from 'react';
import { BsStars } from 'react-icons/bs';
import { BsSend } from 'react-icons/bs';

const TextComponent = ({
	submitQuery,
	reset,
}) => {
	const [text, setText] = useState('');

	useEffect(() => {
		if (reset) {
			setText('');
		}
	}, [reset]);

	const Submit = () => {
		if (text.length > 0) {
			submitQuery(text);
		}
	};

	return (
		<div className='w-[90%] h-[4rem] py-2 px-5 absolute bottom-[1.5rem] left-[50%] translate-x-[-50%] bg-white rounded-xl flex items-center border border-black/30'>
			<BsStars className='text-[#92c73d] text-[1.75rem]' />
			<input
				className='w-full p-2 outline-none text-xl ml-1 font-regular'
				type='text'
				placeholder='Search Anything'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={Submit}
				disabled={text.length == 0}
				className={
					text.length == 0
						? 'bg-transparent text-black p-2 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
						: 'bg-[#bdff53] text-black/75 p-2 rounded-xl transition-all duration-300 active:scale-90'
				}
			>
				<BsSend size={20} />
			</button>
		</div>
	);
};

export default TextComponent;
