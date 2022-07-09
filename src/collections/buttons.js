import styled, { css } from 'styled-components';

export const PrimaryButton = css`
	border: none;
	background-color: var(--blue);
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	padding: 6px 12px;
	border-radius: 5px;
	font-family: inherit;
	text-decoration: none;
	font-size: 18px;
`;

export const LinkSecondary = css`
	display: inline-block;
	color: var(--blue);
	padding: 6px 12px;
	font-size: 18px;
	text-decoration: underline;
	cursor: pointer;
`;

export const buttonDefault = css`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

	${({ primary }) => primary && buttonPrimary}
`;

const buttonPrimary = css`
	background-color: var(--blue);
	color: #ffffff;
	padding: 6px 12px;
	border-radius: 5px;
	font-size: 18px;
`;

const Button = styled.button`
	${buttonDefault}
`;

export default Button;
