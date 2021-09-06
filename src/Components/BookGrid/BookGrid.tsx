import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { Grid, Paper, Card, CardContent, Typography } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';


// const book_id = "8bba937a-313c-4920-9b3b-ee2ef8f11528"
// const token = '7e1e9f538e15fcca7a6ac45743e071b71eaad17cfbd7478b'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
    width: '100%',
    minWidth: 275,
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
    padding: '0',
    margin: '0',
  },
  pos: {
    marginBottom: 2,
  },
  card: {
    flexGrow: 1,
  },
  paper: {
    width: '80%',
    height: '80%'
  },
}),
);


export const BookGrid =  () => {
  const classes = useStyles();
  let { bookData, getData } = useGetData();
    return (
      <div className={classes.root}>
        <h2>Your Archives</h2>
        <Grid item xs={12}>
        <Grid container justifyContent="center">
          {bookData.map((book:any) => (
            <Grid key={book} item>
              <Paper className={classes.paper}>
                {book.title}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </div>
    )}


