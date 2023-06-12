import { CssBaseline, Grid } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";


function App() {
  
  const [showCachedData, setShowCachedData] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const {name, email, phone} = inputData;
    createVisitor({name, email, phone});
    dataReset();
    setShowCachedData(true);
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
      setServerData(data);
      setShowCachedData(false);
      console.log(serverData)
    } catch(error) {
      console.log('fetching data failed!!');
    }
  }

  const createVisitor = async({name, email, phone}) => {
    try {
      const {data} = await axios.post(baseURL, {name, email, phone});
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
    <TableComponent data={serverData} getVisitor={getVisitor} showCachedData={showCachedData} />
  </Grid>
  )
}

export default App
