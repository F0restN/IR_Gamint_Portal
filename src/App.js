import { Container, Box, Grid, Stack } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import Detail from "./pages/Detail";

function App() {
	return (
		<Box sx={{ my: 0, py: 0 }}>
			<Stack
				direction="column"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
				sx={{ height: "100vh" }}
			>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/search">
							<Detail />
						</Route>
					</Switch>
				</Router>
				<Footer />
			</Stack>
		</Box>
	);
}

export default App;
