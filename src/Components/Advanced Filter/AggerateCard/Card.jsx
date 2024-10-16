import React, {
	useEffect,
	useState,
	useRef,
	useCallback,
} from 'react';
import PrimaryCondition from '../PrimaryCondition/PrimaryCondition';
import styles from './Card.module.scss';
import { MdOutlineAdd } from 'react-icons/md';
import Group from '../Group/Group';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TfiLoop } from 'react-icons/tfi';

const Card = () => {
	const [groups, setGroups] = useState([
		{
			type: 'condition',
			id: 1,
			conditions: [
				{
					field: 'Owner',
					operator: 'is',
					value: 'Davon Lane',
				},
			],
		},
		{
			type: 'group',
			id: 2,
			conditions: [
				{
					field: 'Owner',
					operator: 'is',
					value: 'Davon Lane',
				},
			],
		},
	]);

	const [connective, setConnective] =
		useState('AND');

	const [
		isConnectiveActive,
		setIsConnectiveActive,
	] = useState(false);

	useGSAP(
		() => {
			gsap.to('#iconConnective', {
				rotation: connective === 'AND' ? 0 : 180,
				duration: 0.5,
			});
		},
		{
			dependencies: [connective],
		}
	);

	const changeConnective = () => {
		if (connective === 'AND') {
			setConnective('OR');
		} else {
			setConnective('AND');
		}
	};

	const onDelete = (id) => {
		console.log(id);
		setGroups((prevGroups) =>
			prevGroups.filter((group) => group.id !== id)
		);
	};

	useEffect(() => {
		if (groups.length >= 1) {
			setIsConnectiveActive(true);
		} else {
			setIsConnectiveActive(false);
		}
	}, [groups]);

	const addCondition = () => {
		setGroups((prevGroups) => [
			...prevGroups,
			{
				type: 'condition',
				id: Math.random(),
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	const addGroup = () => {
		setGroups((prevGroups) => [
			...prevGroups,
			{
				type: 'group',
				id: Math.random(),
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	const resetGroups = () => {
		setGroups([
			{
				type: 'condition',
				id: 1,
				conditions: [
					{
						field: 'Owner',
						operator: 'is',
						value: 'Davon Lane',
					},
				],
			},
		]);
	};

	return (
		<div className={styles.main}>
			<div className={styles.primaryWrapper}>
				<p>Where:</p>
				<PrimaryCondition onDelete={onDelete} />
			</div>
			<div className={styles.lowerComponents}>
				{isConnectiveActive && (
					<div
						className={
							groups.length > 1
								? `${styles.ANDTag}`
								: `${styles.ANDTag} ${styles.inactive}`
						}
					>
						<div
							className={styles.connective}
							onClick={changeConnective}
						>
							<p>{connective}</p>
							<TfiLoop id='iconConnective' />
						</div>
					</div>
				)}
				<div className={styles.components}>
					{groups.map((group) => {
						if (group.type === 'condition') {
							return (
								<PrimaryCondition
									key={group.id}
									id={group.id}
									onDelete={onDelete}
								/>
							);
						} else {
							return (
								<Group
									key={group.id}
									id={group.id}
									onDelete={onDelete}
								/>
							);
						}
					})}
				</div>
			</div>
			<div className={styles.bottomButtons}>
				<div className={styles.wrapperOne}>
					<div
						className={styles.addCondition}
						onClick={addCondition}
					>
						<MdOutlineAdd />
						<p>Add Condition</p>
					</div>
					<div
						className={styles.addGroup}
						onClick={addGroup}
					>
						<MdOutlineAdd />
						<p>Add Group</p>
					</div>
				</div>
				<div
					className={styles.addGroup}
					onClick={resetGroups}
				>
					<p>Clear All</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
