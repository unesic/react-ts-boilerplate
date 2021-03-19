import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "views/Home";

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};
