import styled from 'styled-components';

const Article = ({ className, article }) => {
	return (
		<article className={className}>
			<img src={article.social_image} />
			<div className="article_info">
				<h3>{article.title}</h3>
				<a
					href={article.url}
					target="_blank"
					rel="noopener noreferrer nofollow"
				>
					Leer artículo
				</a>
			</div>
		</article>
	);
};

export default styled(Article)`
	background-color: white;
	color: var(--dark);
	.article_info {
		padding: 20px;
	}
	h3 {
		margin-bottom: 20px;
	}
	a:hover {
		color: grey;
	}
`;
