import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';


// const book_id = "8bba937a-313c-4920-9b3b-ee2ef8f11528"
// const token = '7e1e9f538e15fcca7a6ac45743e071b71eaad17cfbd7478b'


const useStyles = makeStyles({
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
    paddingTop: '10rem',
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 3,
  },
  pos: {
    marginBottom: 2,
  },
  card: {
    minWidth: 30,
    width: '20rem',
    backgroundColor: 'rgb(200, 198, 198, .7)',
    height: '12rem',
    marginTop: '10rem'
  },
  grid: {
    width: '80%',
    height: '80%'
  },
})


export const DataTable =  () => {
  const classes = useStyles();
  let { bookData, getData } = useGetData();

    return (
      <div className={classes.root}>
        <h2>Your Archives</h2>
        {bookData.map((book: any) => {
        return (
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
              {book.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              {book.author}
              </Typography>
              <Typography variant="body2" component="p">
                {book.description}
                <br />
              </Typography>
            </CardContent>
          </Card>
        )
      })}
      </div>
      );
}        
