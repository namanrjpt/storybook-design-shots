import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from './Group.module.scss';
import PrimaryCondition from '../PrimaryCondition/PrimaryCondition';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiLoop } from 'react-icons/tfi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Group = ({ onDelete }) => {
	const iconRef = useRef(null);
	const [conditions, setConditions] = useState([
		{
			field: 'Owner',
			operator: 'is',
			value: 'Davon Lane',
		},
	]);

	const [connective, setConnective] =
		useState('AND');

	const [
		isConnectiveActive,
		setIsConnectiveActive,
	] = useState(false);

	const changeConnective = () => {
		if (connective === 'AND') {
			setConnective('OR');
		} else {
			setConnective('AND');
		}
	};

	useGSAP(
		() => {
			console.log(iconRef);
			gsap.to(iconRef.current, {
				rotation: connective === 'AND' ? 0 : 180,
				duration: 0.5,
			});
		},
		{
			dependencies: [connective],
		}
	);

	const addCondition = () => {
		setConditions((prevConditions) => [
			...prevConditions,
			{
				field: 'Owner',
				operator: 'is',
				value: 'Davon Lane',
			},
		]);
	};

	const removeCondition = (index) => {
		setConditions((prevConditions) =>
			prevConditions.filter((_, i) => i !== index)
		);
	};

	useEffect(() => {
		if (conditions.length > 1) {
			setIsConnectiveActive(true);
		} else {
			setIsConnectiveActive(false);
		}
	}, [conditions]);

	return (
		<div className={styles.main}>
			<p>Any of the following are true:</p>
			<div className={styles.conditionWrapper}>
				<div className={styles.primaryWrapper}>
					<p>Where:</p>
					<PrimaryCondition />
				</div>

				<div
					className={
						conditions.length >= 1
							? `${styles.connectiveWrapper}`
							: `${styles.connectiveWrapper} ${styles.hide}`
					}
				>
					<div
						className={
							conditions.length > 1
								? `${styles.ANDTag}`
								: conditions.length == 1
								? `${styles.ANDTag} ${styles.hideBorder}`
								: `${styles.ANDTag} ${styles.inactive}`
						}
					>
						<div
							className={styles.connective}
							onClick={changeConnective}
						>
							<p>{connective}</p>
							<TfiLoop ref={iconRef} />
						</div>
					</div>
					<div className={styles.conditions}>
						{conditions.map((condition, index) => (
							<PrimaryCondition
								key={index}
								condition={condition}
								onDelete={() => removeCondition(index)}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={styles.bottomButtons}>
				<div className={styles.wrapperOne}>
					<div
						className={styles.addCondition}
						onClick={addCondition}
					>
						<MdOutlineAdd />
						<p>Add condition</p>
					</div>
					<div className={styles.addGroup}>
						<MdOutlineAdd />
						<p>Add subgroup</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group;
