import { makeStyles } from '@material-ui/core/styles';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { Button, 
    Card, 
    CardContent, 
    Typography, 
    CardActions } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


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
        display: 'flex',
        justifyContent: 'center'
    },
    header:{
        fontFamily: 'Star Jedi',
        marginTop: '6.5rem',
        fontSize: '3rem',
        textAlign: 'center'
    },
    card: {
        width: '45rem',
        position: 'absolute',
        top: '35%',
        background: 'lightgrey'
    },
    span: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px'
    },
    login: {
        marginLeft: '34%',
        fontSize: '18px'
    },
    button: {
        backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    },
    }
})


export const About = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>

            <h1 className={classes.header}>
                About This Application
            </h1>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2">
                Mos Eisley is a spaceport city on the Outer Rim 
                planet of Tatooine, homeworld to protagonist Luke 
                Skywalker. Famous in the film A New Hope for the 
                initial meeting place between Luke and Han Solo 
                (as well as other notable characters), the Mos 
                Eisley Cantina was home to space-farers and scoundrels alike.
                <br /><br />
                This application aims to mimic a sort of digital 
                forum and database for patrons to share messages 
                about the happenings around the cantina, but also 
                offers realistic usability to the user (that is, 
                the real humans accessing this page, not just 
                fictional) by allowing access to a database in 
                order to store favorite Star Wars novels with 
                various book details attached. Basic authentication 
                and a fun side game with a local parts merchant 
                make for an interactive and also functional hub 
                with plenty of touches straight from the saga.
                <br /><br />
                <div className={classes.span}>
                    For faster demonstration of features, use
                    the following login: 
                </div>
                <br />
                <div className={classes.login}>
                    <em><strong>maul@sith.org ----- horns</strong></em>
                </div>
                </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} onClick={() => {history.push('/')}}>Return Home</Button>
                </CardActions>
            </Card>
            
        </div>
    )
}