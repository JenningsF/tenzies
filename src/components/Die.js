import React from "react";

function Die(props) {
	const styles = {
		backgroundColor: props.isHeld ? "#59e391" : "white",
	};

	return (
		<div className="die-block" style={styles} onClick={props.holdDie}>
			<h2 className="die-number">{props.value}</h2>
		</div>
	);
}

export default Die;
