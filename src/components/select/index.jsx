import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectOption = ({ perPageCount, setPerPageCount, setPage, page }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    perPageCount;
    value;
    page;

    const result = Math.ceil((page * perPageCount) / value);

    setPage(result);
    sessionStorage.setItem("page-count", result);
    localStorage.setItem("select", value);
    setPerPageCount(value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Page</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={perPageCount}
          label="Page"
          onChange={handleChange}
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOption;
