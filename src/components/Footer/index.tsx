import React from "react";
import Link from "../Link"

import "./styles.css";

const Footer: React.FC = () => {
	return (
		<footer>
			<ul>
				<h5>Criado por:</h5>
                <Link texto="Anderson Sousa" redirect="https://www.linkedin.com/in/andersonmsousa/"/>
                <Link texto="Felipe Matheus" redirect="https://www.linkedin.com/in/felipe-matheus-26b147163/"/>
                <Link texto="Gabriela de Valnisio" redirect="https://www.linkedin.com/in/gabriela-valnisio/"/>
                <Link texto="Israel Silva" redirect="https://www.linkedin.com/in/israel-silva-4933051b9/"/>
			</ul>
		</footer>
	);
};

export default Footer;
