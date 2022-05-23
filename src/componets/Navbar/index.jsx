/** @format */

import React from 'react';
import { Container, Logo, NavbarBody, activeStyle } from './style';
import { navbar } from '../../utils/navbar';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import Button from '../Generic/Button/index';
import Filter from '../Filter';

export const Navbar = () => {
	const navigate = useNavigate();

	const gotoSignIn = () => {
		navigate('/signin')
	}

	return (
		<>
			<Container>
				<Container.Inset>
					<Logo>
						<Logo onClick={() => navigate('/home')}>
							<Logo.Img />
							<Logo.Text>Houzing</Logo.Text>
						</Logo>
					</Logo>
					<NavbarBody>
						{navbar.map((value) => {
							return (
								!value.hidden && (
									<NavLink key={value.id} style={activeStyle} to={value.path}>
										{value.title}
									</NavLink>
								)
							);
						})}
					</NavbarBody>
					<Logo end='true'>
						<div>
							<Button width='120px' onClick={gotoSignIn}>
								Sign in
							</Button>
						</div>
					</Logo>
				</Container.Inset>
			</Container>
			<Filter />
			<Outlet />
		</>
	);
};

export default Navbar;
