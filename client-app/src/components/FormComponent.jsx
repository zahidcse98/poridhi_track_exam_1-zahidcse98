import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const FormComponent = ({handleSubmit, handleChange, inputData}) => {
  const {name, email, phone} = inputData;
    return (
        <Grid item xs={12} sm={8} md={4}  elevation={6}>
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter Name"
            name="name"
            autoComplete="text"
            autoFocus
            onChange={handleChange}
            value={name}
            inputProps={{min: 3, max: 30}}
          />

        <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            id="email"
            autoComplete="Email Address"
            onChange={handleChange}
            value={email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="number"
            id="phone"
            autoComplete="Mobile Number"
            onChange={handleChange}
            value={phone}
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