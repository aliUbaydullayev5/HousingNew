/** @format */

import React from 'react';
import { Container } from './style';
import Navbar from '../componets/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar';

export const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				{navbar.map(({ path, Element, id }) => {
					return <Route key={id} path={path} element={Element} />;
				})}

				<Route path='/' element={<Navigate to='/home' />} />
			</Route>
			<Route path='*' element={<div>not fount</div>} />
		</Routes>
	);
};

export default Root;
