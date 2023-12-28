import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../login/login.css'

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div class="wrapper">
        <h1>Hello Again!</h1>
        <p>Welcome back you've  been missed!</p>
        <form onSubmit={handleSubmit}>
        <h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						/>
						{error && <div className="error">{error}</div>}
						<button type="submit" >
							Sing In
						</button>
        </form>
        <Link to="/signup">
						<button type="button" >
							Sing Up
						</button>
					</Link>
    	</div>
	);
};

export default Login;