import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function RegisterForm({ errores, onSubmitCallback }) {
	const [apellidos, setApellidos] = useState("");
	const [nombres, setNombres] = useState("");
	const [direccion, setDireccion] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		onSubmitCallback({
			apellidos,
			nombres,
			direccion,
			email,
			telefono,
			username,
			password,
		});
	};

	return (
		<Form onSubmit={submitForm}>
			<Form.Group control="apellidos">
				<Form.Label>Apellidos</Form.Label>
				<Form.Control
					type="text"
					value={apellidos}
					onChange={(e) => setApellidos(e.target.value)}
					placeholder="Apellidos"
					isInvalid={errores.apellidos}
				></Form.Control>
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
					placeholder="Nombres"
					isInvalid={errores.nombres}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.nombres}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="direccion">
				<Form.Label>Dirección</Form.Label>
				<Form.Control
					type="text"
					value={direccion}
					onChange={(e) => setDireccion(e.target.value)}
					placeholder="Dirección"
					isInvalid={errores.direccion}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.direccion}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="email">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					isInvalid={errores.email}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.email}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="Telefono">
				<Form.Label>Teléfono</Form.Label>
				<Form.Control
					type="number"
					value={telefono}
					onChange={(e) => setTelefono(e.target.value)}
					placeholder="Teléfono"
					isInvalid={errores.telefono}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.telefono}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="username">
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					isInvalid={errores.username}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.username}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group control="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					isInvalid={errores.password}
				></Form.Control>
				<Form.Control.Feedback type="invalid">
					{errores.password}
				</Form.Control.Feedback>
			</Form.Group>
			<Button variant="primary" type="submit">
				Crear cuenta
			</Button>
		</Form>
	);
}
