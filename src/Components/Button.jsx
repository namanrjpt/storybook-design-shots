import React from 'react';
import './Button.scss';

const Button = (props) => {
	const {
		text = 'Success',
		onClick = () => {
			console.log('Button clicked');
		},
		variant = 'success',
	} = props;

	return (
		<button
			onClick={onClick}
			className={`button ${variant}`}
		>
			{text}
		</button>
	);
};

export default Button;
