import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { chooseBookID, chooseDescription, chooseAuthor, chooseReleaseYear, chooseTitle } from '../../redux/slices/bookSlice';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, Button, Typography } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';
import { useHistory } from 'react-router';


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
    paddingTop: '5rem',
    margin: '0',
  },
  container: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '1rem'
  },
  paper: {
    height: 140,
    width: 120,
    cursor: 'pointer',
    backgroundColor: 'rgb(232, 246, 239, .7)',
    '&:hover': {
      backgroundColor: 'rgb(184, 223, 216, .7)'
    },
  },
  input:{
    backgroundColor: 'rgb(255, 153, 0, .5)',
    '&:hover': {
      backgroundColor: 'rgb(255, 153, 0)'
      },
    border: '1px solid rgb(255, 153, 0, .5)',
    borderRadius: '5px',
    padding: '10px'
},
  delete: {
    backgroundColor: 'rgb(224, 93, 93, .7)',
    '&:hover': {
      backgroundColor: 'rgb(224, 93, 93)'
    },
    margin: 'auto 1rem'
  },
  view: {
    backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    }
  },
  add: {
    backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    },
    margin: 'auto 1rem'
  },
  jedi: {
    fontFamily: 'Star Jedi'
  }
})

export const BookGrid = () => {
  const classes = useStyles();
  const history = useHistory();
  const { bookData, getData } = useGetData();
  const [ thisBook, selectBook ] = useState('');
  const [ filter, filterSet ] = useState('');
  const dispatch = useAppDispatch();
  let token = useAppSelector((state) => state.root.user_token)
  

  let deleteData = () => {
    console.log(thisBook)
    server_calls.delete(token,thisBook!).then(()=>getData());
  }

  let handleCardSelect = (book:any) =>{
    selectBook(book.id);
    dispatch(chooseBookID(book.id))
    dispatch(chooseAuthor(book.author))
    dispatch(chooseDescription(book.description))
    dispatch(chooseTitle(book.title))
    dispatch(chooseReleaseYear(book.release_year))
    console.log(book.id);
}

  let viewData = () => {
    history.push('/book-details');
  }

  let addBook = () => {
    history.push('/add-books')
  }
  
  const bookCards = bookData
  .filter((book:HTMLObjectElement) => book.title.toLowerCase().includes(filter.toLowerCase()))
  .map((book:any) =>
  <Card 
    key={book.id} 
    id={book.id}
    onClick={() => handleCardSelect(book)} 
    className={classes.paper}
    >
      <CardContent>
        <Typography component="h2" variant="h5">
        {book.title}
        </Typography>
        <br /><br />
        {book.author}
      </CardContent>
  </Card>
  );
  
    return (
      <div className={classes.root}>
        <h2 className={classes.jedi}>Your Archives</h2>
        <br />
        <div>
          <label>
            Search Title<br />
          <input
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
            className={classes.input}
          ></input>
          </label>
          <Button className={classes.delete} onClick={deleteData} size="small">Delete Selection</Button>
          <Button className={classes.view} onClick={viewData} size="small">View Selection</Button>
          <Button className={classes.add} onClick={addBook} size="small">Add Entry</Button>

        </div>
          <Grid 
            className={classes.container}
            container 
            direction="row" 
            justifyContent="space-around" 
            alignItems="center" 
            spacing={1}
          >
            {bookCards}
          </Grid>
        </div>
      );
}        
