import { chooseChosenNum } from '../../redux/slices/rimSlice';
import { Button, makeStyles } from '@material-ui/core';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../redux/hooks';
import watto_die from '../../assets/Images/watto_die_crop.png';
import watto_die_rolled from '../../assets/Images/watto_die_crop_rolled.png';
import { useState } from 'react';


const useStyles = makeStyles({
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
    watto_die: {
        position: 'absolute',
        height: '15rem',
        width: 'auto',
        top: '5rem'
    },
    watto_text: {
        fontFamily: 'Star Jedi',
        position: 'absolute',
        top: '22rem',
        color: 'darkgrey'
    },
    med_div: {
        display: 'flex',
        justifyContent: 'center'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '20%',
        margin: '27rem auto auto auto'
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
    const [rolled, diceRoll] = useState(false);

    const onDiceRoll = (event:any) => {
        let dice_roll = Math.floor(Math.random() * 83) + 1
        dispatch(chooseChosenNum(dice_roll))
        console.log(`chosen_num is: ${dice_roll}`)
        diceRoll(true)
        }

    const routeOuterRim = () => {
        diceRoll(false)
        history.push('/outer-rim/results')
    }

    return (
        <div className={classes.root}>
                <div className={classes.med_div}>

                {rolled == true ? 
                (
                    <img 
                    className={classes.watto_die} 
                    src={watto_die_rolled} alt="watto_dice" />
                ) : (
                    <img 
                    className={classes.watto_die} 
                    src={watto_die} alt="watto_dice" />
                )
                }
                <h2 className={classes.watto_text}>Roll Watto's dice<br/></h2>
                    <div className={classes.buttons}>
                        <Button 
                        className={classes.submit} 
                        onClick={onDiceRoll} >Roll</Button>
                        <Button 
                        className={classes.submit} 
                        onClick={routeOuterRim} >See Result</Button>
                    </div>   
                </div>
        </div>
    )
}