import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button,
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton,
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router';
import { useFetchBlogs } from '../../custom-hooks/FetchBlogs';
import { useFetchRim } from '../../custom-hooks/FetchRim';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        margin: '0'
    },
    card: {
        margin: 'auto',
        marginTop: '50%',
        height: 140,
        width: 120,
    }
  }),
);

export const OuterRim = () => {
    const classes = useStyles();
    const history = useHistory();
    const token = useAppSelector((state) => state.root.user_token)
    const { rimData, getData } = useFetchRim();

  return (
    <div className={classes.root}>
        <h1 className={classes.card}>
          {rimData}
        </h1>
    </div>
  );
}
