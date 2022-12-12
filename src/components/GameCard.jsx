import React from "react";
import {
	Card,
	Box,
	Button,
	CardContent,
	Typography,
	CardMedia,
	CardActions,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { WindowSharp } from "@mui/icons-material";

export default function GameCard({ id, name, shortDesc, imageUrl }) {
	const history = useHistory();

	const handleGoToSteam = () => {
		window.open(`https://store.steampowered.com/app/${id}/${name}/`);
		window.focus();
	};

	return (
		<Card sx={{ display: "flex" }}>
			<CardMedia component="img" sx={{ width: 180 }} image={imageUrl} alt="" />
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h6">
						{name}
					</Typography>
					<Typography
						variant="subtitle2"
						color="text.secondary"
						component="div"
					>
						{shortDesc}
					</Typography>
				</CardContent>
				<CardActions>
					<Button>View More</Button>
					<Button onClick={handleGoToSteam}>Go To Steam</Button>
				</CardActions>
			</Box>
		</Card>
	);
}
