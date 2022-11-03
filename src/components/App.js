import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsTile from "./HogsTile"

function App() {

	const makeHogTile = hogs.map((hog) => {
		return <HogsTile name={hog.name} image={hog.image}  />
	})

	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
				{makeHogTile}
			</div>
		</div>
	);
}

export default App;
