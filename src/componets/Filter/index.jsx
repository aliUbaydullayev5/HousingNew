/** @format */

import React from 'react';
import { Container, Icon, Advanced, Section } from './style';
import Input from '../Generic/Input/index';
import Button from '../Generic/Button/index';
import { Popover } from 'antd';

export const Filter = () => {
	const advancedSearch = (
		<Advanced>
			<Advanced.Title>Adress</Advanced.Title>

			<Section gcol='1fr 1fr 1fr 1fr'>
				<Input mr={20} placeholder='Country' pl='15' />
				<Input mr={20} placeholder='Region' pl='15' />
				<Input mr={20} placeholder='City' pl='15' />
				<Input mr={20} placeholder='Zip Code' pl='15' />
			</Section>

			<Advanced.Title>Apartment info</Advanced.Title>

			<Section gcol='1fr 1fr 1fr'>
				<Input mr={20} placeholder='Adress' width='100%' pl='15' />
				<Input mr={20} placeholder='House Name' width='100%' pl='15' />
				<Input mr={20} placeholder='Rooms' width='100%' pl='15' />
			</Section>

			<Advanced.Title>Price</Advanced.Title>

			<Section gcol='1fr 1fr'>
				<Input mr={20} placeholder='Min price' pl='15' />
				<Input mr={20} placeholder='Max price' pl='15' />
			</Section>

			<Section>
				<Button width='131px' ml={20} type='primary'>
					Search
				</Button>
			</Section>
		</Advanced>
	);

	return (
		<Container>
			<Container.Inset>
				<Input
					pl={'60'}
					width='100%'
					placeholder={'Enter an addres, neightboard'}>
					<Icon.Home />
				</Input>

				<Popover
					placement='bottomRight'
					content={advancedSearch}
					trigger='click'>
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
