import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Se definen los estilos para los numeros y el div central
const ClockStyles = {
	fontSize: "50px",
	color: "white",
	padding: "10px"
};

const centerStyles = {
	margin: "0 auto"
};

// Se define una función donde se podra colocar el codigo HTML para representar el segundero
// cada numero se pasa como props y se utiliza %10 para así obtener el residuo  que no se pinte 
// ambas unidades "10" en el espacio de numero 

export function SecondsCounter(props) {
	return (
		<div className="d-flex flex-row bg-dark">
			<div className="d-flex flex-row" style={centerStyles}>
				<div className="pt-3">
					<i style={ClockStyles} className="far fa-clock"></i>
				</div>
				<div style={ClockStyles}>{props.four % 10}</div>
				<div style={ClockStyles}>{props.three % 10}</div>
				<div style={ClockStyles}>{props.two % 10}</div>
				<div style={ClockStyles}>{props.one % 10}</div>
			</div>
		</div>
	);
}

// se define que tipo de variable son los props a utilizar
SecondsCounter.Prototypes = {
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number
};

// la función setInterval me permite tener una actualización de la función cada 1000 milisegundo 
// cada uno de las variables en los props tendrá un valor segun aumenta el contador, además 
// que que se hace el llamadao del DOM desde esta función para que se vaya actualizando

let counter = 0;
setInterval(function() {
	const N_four = Math.floor(counter / 1000);
	const N_three = Math.floor(counter / 100);
	const N_two = Math.floor(counter / 10);
	const N_one = Math.floor(counter / 1);

	console.log(N_four, N_three, N_two, N_one);
	counter++;

	ReactDOM.render(
		<SecondsCounter
			four={N_four}
			three={N_three}
			two={N_two}
			one={N_one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
