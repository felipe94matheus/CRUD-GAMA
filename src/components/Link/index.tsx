import React from "react";
import "./styles.css";

interface LinkProps {
    texto: string;
    redirect:string;
}

function Link(props: LinkProps) {
    //
	return (
		<a className="links-menu text-white" href={props.redirect} target="_blank" rel="noreferrer">
			{props.texto}
		</a>
	);
}

export default Link;
