import React,{useEffect, useState, Fragment} from 'react'
import './App.css';
import { getmatches } from './api/Api';
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'
import {Grid, Typography} from "@material-ui/core";
function App() {
const [matches, setMatches] = useState([])  
useEffect(() => {
  getmatches()
  .then((data) => {
    setMatches(data.matches)
  })
  .catch((error) => alert('Could not find data'))
},[])
  return (
    <div className="App">
    <Navbar /> 
     <Typography variant='h3' style={{margin:20}}>Welcome to my Live cricket score app!</Typography> 
     <Grid container>
       <Grid sm='2'></Grid>
       <Grid sm='8'>
       {
       matches.map((match) => (  
       <Fragment>
         {
           (match.type==="Twenty20")?(<MyCard key={match.unique_id} match={match} />):('')
         }
       </Fragment>
       ))
      }
       </Grid>
     </Grid>
    </div>
  );
}

export default App;
