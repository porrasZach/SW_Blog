import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, CardActions, Button, Paper, Typography } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';
import { chooseBookID } from '../../redux/slices/rootSlice';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    root:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
        padding: '0',
        margin: '0',
        justifyContent: 'center'
    },
    paper: {
        height: 420,
        width: 360,
        marginTop: '11%',
        marginLeft: '50%',
        backgroundColor: 'rgb(232, 246, 239, .7)',
      },
})


export const BookZoom = () => {
    const classes = useStyles();
    const history = useHistory();
    const book = useAppSelector((state) => state)
    const goBack = () => {
        history.push('/archive');
    }
    return(
        <div className={classes.root}>
            <Card className={classes.paper}>
                <CardContent>
                    <Typography component="h2" variant="h5">
                        {book.title}
                    </Typography>
                    <Typography>
                        {book.author}
                    </Typography>
                </CardContent>
            </Card>
            <Button onClick={goBack}>
                Return
            </Button>
        </div>
    )
} 