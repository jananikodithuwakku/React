import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

export default function Register() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4facfe 0%, #8e44ad 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #65b5f6ff, #ebfd85ff)",
          top: "10%",
          left: "15%",
          filter: "blur(60px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, #65b5f6ff, #ebfd85ff)",
          bottom: "15%",
          right: "10%",
          filter: "blur(50px)",
        }}
      />
      
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 350,
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#141414ff" }}>
          Register Form
        </Typography>

        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              "& fieldset": { border: "none" },
              "& input": { color: "#131212ff" },
            },
            "& .MuiInputLabel-root": { color: "#111111ff" },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              "& fieldset": { border: "none" },
              "& input": { color: "#131212ff" },
            },
            "& .MuiInputLabel-root": { color: "#111111ff" },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              "& fieldset": { border: "none" },
              "& input": { color: "#0f0f0fff" },
            },
            "& .MuiInputLabel-root": { color: "#0e0d0dff" },
          }}
        />

        <Link to="/login_page" underline="none"  sx={{ display: "block", mt: 1, mb: 2, color: "#0f0f0fff" }}>
          Login Already
        </Link>
        

        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.2,
            borderRadius: "12px",
            background: "linear-gradient(90deg, #65b5f6ff, #ebfd85ff)",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            color: "black"
          }}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
}
