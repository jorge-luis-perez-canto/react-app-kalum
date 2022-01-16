import { SET_ASIGNACIONES_POR_ALUMNO } from "../actions/types";
const initialState = { asignaciones: [], fetched: false };

export default function asignacionesPorAlumnoReducer(
	state = initialState,
	action
) {
	const { type, payload } = action;
	switch (type) {
		case SET_ASIGNACIONES_POR_ALUMNO:
			return {
				...state,
				fetched: payload.fetched,
				asignaciones: payload.asignaciones,
			};
		default:
			return state;
	}
}
