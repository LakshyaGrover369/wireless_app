// import { useState } from "react";
// import axios from "axios";
// import { Link , useNavigate} from "react-router-dom";
// import '../styles/signup.css'

// // const wrapper = document.querySelector(".wrapper"),
// const signupHeader = document.querySelector(".signup header"),
// loginHeader = document.querySelector(".login header");


// function loginForm(){
//     loginHeader.classList.add("active");
// }
// function signupForm(){
//     signupHeader.classList.remove("active");
// }
// const SSignup = () => {

// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/users";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};


//   return (
//     <div class="wrapper">
//         <h1>Hello !</h1>
//         <p>Join to manage the systems of wireless!</p>
//         <form onSubmit={handleSubmit}>
//         <h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="firstName"
// 							onChange={handleChange}
// 							value={data.firstName}
// 							required
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lastName"
// 							onChange={handleChange}
// 							value={data.lastName}
// 							required
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 						/>
//         </form>
//         <button>Sign Up</button>

//         <Link to="/login">
// 						<button type="button" >
// 							Sing in
// 						</button>
// 					</Link>
//     </div> 
    
//   )
// }

// export default SSignup
