import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, CardActions, Button, Paper, Typography } from '@material-ui/core';
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
    }
  },
  view: {
    backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    }
  },
  jedi: {
    fontFamily: 'Star Jedi'
  }
})

export const BookGrid = () => {
  const classes = useStyles();
  const { bookData, getData } = useGetData();
  const [ thisBook, selectBook ] = useState(null);
  // const [ bgColor, setColor ] = useState('rgb(232, 246, 239, .7)');
  const [ filter, filterSet ] = useState('');

  let deleteData = () => {
    console.log(bookData);
    server_calls.delete(thisBook!).then(()=>getData());
  }

  let handleCardSelect = (id:any) =>{
    selectBook(id);
    console.log(id);
    // setColor('rgb(224, 93, 93, .7)');
}

  let viewData = () => {
    
  }
  
  const bookCards = bookData
  .filter((book:HTMLObjectElement) => book.title.toLowerCase().includes(filter.toLowerCase()))
  .map((book:any) =>
  <Card 
    key={book.id} 
    id={book.id}
    onClick={() => handleCardSelect(book.id)} 
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
        <label>
          Search<br />
        <input
          value={filter}
          onChange={(evt) => filterSet(evt.target.value)}
          className={classes.input}
        ></input>
        </label>
        <br /><br />
        <Button className={classes.delete} onClick={deleteData} size="small">Delete Selection</Button>
        <br /><br />
        <Button className={classes.view} onClick={viewData} size="small">View Details</Button>
        <br /><br />
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
