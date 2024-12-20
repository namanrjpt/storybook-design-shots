import React from 'react';
import styles from './styles.module.scss';
import { MdStars } from 'react-icons/md';
import { FaRegFileLines } from 'react-icons/fa6';
import { BiSolidCheckboxChecked } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { PiCurrencyInrFill } from 'react-icons/pi';
import { BiExpandAlt } from 'react-icons/bi';
import { IoTimeOutline } from 'react-icons/io5';
import { GoKebabHorizontal } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';
import { BiCommentDots } from 'react-icons/bi';
import { Rate } from 'antd';
import { motion } from 'framer-motion';

const SingleComp = ({ data }) => {
	return (
		<motion.div className={styles.main}>
			<div className={styles.header}>
				<div className='flex items-center gap-2'>
					<span className='text-white text-2xl'>
						{data.icon}
					</span>
					<p className='text-lg text-white underline underline-offset-4'>
						{data.title}
					</p>
				</div>
				<div className='flex items-center gap-5'>
					<span className='text-white/60 text-sm'>
						<BiExpandAlt />
					</span>
					<span className='text-white text-sm'>
						<GoKebabHorizontal
							style={{
								transform: 'rotate(90deg)',
							}}
							color='white'
						/>
					</span>
				</div>
			</div>
			<div className={styles.innerContent}>
				<div className={styles.item}>
					<PiCurrencyInrFill />
					<p>{data.amount}</p>
				</div>
				<div className={styles.item}>
					<FiMapPin />
					<p>{data.location}</p>
				</div>
				<div className={styles.item}>
					<GoHeart />
					<Rate
						style={{ color: '#5893ff' }}
						disabled
						defaultValue={data.rating}
					/>
				</div>
			</div>
			<div className={styles.bottomCard}>
				<div className={styles.bottomCardLeft}>
					<FaRegFileLines />
					<span>
						<BiSolidCheckboxChecked />
						<p>{data.checked}</p>
					</span>
					<span>
						<BiCommentDots />
						<p>{data.comments}</p>
					</span>
				</div>
				<div className={styles.bottomCardRight}>
					<IoTimeOutline />
					<p>{data.timePublished}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default SingleComp;
