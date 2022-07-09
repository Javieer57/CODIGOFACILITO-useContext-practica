import './App.css';
import Articles from './containers/Articles';
import Header from './containers/Header';
import { UserProvider } from './contexts/UserContext';
import StyledHeader from './elements/StyledHeader';

const App = () => {
	// return <StyledHeader />;
	return (
		<UserProvider>
			<Header />
			<Articles />
		</UserProvider>
	);
};

export default App;
