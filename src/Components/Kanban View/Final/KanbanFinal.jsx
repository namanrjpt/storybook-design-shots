import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from './styles.module.scss';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const KanbanFinal = () => {
	const [data, setData] = useState([
		{
			id: 1,
			title: 'Task 1',
			status: 'todo',
		},
	]);
	return <div className={styles.main}></div>;
};

export default KanbanFinal;
