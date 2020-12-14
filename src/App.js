import React from "react";
import HomePage from "./pages/homepage/homepage-component";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
