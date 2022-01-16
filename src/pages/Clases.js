import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
import Clase from "../components/clases/Clase";
import { CLASES_ENDPOINT } from "../utils/endPoints";

export default function Clases() {
	const [clases, setClases] = useState([]);
	//const [fetching, setFetching] = useState(true);

	useEffect(() => {
		axios
			.get(CLASES_ENDPOINT)
			.then((response) => {
				setClases(response.data);
				//setFetching(false);
			})
			.catch((e) => {
				//setFetching(false);
			});
	}, []);

	return (
		<div>
			<Jumbotron>
				<h1>Clases disponibles, puedes asignarte sin ningún problema</h1>
			</Jumbotron>
			<div>
				{clases.map((clase) => (
					<Clase key={clase.claseId} claseData={clase}></Clase>
				))}
			</div>
		</div>
	);
}
