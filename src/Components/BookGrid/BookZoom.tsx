import { useAppSelector } from '../../redux/hooks';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import notebook from '../../assets/Images/notebook.png';
import jedi_texts from '../../assets/Images/jedi_texts.png';


const useStyles = makeStyles({
    root:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        zIndex: -1,
        padding: '0',
        margin: '0',
    },
    jedi_texts: {
        position: 'absolute',
        top: '15rem',
        left: '6rem',
        borderRadius: '30px 30px 30px 30px'
    },
    paper: {
        height: 420,
        width: 360,
        marginTop: '11%',
        marginLeft: '60%',
        backgroundImage: `url(${notebook})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '45% 40%',
        position: 'absolute',
        borderRadius: '2px 2px 2px 2px',
      },
    paper_top: {
        paddingLeft: '45px'
    },
    paper_body: {
      width: '20rem',
      marginLeft: '2.5rem'  
    },
    return: {
        backgroundColor: 'rgb(87, 204, 153, .7)',
        '&:hover': {
            backgroundColor: 'rgb(100, 204, 153)'
        },
        marginLeft: '6rem',
        marginTop: '10rem'
    },
})


export const BookZoom = () => {
    const classes = useStyles();
    const history = useHistory();
    const book = useAppSelector((state) => state.book)
    const goBack = () => {
        history.push('/archive');
    }
    return(
        <div className={classes.root}>
            <img src={jedi_texts} className={classes.jedi_texts} alt="ancient jedi texts" />
            <Card className={classes.paper}>
                <CardContent className={classes.paper_top}>
                    <Typography component="h2" variant="h5">
                        {book.title}
                    </Typography>
                    <Typography>
                        {book.author}<br/>
                        {book.release_year}
                    </Typography>
                </CardContent>
                    <Typography className={classes.paper_body} component="p" variant="body1">
                        {book.description}
                    </Typography>
                <CardContent>
                </CardContent>
            </Card>
            <Button className={classes.return} onClick={goBack}>
                Return
            </Button>
        </div>
    )
} 