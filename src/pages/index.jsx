import React from "react";
import { Grid } from "@mui/material";
import Search from "../components/Search";

export default function index() {
	return (
		<Grid container>
			<Grid item xs={12} sx={{ px: 10 }}>
				<Search />
			</Grid>
		</Grid>
	);
}
