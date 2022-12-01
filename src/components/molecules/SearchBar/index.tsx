import { InputAdornment, TextField, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { searchText } from "../../../assets/constants";

const HomePageSearch = styled(TextField)({
  width: "100%",
});

const SearchBar = () => {
  return (
    <HomePageSearch
      placeholder={searchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{<SearchIcon />}</InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default SearchBar;
