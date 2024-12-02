import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from './Style.module.scss';
import { operators, dummyData } from '../Logic';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { TbTrash } from 'react-icons/tb';
import { IoChevronDownSharp } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PrimaryCondition = ({ id, onDelete }) => {
	const menuRef = useRef(null);

	const getInitialValues = (key) => {
		return (
			dummyData.find((data) => data.name === key)
				.values ?? []
		);
	};

	const [selectedConfig, setSelectedConfig] =
		useState({
			field: 'Owner',
			operator: '',
			value: getInitialValues('Owner')[0],
		});

	const [values, setValues] = useState(
		getInitialValues('Owner')
	);

	const getKeys = (data) => {
		let arrayData = [];
		for (let key in data) {
			let dataObj = {
				key: dummyData[key].name,
				values: dummyData[key].values,
			};
			arrayData.push(dataObj);
		}
		return arrayData;
	};

	const [dataObject, _] = useState(
		getKeys(dummyData)
	);

	const [isValueMenuOpen, setIsValueMenuOpen] =
		useState(false);

	useGSAP(
		() => {
			if (isValueMenuOpen) {
				gsap.to(menuRef.current, {
					duration: 0.35,
					maxHeight: '10rem',
					visibility: 'visible',
				});
			} else {
				gsap.to(menuRef.current, {
					duration: 0.35,
					maxHeight: '0rem',
					onComplete: () => {
						gsap.set(menuRef.current, {
							visibility: 'hidden',
						});
					},
				});
			}
		},
		{
			dependencies: [isValueMenuOpen],
		}
	);

	// ['Multiple', 'User', 'No Meeting', 'No Interaction']

	const [
		customSelectPreview,
		setCustomSelectPreview,
	] = useState('');

	useEffect(() => {
		setCustomSelectPreview(selectedConfig.field);
	}, [selectedConfig]);

	const RenderCustomSelect = ({ type, value }) => {
		switch (type) {
			case 'Stage':
				return (
					<>
						<div className={styles.multiItem}>
							<p>Required</p>
						</div>
						<div className={styles.multiItem}>
							<p>+1</p>
						</div>
					</>
				);
			case 'Owner':
				return (
					<div
						className={styles.userName}
						onClick={() => {
							setCustomSelectPreview('User');
						}}
					>
						<img
							src='https://sholaemmanuel.com/wp-content/uploads/2024/06/photo-1570295999919-56ceb5ecca61.jpg'
							alt=''
						/>
						<p>{value}</p>
					</div>
				);
			case 'Health score':
				return (
					<div
						className={styles.health}
						onClick={() => {
							setCustomSelectPreview('No Meeting');
						}}
					>
						<div className={styles.icon} />
						<p>{value}</p>
					</div>
				);
			case 'Next meeting':
				return (
					<div
						className={styles.itemName}
						onClick={() => {
							setCustomSelectPreview('No Interaction');
						}}
					>
						<p>{value}</p>
					</div>
				);
			case 'Last interaction':
				return (
					<div
						className={styles.itemName}
						onClick={() => {
							setCustomSelectPreview('No Interaction');
						}}
					>
						<p>{value}</p>
					</div>
				);
			default:
				return (
					<>
						<div className={styles.multiItem}>
							<p>Required</p>
						</div>
						<div className={styles.multiItem}>
							<p>+1</p>
						</div>
					</>
				);
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles.conditionWrapper}>
				<div
					className={styles.grabber}
					onDrag={(e) => e.stopPropagation()}
				>
					<MdOutlineDragIndicator />
				</div>
				<div className={styles.condition}>
					<select
						name='Select'
						value={selectedConfig.field}
						id=''
						onChange={(e) => {
							setSelectedConfig({
								...selectedConfig,
								field: e.target.value,
								value: getInitialValues(
									e.target.value
								)[0],
							});
							setValues(
								dummyData.find(
									(data) => data.name === e.target.value
								).values
							);
						}}
					>
						{dataObject.map((data) => {
							return (
								<option value={data.key}>
									{data.key}
								</option>
							);
						})}
					</select>
				</div>
				<div className={styles.condition}>
					<select
						name='Select'
						id=''
						onChange={(e) => {
							setSelectedConfig({
								...selectedConfig,
								operator: e.target.value,
							});
						}}
					>
						{operators.map((data) => {
							return (
								<option key={data.id}>{data.name}</option>
							);
						})}
					</select>
				</div>
				<div className={styles.condition}>
					<div className={styles.dropdown}>
						<RenderCustomSelect
							type={selectedConfig.field}
							value={selectedConfig.value}
						/>
						<div
							className={styles.arrowButton}
							onClick={() => {
								setIsValueMenuOpen(!isValueMenuOpen);
							}}
						>
							<IoChevronDownSharp
								className={isValueMenuOpen && styles.open}
							/>
						</div>
					</div>
					<div
						ref={menuRef}
						className={styles.options}
					>
						{values.map((data) => {
							return (
								<div
									className={styles.optionData}
									onClick={() => {
										setSelectedConfig({
											...selectedConfig,
											value: data,
										});
										setIsValueMenuOpen(false);
									}}
								>
									{data}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<TbTrash onClick={() => onDelete(id)} />
		</div>
	);
};

export default PrimaryCondition;
