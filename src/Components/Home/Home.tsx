import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

interface Props{
    title: string;
}



const useStyles = makeStyles({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        padding: '0',
        margin: '0'
    },
})



export const Home = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}