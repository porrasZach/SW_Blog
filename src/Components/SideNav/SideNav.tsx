import React, { useState} from 'react';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme,
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
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";



export const sandTheme = createTheme({
    palette: {
      primary: {
        main: '#ff9800'
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



const drawerWidth = 120;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
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
      justifyContent: 'flex-end',
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
    toolbar:{
      display: 'flex',
    },
    toolbar_button: {
      marginLeft: 'auto',
			color: 'white'
    }
  }),
);



// these objects give us the ability to access routes with a button
//     within the scope of our router
interface SideNavProps{
    history: RouteComponentProps["history"]; 
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};



export const SideNav = withRouter((props: SideNavProps) =>{
  console.log(props)
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  
  const handleNavOpen = () =>{
    setOpen(true);
  };
  const handleNavClose = () =>{
    setOpen(false);
  };

  const itemsList = [ 
    {
      text: 'Home',
      onClick: () => history.push('/')
    },
    {
      text: 'Sign In',
      onClick: () => history.push('/signin')
    },
    {
      text: 'Your Books',
      onClick: () => history.push('/books')
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
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        {/* <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleNavOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Button className={classes.toolbar_button}>Fuck Drones</Button>
        </Toolbar> */}
        </AppBar>
        <MUIDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleNavClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        <Divider />
        <List>
        {itemsList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
        </List>
        </MUIDrawer>
      </div>
    </ThemeProvider>
  )
})