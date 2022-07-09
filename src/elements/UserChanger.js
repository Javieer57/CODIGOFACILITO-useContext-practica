import { useContext } from 'react';
import styled from 'styled-components';
import Button from '../collections/buttons';
import { UserContext } from '../contexts/UserContext';

const UserChanger = ({ className }) => {
	// Contexto y función para cambiar su valor
	const [user, setUser] = useContext(UserContext);

	// Toggle entre usuario personal y empresarial
	const changeUser = () => {
		const newUser = user.devToUser == 'capua' ? 'microsoft' : 'capua';
		setUser({ ...user, devToUser: newUser });
	};

	// Mensaje dependiendo del usuario
	const msg = user.devToUser == 'capua' ? 'del trabajo' : 'personales';

	return (
		<h2 className={className}>
			También puedes ver mis artículos{' '}
			<Button onClick={changeUser}>{msg}</Button>
		</h2>
	);
};

export default styled(UserChanger)`
	margin-bottom: 20px;
	button {
		font-weight: lighter;
		text-decoration: underline;
		cursor: pointer;
	}
`;
