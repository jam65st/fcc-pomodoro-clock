import React      from 'react';
import Pomodoro   from "./utils/Pomodoro";
import ExtraData  from "./utils/ExtraData";
import AppTitle   from "./components/AppTitle";
import AuthorInfo from "./components/AuthorInfo";
import BeepAlarm  from "./components/BeepAlarm";


const App = () => {
	
	return (
			<section id="clock">
				{ /** Working OK */ }
				<AppTitle title={ ExtraData.getProjectTitle() }/>
				
				
				{ /** BEGIN HERE !!! */ }
				
				Hello-world { Pomodoro.SESSION_TITLE }
				test: { Pomodoro.BREAK_TITLE }
				
				{ /** END HERE!!! */ }
				
				{ /** Working OK */ }
				<AuthorInfo authorInfo={ ExtraData.getProjectAuthor() }/>
				
				{ /*TODO: May be could need the timer on the BeepAlarm props */ }
				<BeepAlarm alarm={ ExtraData.getExternalResource( 'alarm' ) }/>
			</section>
	);
}

export default App;