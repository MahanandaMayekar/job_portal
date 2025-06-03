import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const ApplyJobPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Apply for Job
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Email" type="email" fullWidth variant="outlined" />
          <TextField label="Address" fullWidth variant="outlined" />
          <TextField
            label="Contact Number"
            type="tel"
            fullWidth
            variant="outlined"
          />
          <Button variant="outlined" component="label">
            Upload Cover Letter
            <input
              className="hidden"
              type="file"
              accept=".pdf,.doc,.docx"
             
            />
          </Button>
          <Button variant="contained" color="primary">
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ApplyJobPage;
