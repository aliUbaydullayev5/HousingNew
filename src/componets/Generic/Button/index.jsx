/** @format */

import React from 'react';
import { Container } from './style';

export const Button = ({
	children,
	onClick,
	mt,
	mb,
	ml,
	mr,
	width,
	height,
	type,
}) => {
	return (
		<Container
			mt={mt}
			mb={mb}
			ml={ml}
			mr={mr}
			width={width}
			height={height}
			type={type}
			onClick={onClick}>
			{children}
		</Container>
	);
};

export default Button;
