import { CssBaseline, Grid } from "@mui/material";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";


function App() {
  

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    {/* Form item */}
    <FormComponent />
    {/* Table item  */}
    <TableComponent />
  </Grid>
  )
}

export default App
