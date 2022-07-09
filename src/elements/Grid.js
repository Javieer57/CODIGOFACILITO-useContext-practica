import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-template-columns: repeat(${({ num }) => num}, 1fr);
	grid-gap: 20px;
`;
