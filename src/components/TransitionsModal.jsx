import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Chip,
	Backdrop,
	Box,
	Modal,
	Typography,
	CardMedia,
	Divider,
} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	// border: "1px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function TransitionsModal({ open, handleClose, gameId, desc }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		async function init() {
			await axios
				.get(`/api/appdetails?language=english&appids=${gameId}`, {
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Credentials": "true",
					},
				})
				.then((response) => {
					setData(response.data[gameId].data);
					setIsLoaded(true);
				})
				.catch((error) => console.log(error));

			// await fetch(`/api/appdetails?language=english&appids=${gameId}`, {
			// 	method: "GET",
			// 	mode: "cors",
			// });
		}

		init();
	}, [gameId]);

	return (
		isLoaded && (
			<div>
				<Modal
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Box sx={style}>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							{data.name}
						</Typography>

						{data.movies && data.movies.length > 0 && (
							<CardMedia
								sx={{ width: "100%", height: 350 }}
								component="iframe"
								src={data.movies[0]["mp4"][480]}
								autoPlay
							/>
						)}
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							{desc}
						</Typography>
						<Divider sx={{ my: 1 }} />
						{data.categories &&
							data.categories.length > 0 &&
							data.categories.map((item, index) => {
								return (
									<Chip
										sx={{ px: 1, mr: 0.5, mt: 0.5 }}
										label={item.description}
									/>
								);
							})}
					</Box>
				</Modal>
			</div>
		)
	);
}
