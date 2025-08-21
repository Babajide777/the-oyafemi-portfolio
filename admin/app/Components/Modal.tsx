import { ModalProps } from "@/utils/type";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import FormArea from "./FormArea";

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {
  const [paragraph, setParagraph] = React.useState("");

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // trigger hidden input
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log("Selected file:", event.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1300, // keep it above other elements
      }}
    >
      {/* Overlay */}
      <Box
        onClick={toggleModal}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Modal content */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fefcf7",
          width: "500px",
          borderRadius: "8px",
          p: 3,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Box component="form">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography>Sub-Title</Typography>
            <TextField
              id="standard-textarea"
              placeholder="Enter sub-title"
              multiline
              rows={1}
              variant="outlined"
              sx={{ width: "70%" }}
            />
          </Box>
          <Box>
            <FormArea
              title="Paragraph"
              value={paragraph}
              handleChangeArea={(e) => setParagraph(e.target.value)}
              minRows={3}
              sx={{ justifyContent: "space-between" }}
              textareaSx={{ width: "70%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Typography>Image</Typography>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              onClick={handleClick}
            >
              Upload File
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
