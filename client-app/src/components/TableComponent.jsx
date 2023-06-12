import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const TableComponent = ({data: visitors}) => {
  console.log('visitors is ', visitors.length);
  let dataToRender = null;
  if(visitors.length === 0) {
    dataToRender = (
    <TableRow>
    <TableCell >Not data found!!</TableCell>
    </TableRow>
    )
  } else if(visitors.length > 0) {
    dataToRender = visitors.map((visitor) => {
      return (<TableRow key={visitor.uid}>
      <TableCell align="right">{visitor.uid}</TableCell>
      <TableCell align="right">{visitor.name}</TableCell>
      <TableCell align="right">{visitor.email}</TableCell>
      <TableCell align="right">{visitor.phone}</TableCell>
      
    </TableRow>)
    })

    console.log(dataToRender);
  }
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
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToRender}
            
          
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Grid>
    )
}

export default TableComponent;