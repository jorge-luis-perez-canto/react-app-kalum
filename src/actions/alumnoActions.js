import axios from "axios";
import { SET_ASIGNACIONES_POR_ALUMNO } from "./types";
import { ALUMNO_ENDPOINT } from "../utils/endPoints";

export const getAsignacionesPorAlumno = (carne) => (dispatch) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${ALUMNO_ENDPOINT}/${carne}/asignaciones`)
			.then((response) => {
				dispatch({
					type: SET_ASIGNACIONES_POR_ALUMNO,
					payload: { fetched: true, asignaciones: response.data },
				});
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
