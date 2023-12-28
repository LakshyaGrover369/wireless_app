import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
// import Home from '../pages/Home'
import Signup from '../components/signup/Signup'
import SignDemo from '../pages/SSignup'
import Login from '../components/login/Login'
import Main from '../components/Home/Home'

function Routing() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/SignDemo" exact element={<SignDemo />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}


export default Routing