import React from "react";
import Tarjeta from "./tarjeta";

const Contenedor_Tarjetas = () => {
	return (
		<div className="row">
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
			<div className="col">
				<Tarjeta />
			</div>
		</div>
	);
};

export default Contenedor_Tarjetas;
