import { makeStyles } from '@material-ui/styles';
import desert_hills from '../../assets/Images/desert_hills1.jpg';


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
        justifyContent: 'left'
    },
})


export const Blog = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
}