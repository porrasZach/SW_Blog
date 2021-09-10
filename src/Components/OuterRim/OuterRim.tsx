import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useFetchRim } from '../../custom-hooks/FetchRim';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), 
          rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
        padding: '0',
        margin: '0',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        margin: '13% auto auto auto',
        height: 140,
        width: 'auto',
        fontFamily: 'Star Jedi',
        textAlign: 'center',
        fontSize: '6rem',
        color: 'rgb(0, 0, 0, .7)'
    },
    button: {
      position: 'absolute',
      marginTop: '27rem',
      backgroundColor: 'rgb(255, 225, 148, .8)',
    '&:hover': {
      backgroundColor: 'rgb(255, 225, 148)'
    },
    }
  }),
);

export const OuterRim = () => {
    const classes = useStyles();
    const history = useHistory();
    const { rimData, getData } = useFetchRim();

    const routeBack = () => {
      history.push('/outer-rim')
    }

  return (
    <div className={classes.root}>
        <h1 className={classes.card}>
          {rimData}
        </h1>
        <Button 
        className={classes.button} 
        onClick={routeBack}>Back to Watto's dice</Button>
    </div>
  );
}
