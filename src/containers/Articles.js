/* React */
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
/* Estilos */
import styled from 'styled-components';
import { Container } from '../collections/styles';
/* Componentes */
import Article from '../elements/Article';
import Grid from '../elements/Grid';
import UserChanger from '../elements/UserChanger';

const Articles = ({ className }) => {
	const [user] = useContext(UserContext);

	const articles = user.devToArticles.map((article) => (
		<Article article={article} key={article.id} />
	));

	return (
		<section className={className}>
			<div className="wrapper">
				<UserChanger />
				<Grid num="3">{articles}</Grid>
			</div>
		</section>
	);
};

export default styled(Articles)`
	background-color: var(--blue);
	color: white;

	.wrapper {
		${Container}
		padding-top: 40px;
		padding-bottom: 40px;
	}
`;
