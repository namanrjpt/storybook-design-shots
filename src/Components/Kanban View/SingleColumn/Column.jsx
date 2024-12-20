import React, {
	useEffect,
	useState,
} from 'react';
import styles from './styles.module.scss';
import SingleCard from '../Single/SingleComp';
import { GoNorthStar } from 'react-icons/go';
import { IoChevronDownCircle } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';
import { MdOutlineDragIndicator } from 'react-icons/md';

const Column = ({ type }) => {
	const [cards, setCards] = useState([
		{
			id: 1,
			icon: <GoNorthStar />,
			title: 'Card 1',
			amount: 100,
			location: 'Location 1',
			rating: 4,
			checked: 2,
			comments: 10,
			timePublished: '2h',
		},
		{
			id: 2,
			icon: <GoNorthStar />,
			title: 'Card 1',
			amount: 100,
			location: 'Location 1',
			rating: 4,
			checked: 2,
			comments: 10,
			timePublished: '2h',
		},
	]);

	const RenderType = () => {
		switch (type) {
			case '1':
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle color='blue' />
							<p>New</p>
							<span>21</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);
			case '2':
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle color='purple' />
							<p>Virtual Demo</p>
							<span>3</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);
			case '3':
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle color={'orange'} />
							<p>In-person Demo</p>
							<span>2</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);

			case '4':
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle color='red' />
							<p>Team Training</p>
							<span>2</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);

			case '5':
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle color='yellow' />
							<p>Completed</p>
							<span>4</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);

			default:
				return (
					<>
						<div className={styles.headerLeft}>
							<IoChevronDownCircle />
							<p>Title</p>
							<span>212</span>
						</div>
						<div className={styles.headerright}>
							<MdAdd />
							<MdOutlineDragIndicator />
						</div>
					</>
				);
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<RenderType />
			</div>
			<div className={styles.cardWrapper}>
				{cards.map((card) => {
					return (
						<SingleCard
							key={card.id}
							data={card}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Column;
