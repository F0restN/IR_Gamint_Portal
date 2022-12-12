import React from "react";
import { Grid } from "@mui/material";
import Search from "../components/Search";
import ImageCard from "../components/ImageCard";

export default function index(props) {
	return (
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
	);
}
