import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, CardActions, Button, Paper } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';


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
    padding: '3rem',
    paddingTop: '10rem',
    margin: '0',

  },
  container: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  paper: {
    height: 140,
    width: 120,
    backgroundColor: 'rgb(232, 246, 239, .7)',
    '&:hover': {
      backgroundColor: 'rgb(184, 223, 216, .7)'

    }
  }
})

export const BookGrid = () => {
  const classes = useStyles();
  const { bookData, getData } = useGetData();
  const [ thisBook, selectBook ] = useState();
  const [ bgColor, setColor ] = useState('rgb(232, 246, 239, .7)');

  let deleteData = () => {
    console.log(bookData)
    server_calls.delete(thisBook!).then(()=>getData())
  }

  let handleCardSelect = (id:any) =>{
    selectBook(id);
    console.log(id);
}
  
  const bookCards = bookData.map((book:any) =>
    <Card onClick={() => handleCardSelect(book.id)} key={book.id} className={classes.paper}>
      <CardContent>
      {book.title}
      <br /><br />
      {book.author}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
  
    return (
      <div className={classes.root}>
        <h2>Your Archives</h2>
        <Button onClick={deleteData} size="small">Delete</Button>
          <Grid 
            className={classes.container}
            container 
            direction="row" 
            justifyContent="space-around" 
            alignItems="baseline" 
            spacing={2}
          >
            {bookCards}
          </Grid>
        </div>
      );
}        
