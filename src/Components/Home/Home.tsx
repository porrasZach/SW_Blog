import { makeStyles } from '@material-ui/core/styles';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useAppSelector } from '../../redux/hooks';
import luke_mando from '../../assets/Images/luke_mando.jpeg'

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
    },
    header:{
        fontFamily: 'Star Jedi',
        marginTop: '8rem',
        fontSize: '3rem',
        textAlign: 'center'
    },
    subheader_logout: {
        fontFamily: 'Star Jedi',
        textAlign: 'center',
        marginTop: '10rem',
        color: 'grey'
    },
    subheader_login: {
        fontFamily: 'Star Jedi',
        textAlign: 'center',
        marginTop: '-6rem',
        color: 'black',
        position: 'absolute',
    },
    h6: {
        fontFamily: 'Star Jedi',
        textAlign: 'center',
        marginTop: '-3rem',
        color: 'black',
        position: 'absolute',
    },
    img: {
        height: '50vh',
        width: 'auto',
        borderRadius: '3px 100px'
    },
    img_div: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '13rem'
    }
})


export const Home = (props:Props) => {
    const classes = useStyles();
    const token = useAppSelector((state) => state.root.user_token)
    return (
        <div className={classes.root}>
            { token && token !== "" && token !== undefined ? 
            (
                null
            ) : (
            <h1 className={classes.header}>mos eisley archives<br/> 
                <span style={{fontFamily: 'impact'}}>&</span> 
                &nbsp;cantina blog
            </h1>
            )
            }
            
            { token && token !== "" && token !== undefined ? 
            (
                <div className={classes.img_div}>
                    <h2 className={classes.subheader_login}>welcome, traveler!</h2>
                    <h6 className={classes.h6}>access data via index</h6>
                    <img src={luke_mando} className={classes.img} alt="luke_mandalorian" />
                </div>
            ) : (
            <h3 className={classes.subheader_logout} >Please login or signup</h3>
            )
            }
        </div>
    )
}