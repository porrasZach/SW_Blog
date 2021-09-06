import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardActions, Button, Paper } from '@material-ui/core';
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
  let { bookData, getData } = useGetData();
  let [ thisBook, selectBook ] = useState();

  let deleteData = () => {
    console.log(bookData)
    server_calls.delete(thisBook!)
    getData()
  }

  let handleCardSelect = (id:any) =>{
    selectBook(id);
    console.log(id)
}
  
  const bookCards = bookData.map((book:any) =>
    <Card onClick={() => handleCardSelect(book.id)} key={book.id} className={classes.paper}>
      {book.title}
      <br /><br />
      {book.author}
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
