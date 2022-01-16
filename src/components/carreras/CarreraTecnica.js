import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CarreraTecnica({ carreraData }) {
	return (
		<Card className="mb-4">
			<Card.Header className="d-flex justify-content-between">
				<div>
					<Badge variant="secondary" className="mr-2">
						Carrera: {carreraData.nombre}
					</Badge>
				</div>
				<div>
					<Button variant="primary" size="sm" className="mr-2">
						Asignar
					</Button>
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>Nombre: {carreraData.nombre}</Card.Title>
			</Card.Body>
		</Card>
	);
}
