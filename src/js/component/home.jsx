import React from "react";
import Cuerpo from "./cuerpo";
import Navbar from "./navbar";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Cuerpo />
			<Footer />
		</div>
	);
};

export default Home;
