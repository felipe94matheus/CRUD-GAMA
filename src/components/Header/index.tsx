import React from "react";
import Link from "../Link";
import {
	Navbar as NavbarComponent,
	Container,
	Collapse,
	NavDropdown,
} from "react-bootstrap";

import "./styles.css";
const Header: React.FC = () => {
	return (
		<NavbarComponent bg="dark" expand="lg">
			<Container fluid style={{ padding: "0 10rem" }}>
				<NavbarComponent.Brand className="text-white">
					CRUD Gama
				</NavbarComponent.Brand>
				<nav>
					<NavbarComponent.Collapse id="basic-navbar-nav">
							<Link texto="Usuários" redirect="/usuarios" />
							<Link texto="Fornecedores" redirect="/fornecedores" />
							<Link texto="Produtos" redirect="/produtos" />
							<Link texto="Entregas" redirect="/entregas" />
					</NavbarComponent.Collapse>
				</nav>
			</Container>
		</NavbarComponent>
	);
};

export default Header;
