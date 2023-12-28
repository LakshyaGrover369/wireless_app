
const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<h1>this is home</h1>
		</>
	);
};

export default Home;