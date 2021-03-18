import React from "react";
import ReactDOM from "react-dom";

import "assets/app.css";
import "lib/Object.filter";
import { App } from "App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
