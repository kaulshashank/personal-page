import styled from "styled-components";

const ScreenTitle = styled.div`
	color: #F4FAFF;

	width: 50%;
	text-align: center;
	line-height: 1.1;
	
	transition: opacity 0.5s;
	
	${props => {
		if (props.fade) {
			return `opacity: 0; pointer-events:none;`;
		}
	}}
	
	font-family: 'Titillium Web', sans-serif;
	font-size: calc(21px + (75 - 21) * ((100vw - 300px) / (1600 - 300)));
`;

export default ScreenTitle;