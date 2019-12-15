import React from 'react';
import './App.css';
import Form from './components/form';
import SettingForm from "./components/setting-form";

function App() {
	
	return (
		<div className="container">
			<div className="jumbotron">
				<SettingForm />
			</div>
			<div className="jumbotron">
				<Form />
			</div>
		</div>
	);
}

export default App;
