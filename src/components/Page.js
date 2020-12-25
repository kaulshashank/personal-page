import styled from "styled-components";

const Page = styled.div`
	height: 100vh;
	${props => props.bgColor ? 'background-color:' + props.bgColor : ''}
`;

export default Page;