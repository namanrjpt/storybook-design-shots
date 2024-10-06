import React from 'react';
import styles from './Styles/Home.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { routes } from '../Routes';
import { TbBrandStorybook } from 'react-icons/tb';
import { GoArrowUpRight } from 'react-icons/go';

const Home = () => {
	const navigate = useNavigate();
	const handleClick = (path) => {
		navigate(path);
	};

	return (
		<div className={styles.main}>
			<h1>Dribble Shots</h1>
			<div className={styles.itemsWrapper}>
				{routes
					.filter((route) => route.name != 'Error')
					.map((route) => (
						<div className={styles.item}>
							<p>{route.id}</p>
							<p>{route.name}</p>
							<div className={styles.sbButton}>
								<TbBrandStorybook />
							</div>
							<div
								className={styles.previewButton}
								onClick={() => handleClick(route.path)}
							>
								<GoArrowUpRight />
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
