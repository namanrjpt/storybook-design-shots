import React, {
	useEffect,
	useState,
	useRef,
	useCallback,
} from 'react';
import PrimaryCondition from '../PrimaryCondition/PrimaryCondition';
import styles from './Card.module.scss';
import { MdOutlineAdd } from 'react-icons/md';
import SecondCondition from '../SecondaryCondition/SecondCondition';

const Card = () => {
	const [groups, setGroups] = useState([
		{
			id: 1,
			conditions: [
				{
					field: 'Owner',
					operator: 'is',
					value: 'Davon Lane',
				},
			],
			operator: 'AND',
		},
	]);

	const onDelete = useCallback((id) => {
		setGroups((prevGroups) =>
			prevGroups.filter((group) => group.id !== id)
		);
	}, []);

	return (
		<div className={styles.main}>
			<PrimaryCondition onDelete={onDelete} />
			<SecondCondition />

			<div className={styles.bottomButtons}>
				<div className={styles.addCondition}>
					<MdOutlineAdd />
					<p>Add Condition</p>
				</div>
				<div className={styles.addGroup}>
					<MdOutlineAdd />
					<p>Add Group</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
