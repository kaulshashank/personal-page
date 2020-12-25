import React from "react";
import { Router } from "@reach/router";

import Index from "./screens/index";
import AboutMe from "./screens/aboutme";
import Experience from "./screens/experience";
import Contact from "./screens/contact";
import Projects from "./screens/projects";

const App = () => (
	<Router>
		<Index path="/" />
		<AboutMe path="/aboutme" />
		<Experience path="/experience" />
		<Projects path="/projects" />
		<Contact path="/contact" />
	</Router>
);

export default App;
