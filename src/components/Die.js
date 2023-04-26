import React from "react";

function Die(props) {
	return (
		<div className="die-block">
			<h2 className="die-number">{props.value}</h2>
		</div>
	);
}

export default Die;
