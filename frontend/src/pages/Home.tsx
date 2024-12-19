import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box 
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box
          style={{
            height: "100px", // Adjust this value based on your maximum text height
            width: "69%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10vh 0 5vh 0",
          }}
        >
          <div
            style={{
              border: "1px solid #64f3d5",
              boxShadow: "-5px -5px 105px #64f3d5",
              borderRadius: "50px",
              padding: "20px",
              width: "100%",
              marginTop: "10vh",
              marginBottom: "5vh",
            }}
          ><TypingAnim /></div>
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;



