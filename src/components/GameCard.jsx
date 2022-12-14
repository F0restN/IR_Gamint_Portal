import React, { useEffect, useState } from "react";
import {
	Card,
	Box,
	Button,
	CardContent,
	Typography,
	CardMedia,
	CardActions,
} from "@mui/material";
import TransitionsModal from "./TransitionsModal";

export default function GameCard({ id, name, shortDesc, imageUrl }) {
	const [openModal, setOpenModal] = useState(false);

	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);
	const handleGoToSteam = () => {
		window.open(`https://store.steampowered.com/app/${id}/${name}/`);
		window.focus();
	};

	return (
		<div>
			<Card sx={{ display: "flex" }}>
				<CardMedia
					component="img"
					sx={{ width: 180 }}
					image={imageUrl}
					alt=""
				/>
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
						<Button onClick={handleOpen}>View More</Button>
						<Button onClick={handleGoToSteam}>Go To Steam</Button>
					</CardActions>
				</Box>
			</Card>

			<TransitionsModal
				open={openModal}
				handleClose={() => handleClose()}
				gameId={id}
				desc={shortDesc}
			/>
		</div>
	);
}
