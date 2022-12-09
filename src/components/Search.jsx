import React, { useState } from "react";
import {
	// Box,
	// FormControl,
	// OutlinedInput,
	// InputAdornment,
	// Card,
	// CardContent,
	Paper,
	InputBase,
	Divider,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Search() {
	const [searchValue, setSearchValue] = useState();

	const handleChange = (event) => {
		console.log(event.target.value);
	};

	return (
		// <Box sx={{ display: "flex", flexWrap: "wrap" }}>
		// 	<Card>
		// 		<FormControl variant="outlined" sx={{ width: "90ch" }}>
		// 			<OutlinedInput
		// 				id="outlined-adornment-weight"
		// 				value={searchValue}
		// 				onChange={handleChange("weight")}
		// 				endAdornment={<InputAdornment position="end">GO</InputAdornment>}
		// 				aria-describedby="outlined-weight-helper-text"
		// 				inputProps={{
		// 					"aria-label": "weight",
		// 				}}
		// 			/>
		// 		</FormControl>
		// 	</Card>
		// </Box>

		<Paper
			component="form"
			sx={{
				p: "6px 6px",
				display: "flex",
				alignItems: "center",
			}}
		>
			<IconButton sx={{ p: "10px" }} aria-label="menu">
				<MenuIcon />
			</IconButton>
			<InputBase
				fullWidth
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Game in your head"
				onChange={handleChange}
			/>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
