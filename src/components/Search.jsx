import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label="search"
      sx={{ mb: "1.5rem" }}
      fullWidth
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
