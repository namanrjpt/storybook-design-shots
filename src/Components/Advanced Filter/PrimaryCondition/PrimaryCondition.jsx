import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Style.module.scss';
import {
	connectives,
	operators,
	dummyData,
} from '../Logic';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { TbTrash } from 'react-icons/tb';

const PrimaryCondition = ({ onDelete }) => {
	const [selectedConfig, setSelectedConfig] =
		useState({
			field: 'Name',
			operator: '',
			value: '',
		});

	const getInitialValues = (key) => {
		return (
			dummyData.find((data) => data.name === key)
				.values ?? []
		);
	};

	const [values, setValues] = useState(
		getInitialValues('Name')
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

	return (
		<div className={styles.main}>
			<p>Where :</p>
			<div className={styles.conditionWrapper}>
				<div className={styles.grabber}>
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
					<select
						name='Select'
						id=''
						onChange={(e) => {
							setSelectedConfig({
								...selectedConfig,
								value: e.target.value,
							});
						}}
					>
						{values.map((data) => {
							return (
								<option value={data}>{data}</option>
							);
						})}
					</select>
				</div>
			</div>
			<TbTrash
				onClick={() => onDelete(selectedConfig.id)}
			/>
		</div>
	);
};

export default PrimaryCondition;
