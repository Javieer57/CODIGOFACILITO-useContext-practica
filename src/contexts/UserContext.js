import { createContext, useEffect, useState } from 'react';
/* Artículos de prueba
import articles from '../mocks/articles'; */

// Solo se usar para generar el provider
export const UserContext = createContext();

// Valores iniciales de la aplicación
const userContextObj = {
	devToUser: 'capua',
	devToArticles: [],
};

// Prop de children para que pueda englobal otros componentes
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(userContextObj);

	// Pendiente: hacerlo hook
	useEffect(() => {
		async function getArticles() {
			try {
				const response = await fetch(
					`https://dev.to/api/articles?username=${user.devToUser}`
				);
				const articles = await response.json();

				if (response.status == 200) {
					setUser({ ...user, devToArticles: articles });
				} else {
					console.log('error');
				}
			} catch (error) {
				console.log(error);
			}
		}

		getArticles();
	}, [user.devToUser]);

	return (
		<UserContext.Provider value={[user, setUser]}>
			{children}
		</UserContext.Provider>
	);
};
