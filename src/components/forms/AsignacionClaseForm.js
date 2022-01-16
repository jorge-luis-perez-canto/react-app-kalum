import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AsignacionClaseForm({
	parametroDescripcion,
	errores,
	onSubmitCallback,
}) {
	const user = useSelector((state) => state.auth.user);
	const [carne, setCarne] = useState(user.carne);
	const [apellidos, setApellidos] = useState(user.apellidos);
	const [nombres, setNombres] = useState(user.nombres);
	const [descripcion, setDescripcion] = useState(parametroDescripcion);
	const registrarAsignacion = (e) => {
		e.preventDefault();
		onSubmitCallback();
	};
	return (
		<Form onSubmit={registrarAsignacion}>
			<Form.Group control="carne">
				<Form.Label>Carné</Form.Label>
				<Form.Control
					type="text"
					value={carne}
					onChange={(e) => setCarne(e.target.value)}
					placeholder="Número de carné"
					isInvalid={errores.carne}
				/>
				<Form.Control.Feedback type="invalid">
					{errores.carne}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="apellidos">
				<Form.Label>Apellidos</Form.Label>
				<Form.Control
					type="text"
					value={apellidos}
					onChange={(e) => setApellidos(e.target.value)}
					placeholder="Apellidos del alumno"
					isInvalid={errores.apellidos}
				/>
				<Form.Control.Feedback type="invalid">
					{errores.apellidos}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="nombres">
				<Form.Label>Nombres</Form.Label>
				<Form.Control
					type="text"
					value={nombres}
					onChange={(e) => setNombres(e.target.value)}
					placeholder="Nombres del alumno"
					isInvalid={errores.nombres}
				/>
				<Form.Control.Feedback type="invalid">
					{errores.nombres}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="descripcion">
				<Form.Label>Descripcion</Form.Label>
				<Form.Control
					type="text"
					value={descripcion}
					onChange={(e) => setDescripcion(e.target.value)}
					placeholder="Nombre de la clase"
					isInvalid={errores.descripcion}
				/>
				<Form.Control.Feedback type="invalid">
					{errores.descripcion}
				</Form.Control.Feedback>
			</Form.Group>
			<Button variant="primary" type="submit">
				Generar registro
			</Button>
		</Form>
	);
}
