import { useState} from 'react';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemText, 
    Theme,
    createTheme, 
    makeStyles, 
    createStyles,
    ThemeProvider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import saber_icon from '../../assets/Icons/light-saber.svg';
import { RouteComponentProps, withRouter} from "react-router-dom";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { chooseUserToken } from '../../redux/slices/rootSlice';


export const sandTheme = createTheme({
    palette: {
      primary: {
        main: '#ff9900'
      },
      secondary: {
        main: '#ffc400'
      },
      error: {
          main: '#f44336'
      },
      warning: {
          main: '#ff9800'
      },
      info: {
          main: '#2196f3'
      },
      success: {
        main: '#09FE00',
      },
      text: {
        primary: '#000000',
        secondary: '#FFFFFF',
      },
    },
  });



const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      opacity: 0.1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'left',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    sabers: {
      height: '2rem'
    },
    typo: {
      fontFamily: 'Star Jedi'
    },
    toolbar:{
      display: 'flex'
    },
    toolbar_button: {
      marginLeft: 'auto',
			color: 'white',
      fontFamily: 'Star Jedi',
      textTransform: 'lowercase'
    }
  }),
);



export const SaberIcon = () =>{
  const classes = useStyles();
  return (
    <img src={saber_icon} className={classes.sabers} alt={'lightsaber icon'} />
  );
}



// these objects give us the ability to access routes with a button
//     within the scope of our router
interface TopNavProps{
    history: RouteComponentProps["history"]; 
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};



export const TopNav = withRouter((props: TopNavProps) =>{
  console.log(props)
  const { history } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const token = useAppSelector((state) => state.user_token)
  const dispatch = useAppDispatch();

  const handleNavOpen = () =>{
    setOpen(true);
  };
  const handleNavClose = () =>{
    setOpen(false);
  };

  const noTokenList = [
    {
      text: 'Home',
      onClick: () => history.push('/')
    },
    {
      text: 'Login',
      onClick: () => history.push('/signin')
    },
    {
      text: 'Sign Up',
      onClick: () => history.push('/signup')
    },
    {
      text: 'Mos Eisley Blog',
      onClick: () => history.push('/blog')
    }
  ]

  const tokenList = [ 
    {
      text: 'Home',
      onClick: () => history.push('/')
    },
    {
      text: 'Log Out',
      onClick: () => {
        dispatch(chooseUserToken(''))
        history.push('/signin')
        window.location.reload();
        console.log("Logged Out")
      }
    },
    {
      text: 'Add Books',
      onClick: () => history.push('/add-books')
    },
    {
      text: 'Your Archive',
      onClick: () => history.push('/archive')
    },
    {
      text: 'Mos Eisley Blog',
      onClick: () => history.push('/blog')
    }
  ]

  return (
    <ThemeProvider theme={sandTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ClickAwayListener onClickAway={handleNavClose}>
        <AppBar
        position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={handleNavOpen}>
            <SaberIcon />
          </IconButton>
          <Typography className={classes.typo} variant="h6" noWrap>
            archive index
          </Typography>
          <Button className={classes.toolbar_button}>the outer rim</Button>
        </Toolbar>
        </AppBar>
        </ClickAwayListener>
        <MUIDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleNavClose}>
            <SaberIcon />
            </IconButton>
          </div>
        <Divider />
        {token && token !== "" && token !== undefined ? (
          <List>
          {tokenList.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem button key={text} onClick={() => {
                handleNavClose();
                onClick();
              }}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
          </List>)
          : (<List>
          {noTokenList.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem button key={text} onClick={() => {
                handleNavClose();
                onClick();
              }}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
          </List>
        )}
        
        </MUIDrawer>
      </div>
    </ThemeProvider>
  )
})