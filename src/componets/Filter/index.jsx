/** @format */

import React from 'react';
import { Container, Icon } from './style';
import Input from '../Generic/Input/index';
import Button from '../Generic/Button/index';
import { Popover } from 'antd';

export const Filter = () => {
	return (
		<Container>
			<Container.Inset>
				<Input
					pl={'50'}
					width='100%'
					placeholder={'Enter an addres, neightboard'}>
					<Icon.Home />
				</Input>
				<Popover placement='bottomRight'
					// content={}
					trigger='click'
				>
					<Button width={'131px'} type={'secondary'}>
						Advansed
					</Button>
				</Popover>

				<Button width={'131px'} type={'primary'}>
					Search
				</Button>
			</Container.Inset>
		</Container>
	);
};

export default Filter;
