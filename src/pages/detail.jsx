import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Divider, Grid } from "@mui/material";
import Search from "../components/Search";

export default function Detail({ data }) {
	const location = useLocation();
	const [queryRzlt, setQueryRzlt] = useState();

	useEffect(() => {
		// const query = location.state.queryContent;
		async function init() {
			await axios
				.post(
					"http://localhost:8080/query",
					{
						queryContent: location.state.queryContent,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
				.then((response) => {
					console.log(response);
				});
		}

		init();
	}, [location]);

	return (
		<Grid container>
			<Grid item xs={12}>
				<Search />
			</Grid>
			<Divider></Divider>
			<div>dsafdsf</div>
		</Grid>
	);
}
