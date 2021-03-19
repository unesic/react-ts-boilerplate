import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "assets/app.css";
import "lib/Object.filter";
import { App } from "App";

const client = new ApolloClient({
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
