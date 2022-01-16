import React, { useEffect } from "react";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { ALUMNO_ENDPOINT } from "../utils/endPoints";
//import axios from "axios";
import { Table } from "react-bootstrap";
import AsignacionAlumno from "../components/asignaciones/AsignacionAlumno";
import { getAsignacionesPorAlumno } from "../actions/alumnoActions";

export default function AsignacionesPorAlumno() {
	const user = useSelector((state) => state.auth.user);
	//const [fetching, setFetching] = useState(true);
	//const [fila, setFila] = useState(0);
	const asignaciones = useSelector((state) => state.asignaciones.asignaciones);
	const fetched = useSelector((state) => state.asignaciones.fetched);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchedAsignaciones() {
			if (!fetched) {
				try {
					//setFetching(true);
					await dispatch(getAsignacionesPorAlumno(user.carne));
					//setFetching(false);
				} catch (error) {
					console.log(error);
				}
			}
		}
		fetchedAsignaciones();
	}, [dispatch, fetched]);

	return (
		<div>
			<Table striped bordered hover className="mt-4">
				<thead>
					<tr>
						<th>#</th>
						<th>Descripción</th>
						<th>Horario</th>
						<th>Salon</th>
						<th>Instructor</th>
						<th>Editar</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{asignaciones &&
						asignaciones.map((asignacion, index) => (
							<AsignacionAlumno
								key={asignacion.asignacionId}
								asignacionData={asignacion}
								registro={index}
								user={user}
							></AsignacionAlumno>
						))}
				</tbody>
			</Table>
		</div>
	);
}
