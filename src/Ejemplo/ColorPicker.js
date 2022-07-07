import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorPicker = () => {
	let [color, setColor] = useContext(ThemeContext);
	return (
		<div style={{ backgroundColor: color }}>
			<input type="color" onChange={(e) => setColor(e.target.value)} />
			<p>El color es {color}</p>
		</div>
	);
};

export default ColorPicker;
