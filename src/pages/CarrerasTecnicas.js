import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
import CarreraTecnica from "../components/carreras/CarreraTecnica";
import { CARRERAS_ENDPOINT } from "../utils/endPoints";

export default function CarrerasTecnicas() {
	const [carreras, setCarreras] = useState([]);
	//const [fetching, setFetching] = useState(true);

	useEffect(() => {
		axios
			.get(CARRERAS_ENDPOINT)
			.then((response) => {
				setCarreras(response.data);
				//setFetching(false);
			})
			.catch((e) => {
				//setFetching(false);
			});
	}, []);
	return (
		<div>
			<Jumbotron>
				<h1>Carreras disponibles, puedes asignarte sin ningún problema</h1>
			</Jumbotron>
			<div>
				{carreras.map((carreras) => (
					<CarreraTecnica
						key={carreras.codigoCarrera}
						carreraData={carreras}
					></CarreraTecnica>
				))}
			</div>
		</div>
	);
}
