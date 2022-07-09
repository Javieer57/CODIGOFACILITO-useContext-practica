import styled from 'styled-components';
import Button from '../collections/buttons';
import { ColorBlue, Container } from '../collections/styles';

const Header = () => {
	return (
		<HeaderWrapper>
			<img src="/images/avatar.png" />
			<div className="header-info">
				<h1>
					Bienvenid@s, me llamo <span>Javier Eufracio</span> y soy Desarrollador
					Web
				</h1>

				<div className="buttons-container">
					<Button primary>Descarga mi CV</Button>
					<Button primary>Checa mi Github</Button>
				</div>

				<a href="#">O revisa mi blog</a>
			</div>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	${Container};
	display: flex;
	align-items: center;
	justify-content: space-between;

	.header-info {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 30px;
	}

	h1 {
		font-size: 40px;
		span {
			${ColorBlue}
		}
	}

	a {
		text-decoration: underline;
	}

	img {
		max-width: 250px;
	}

	.buttons-container {
		display: flex;
		gap: 20px;
	}
`;
