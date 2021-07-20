import {Fragment, useState} from 'react'
import { Card,CardActions,CardContent, Typography,Button,Grid, DialogContent,Dialog,DialogTitle,DialogContentText, DialogActions } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image'
import React from 'react'
import { getMatchDetail } from '../api/Api';
import logo from '../img/vs.png'

const MyCard = ({match}) => {
    const [detail,setdetail] = useState({})
    const [open,setopen] = useState(false)
    const handleClick = (id) => {
        getMatchDetail(id) 
        .then(data =>{
         console.log("Match data",data)
         setdetail(data)
         handleOpen();
        })
        .catch(error => console.log(error))
     }
     
     const getMatchCard = () => {
         return (
             <Box m={2} b={2}>
                  <Card spacing={{margintop: 25}}>
                  <CardContent>
                  <Grid container justify='center' alignItems='center' spacing={4}>
                      <Grid item><Typography variant="h5"> {match['team-1']} </Typography></Grid>
                      <Grid item>
                      <Image
                       style={{width : 75,height:95}}
                       src= {logo} />
                      </Grid>
                      <Grid item><Typography variant="h5"> {match['team-2']} </Typography></Grid>
                 </Grid>
                 </CardContent>
                 <CardActions >
                  <Grid container justify='center'>
                  <Button  onClick={() => {
                      handleClick(match.unique_id)
                  }} item style={{marginRight:10}} variant='contained' color='primary'>Show Details</Button>
                  <Button item variant='contained' color='primary'> Match Start - {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                  </Grid>
                  </CardActions>
          </Card>

             </Box>
         
         )
     }

     const handleOpen = () => {
        setopen(true)
     }

     const handleClose = () => {
        setopen(false)
     }

     const getDialog = () => (
      <Dialog open={open} onClick={handleClose}>
          <DialogTitle id="alert-dialog-title">{"Match-Detail"}</DialogTitle>
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
                  <Typography>{detail.stat}</Typography>
                  <Typography>
                      Match <span 
                          style={{fontStyle:'italic',fontWeight:'bold'}}>
                          {detail.matchStarted? "Started": "Not Yet Started"}
                          </span>
                  </Typography>
                  <Typography>
                          <span 
                          style={{fontStyle:'italic',fontWeight:'bold'}}>
                          {detail.score}
                          </span>

                  </Typography>
              </DialogContentText>
              <DialogActions>
                  <Button onclick={handleClose} color='primary' autoFocus>Close</Button>
              </DialogActions>
          </DialogContent>
      </Dialog>   
     )
     return (
         <Fragment>
             {getMatchCard()}
             {getDialog()}
         </Fragment>
     )
}

export default MyCard