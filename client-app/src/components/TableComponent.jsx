import { Alert, AlertTitle, Box, Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import moment from 'moment';

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
      const {uid, name, email, phone, createdAt} = visitor;
      let time = moment(createdAt).fromNow();
      return (<TableRow key={uid}>
      <TableCell align="right">{uid}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{time.toLocaleString()}</TableCell>
      
    </TableRow>)
    })

  }
    return (
        <Grid
      item xs={12} md={8}  elevation={8} 
    >
      <Box
        sx={{
          my: 8,
          ml: -2,
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
<TableContainer sx={{pr: "10px"}}>
      <Table  aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="right">UID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Entry Time</TableCell>
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