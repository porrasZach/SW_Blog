import { makeStyles } from '@material-ui/core/styles';
import desert_hills from '../../assets/Images/desert_hills1.jpg';

interface Props{
    title: string;
}



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
        display: 'flex',
        justifyContent: 'center'
    },
    header:{
        fontFamily: 'Star Jedi',
        marginTop: '8rem',
        fontSize: '3rem'
    }
})



export const Home = (props:Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.header}>mos eisley archives</h1>
        </div>
    )
}