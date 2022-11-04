import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const CSWContact = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
        />
      </div>

      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Nome"
          multiline
          
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Email"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Comentário"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
        />
      </div>
    </Box>
  );
};
export default CSWContact;
