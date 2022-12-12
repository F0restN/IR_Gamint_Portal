import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
	return (
		<Box
			sx={{
				py: 2,
				background: "#f2f2f2",
				width: "100%",
				textAlign: "center",
			}}
		>
			<Typography sx={{ fontSize: "0.8rem" }}>
				Copyright &copy; 2022, By Yuxuan Zhou, Yifei Tai and Kelin He. All
				Rights Reserved
			</Typography>
		</Box>
	);
}
