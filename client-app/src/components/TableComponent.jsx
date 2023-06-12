import { Alert, AlertTitle, Box, Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const TableComponent = ({data: visitors, getVisitor, showCachedData}) => {

  const dataState = !showCachedData ? (<Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  Showing updated Data
</Alert>) : (<Alert severity="error">
  <AlertTitle>Warning!!</AlertTitle>
  Showing Cached Data!
</Alert>)
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
        <Typography component="h1" variant="h5" sx={{marginBottom:'10px'}}>
          Data Display
        </Typography>
        <Stack sx={{ width: '100%'}} spacing={2}>
        {visitors.length === 0 ? '' : dataState}
        </Stack>
        <Button sx={{marginTop: '10px', marginBottom: "10px"}} variant="contained" onClick={getVisitor}>Get Data</Button>
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