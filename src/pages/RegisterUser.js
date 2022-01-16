import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { isNumber, isObjectEmpty } from "../utils/helpers";
import RegisterForm from "../components/forms/RegisterForm";
import { logInUser, accountCreated } from "../actions/authActions";
import Swal from "sweetalert2";

export default function RegisterUser() {
	const [errores, setErrores] = useState({});
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const history = useHistory();
	useEffect(() => {
		if (loggedIn) {
			history.push("/carreras-tecnicas");
		}
	});

	const registerUser = ({
		apellidos,
		nombres,
		direccion,
		email,
		telefono,
		username,
		password,
	}) => {
		const errores = {};
		setErrores(errores);
		if (validator.isEmpty(apellidos)) {
			errores.apellidos = "El campo apellidos no debe estar vacío";
		}
		if (validator.isEmpty(nombres)) {
			errores.nombres = "El campo nombres no debe estar vacío";
		}
		if (validator.isEmpty(direccion)) {
			errores.direccion = "El campo dirección no debe estar vacío";
		}
		if (!validator.isEmail(email)) {
			errores.email = "El campo email no es válido";
		}
		if (!isNumber(telefono)) {
			errores.telefono = "El campo teléfono no es válido";
		}
		if (validator.isEmpty(username)) {
			errores.username = "El campo username no debe estar vacío";
		}
		if (validator.isEmpty(password)) {
			errores.password = "El campo password no debe estar vacío";
		}
		if (!isObjectEmpty(errores)) {
			setErrores(errores);
			return;
		}

		dispatch(
			accountCreated({
				apellidos,
				nombres,
				direccion,
				email,
				telefono,
				username,
				password,
			})
		)
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Crear cuenta",
					text: `Bienvenido al sistema ${response.data.Usuario.apellidos} ${response.data.Usuario.nombres}`,
					footer: '<a href = "#">Kalum v1.0.0</a>',
				}).then((result) => {
					if (result.isConfirmed) {
						dispatch(logInUser({ username, password }));
					}
				});
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Crear cuenta",
					text: `Error al momento de crear la cuenta`,
					footer: '<a href = "#">Kalum v1.0.0</a>',
				});
				setErrores({
					error: "Ocurrio un error al momento de generar la solicitud",
				});
			});
	};

	return (
		<Container>
			<Row>
				<Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
					<Card body>
						<h3>Crear cuenta</h3>
						<hr></hr>
						<RegisterForm
							errores={errores}
							onSubmitCallback={registerUser}
						></RegisterForm>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
