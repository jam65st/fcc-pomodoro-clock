import React     from 'react';
import Pomodoro  from "./utils/Pomodoro";
import ExtraData from "./utils/ExtraData";


const App = () => {
	
	return (
			<div>
				Hello-world { Pomodoro.SESSION_TITLE }
				{ ExtraData.getProjectTitle() }
				test: { Pomodoro.BREAK_TITLE }
			</div>
	);
}

export default App;