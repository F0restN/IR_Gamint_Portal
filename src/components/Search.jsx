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
	FormControl,
} from "@mui/material";
import { FormControlUnstyled } from "@mui/base";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Search() {
	const [searchValue, setSearchValue] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchValue);
		// console.log(1);
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
			onSubmit={handleSubmit}
		>
			<IconButton sx={{ p: "10px" }} aria-label="menu">
				<MenuIcon />
			</IconButton>
			<InputBase
				fullWidth
				autoFocus
				value={searchValue}
				placeholder="Search Game in your head"
				sx={{ ml: 1, flex: 1 }}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<IconButton
				type="submit"
				value="Submit"
				sx={{ p: "10px" }}
				aria-label="search"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
