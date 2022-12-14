import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
	Divider,
	Grid,
	LinearProgress,
	Chip,
	Card,
	CardContent,
	CardMedia,
} from "@mui/material";
import Search from "../components/Search";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";

export default function Detail({ data }) {
	const location = useLocation();
	const [queryRzlt, setQueryRzlt] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// const query = location.state.queryContent;
		async function init() {
			await axios
				.post(
					"/query",
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
					setQueryRzlt(response.data);
					setIsLoaded(true);
				})
				.catch((error) => console.log(error));
		}

		init();
	}, [location]);

	return (
		<div>
			<Grid container alignItems="start" sx={{ p: 2 }}>
				<Grid item xs={4} sx={{ pt: 2 }}>
					<Search />
				</Grid>
				<Grid item xs={12} sx={{ py: 4 }}>
					<Divider>
						{" "}
						<Chip label="TOP 20 RZLT" />{" "}
					</Divider>
				</Grid>
				{isLoaded ? (
					queryRzlt.map((item, index) => {
						return (
							<Grid item key={index} xs={7} sx={{ py: 1 }}>
								<GameCard
									id={item.id}
									name={item.name}
									shortDesc={item.shortDesc}
									imageUrl={item.imageUrl}
								/>
							</Grid>
						);
					})
				) : (
					<Grid item xs={12}>
						<LinearProgress />
					</Grid>
				)}
			</Grid>
			<Footer />
		</div>
	);
}
