import { FormAreaProps } from "@/utils/type";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";

interface ExtendedFormAreaProps extends FormAreaProps {
  sx?: object; // allow custom styles
  titleName?: object; // allow custom styles for title
  textareaSx?: object; // allow custom styles for textarea specifically
}

const FormArea: React.FC<ExtendedFormAreaProps> = ({
  title,
  value,
  minRows,
  handleChangeArea,
  sx,
  titleName,
  textareaSx,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1, ...sx }}>
      <Typography sx={{ ...titleName }}>{title}</Typography>
      <TextareaAutosize
        minRows={minRows}
        value={value}
        onChange={handleChangeArea}
        style={{
          // width: "300px",
          // height: "30px",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          ...textareaSx, // merge external textarea styles
        }}
      />
    </Box>
  );
};

export default FormArea;
