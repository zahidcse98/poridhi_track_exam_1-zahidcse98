import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const FormComponent = () => {
    const handleSubmit = () => {
        console.log('hello');
      }
    return (
        <Grid item xs={12} sm={8} md={5}  elevation={6}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Data Input
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter Name"
            name="name"
            autoComplete="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="mobile"
            label="Phone Number"
            type="number"
            id="number"
            autoComplete="Mobile Number"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Data
          </Button>
        </Box>
      </Box>
    </Grid>
    )
}

export default FormComponent;