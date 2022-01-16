import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import validator from "validator";
import { isObjectEmpty } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../actions/authActions";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
	const [errores, setErrores] = useState({});
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const history = useHistory();

	useEffect(() => {
		if (loggedIn) {
			history.push("/carreras-tecnicas");
		}
	});

	const login = ({ username, password }) => {
		const errores = {};
		setErrores(errores);
		if (validator.isEmpty(username)) {
			errores.username = "El nombre del usuario es inválido";
		}
		if (validator.isEmpty(password)) {
			errores.password = "La contraseña no puede ser un dato vacío";
		}
		if (!isObjectEmpty(errores)) {
			setErrores(errores);
			return;
		}

		dispatch(logInUser({ username, password }))
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Login",
					text: `Bienvenido al sistema ${username}`,
					footer: '<a href = "#">Kalum v1.0.0</a>',
				});
				console.log(response.data.access_token);
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Login",
					text: `Error al momento de realizar la autenticación`,
					footer: '<a href = "#">Kalum v1.0.0</a>',
				});
				setErrores(error);
			});
	};

	return (
		<Container className="mt-5">
			<Row>
				<Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
					<Card body>
						<h3>Iniciar Sesión</h3>
						<hr></hr>
						<LoginForm errores={errores} onSubmitCallback={login}></LoginForm>
						<div className="mt-4">
							<Link to={"/register-user"}>
								No tiene una cuenta?, registrese aquí
							</Link>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
