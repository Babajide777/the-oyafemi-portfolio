import { FormAreaProps } from "@/utils/type";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";

const FormArea: React.FC<FormAreaProps> = ({
  title,
  value,
  minRows,
  handleChangeArea,
}) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <TextareaAutosize
        minRows={minRows}
        value={value}
        onChange={handleChangeArea}
      />
    </Box>
  );
};

export default FormArea;
