import React     from 'react';
import Pomodoro  from "./utils/Pomodoro";
import ExtraData from "./utils/ExtraData";


const App = () => {
	
	return (
			<div>
				Hello-world { Pomodoro.SESSION_TITLE }
				{ ExtraData.getProjectTitle() }
			</div>
	);
}

export default App;