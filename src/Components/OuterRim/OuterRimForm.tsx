import { useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseChosenNum } from '../../redux/slices/rimSlice';
import { Input, LongInput } from '../sharedComponents/Input';
import { Button, makeStyles } from '@material-ui/core';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../redux/hooks';


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
    },
    form:{
        marginTop: '6rem',
        width: '20rem',
        height: '27rem',
        marginLeft: '10rem',
        backgroundColor: 'rgb(255, 153, 0, .5)',
        border: '1px solid rgb(255, 153, 0, .5)',
        borderRadius: '5px',
        padding: '10px'
    },
    jedi: {
        fontFamily: 'Star Jedi'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center'
    },
    submit: {
        marginTop: '2rem',
        backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    },
    }
})


export const OuterRimForm = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const history = useHistory();

    const onDiceRoll = (event:any) => {
        let dice_roll = Math.floor(Math.random() * 83) + 1
        dispatch(chooseChosenNum(dice_roll))
        console.log(`chosen_num is: ${dice_roll}`)
        }

    const routeOuterRim = () => {
        history.push('/outer-rim/results')
    }

    return (
        <div className={classes.root}>
                <h2 className={classes.jedi}>Roll Watto's dice</h2>
                    <div className={classes.buttons}>
                        <Button className={classes.submit} onClick={onDiceRoll} >Roll</Button>
                        <Button className={classes.submit} onClick={routeOuterRim} >See Result</Button>
                    </div>         
        </div>
    )
}