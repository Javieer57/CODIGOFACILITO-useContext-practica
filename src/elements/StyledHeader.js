import styled from 'styled-components';
import {
	LinkSecondary,
	PrimaryButton,
	SecondaryButton,
} from '../collections/buttons';
import { Container } from '../collections/styles';

const StyledHeader = ({ className }) => {
	return (
		<HeaderWrapper className={className}>
			<Avatar src="/images/avatar.png" alt="" />
			<InfoContainer>
				<Title>
					Bienvenid@s, me llamo <SpanGreen>Javier Eufracio</SpanGreen> y soy
					Desarrollador Web
				</Title>
				<ButtonsContainer>
					<Button>Descarga mi CV</Button>
					<Button>Checa mi Github</Button>
				</ButtonsContainer>
				<Link>Revisa mis proyectos</Link>
			</InfoContainer>
		</HeaderWrapper>
	);
};

export default StyledHeader;

/* Styles */
const HeaderWrapper = styled.header`
	${Container};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: start;
`;

const SpanGreen = styled.span`
	color: var(--blue);
`;

const Avatar = styled.img`
	flex: 1;
	max-width: 250px;
`;

const Title = styled.h1`
	font-size: 46px;
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const Button = styled.button`
	${PrimaryButton}
`;

const Link = styled.a`
	${LinkSecondary}
`;
