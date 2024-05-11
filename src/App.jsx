import { HashRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Components/Navbar/navBar";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<Router>
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About" element={<About />} />
				<Route path="Home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
