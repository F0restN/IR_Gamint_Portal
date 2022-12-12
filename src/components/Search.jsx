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
import { useHistory } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Search(props) {
	const history = useHistory();
	const [searchValue, setSearchValue] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		history.push({
			pathname: "/search",
			search: searchValue,
			state: {
				queryContent: searchValue,
			},
		});
		// console.log(searchValue);
	};

	return (
		<Paper
			component="form"
			sx={{
				p: "6px 6px",
				display: "flex",
				alignItems: "center",
				// border: "black solid",
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
