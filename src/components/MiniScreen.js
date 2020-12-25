import { useState } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";

import ScreenTitle from "./ScreenTitle";

const MScreen = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${props => props.color};

	${props => {
		if (props.config)
			return "height: " + props.config[0] + "; width: " + props.config[1] + ";"
		else
			return "height: 50%; width: 50%;"
	}}

	position: fixed;
	${props => {
		switch (props.pos) {
			case "top-left": return "top: 0; left: 0;";
			case "top-right": return "top: 0; right: 0;";
			case "bottom-left": return "bottom: 0; left: 0;";
			case "bottom-right": return "bottom: 0; right: 0;";
		}
	}}

	transition: all 0.2s ease;

	border-radius: 3px;

	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 3px black;
		transform: scale(1.05);
		z-index: 1;
	}
	&:not(:hover) {
		opacity: 0.5;
	}
`;

const MiniScreen = ({
	route,
	pos,
	color,
	text
}) => {
	const [config, setConfig] = useState(["50%", "50%"]);
	const [applyFade, setApplyFade] = useState(false);

	const expand = route => {
		setApplyFade(true);
		setTimeout(() => {
			setConfig(["100%", "100%"]);
			setTimeout(() => {
				navigate(route);
			}, 500);
		}, 500);
		return;
	}

	return (
		<MScreen config={config} onClick={() => expand(route)} pos={pos} color={color}>
			<ScreenTitle fade={applyFade}>{text}</ScreenTitle>
		</MScreen>
	)
}

export default MiniScreen;