import { useState } from 'react';
import ColorPicker from './ColorPicker';
import ThemeContext from './ThemeContext';

function ExampleContext() {
	const [color, setColor] = useState('grey');
	return (
		<ThemeContext.Provider value={[color, setColor]}>
			<ColorPicker />
		</ThemeContext.Provider>
	);
}

export default ExampleContext;
