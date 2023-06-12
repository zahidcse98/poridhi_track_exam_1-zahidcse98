import { CssBaseline, Grid } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";


function App() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData)
    const {name, email, phone} = inputData;
    createVisitor({name, email, phone});
    dataReset();
    getVisitor();
  }

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }

  const dataReset = () => {
    setInputData({
      ...inputData,
      name:'',
      email:'',
      phone:''
    })
    } 
    const baseURL = 'http://localhost:8000';
  const [serverData, setServerData] = useState([]);
  const getVisitor = async() => {
    try {
      const {data} = await axios.get(baseURL);
      console.log('result is:', data);
      setServerData(data);
    } catch(error) {
      console.log('fetching data failed!!');
    }
  }

  const createVisitor = async({name, email, phone}) => {
    try {
      const {data} = await axios.post(baseURL, {name, email, phone});
      console.log('Visitor added', data);
      return data;
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getVisitor();
  },[])

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    {/* Form item */}
    <FormComponent handleSubmit={handleSubmit} handleChange={handleChange} inputData={inputData} />
    {/* Table item  */}
    <TableComponent data={serverData} />
  </Grid>
  )
}

export default App
