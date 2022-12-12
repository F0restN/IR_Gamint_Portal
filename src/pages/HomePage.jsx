import React from "react";
import { Grid, Stack } from "@mui/material";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function index(props) {
	return (
		<Stack
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			spacing={2}
			sx={{ height: "100vh" }}
		>
			<Header />
			<Grid container alignItems="center" justifyContent="center">
				<Grid
					item
					xs={12}
					textAlign="center"
					justifyContent="center"
					// sx={{ mt: 20 }}
				>
					<img
						src="https://apps.quanticfoundry.com/static/images/tabletop_banner.06769f310468.png"
						alt=""
						width="40%"
						// height="150"
					/>
				</Grid>
				<Grid xs={12} sx={{ px: 45, pt: 4 }}>
					<Search />
				</Grid>
			</Grid>
			<Footer />
		</Stack>
	);
}
