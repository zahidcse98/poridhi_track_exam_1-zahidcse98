import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const TableComponent = () => {
    return (
        <Grid
      item xs={12} sm={8} md={5}  elevation={6} 
    >
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
          Data Display
        </Typography>
<TableContainer>
      <Table  aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>UID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={'hlelo'}>
              <TableCell component="th" scope="row">
                4543
              </TableCell>
              <TableCell align="right">Zahd</TableCell>
              <TableCell align="right">3526353265</TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Grid>
    )
}

export default TableComponent;