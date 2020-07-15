import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Contactanos } from "./contactanos";
import { Createacount } from "./Createacount";

export const Home = () => {
	return (
		<div className="div.a">
			{/* <h1 classNameNameName=" parrafo_superior">
            <p>tu consultorio virtual durante la pandemia covid-19</p>
            </h1> */}
			<div className="p2">
				{/* <p>
            <h2>
            Listocare lo ayuda a brindar una exelente atencion al paciente mientras desarrolla una practica
            saludable.
            </h2>
            </p> */}
			</div>
			{/* <div classNameNameName="Registrate">
            <button classNameNameName="boton">Registrate</button>
            </div> */}
			<Contactanos />
		</div>
	);
};
