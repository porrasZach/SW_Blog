import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button,
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton,
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        margin: '0'
    },
    link: {
      marginTop: '10rem',
    },
    root2: {
      maxWidth: 540,
      margin: '5rem 20% auto auto'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.standard,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    inline_edit: {
        display: 'inline'
    },
    h6: {
        paddingLeft: '1rem',
        color: ''
    }
  }),
);

export const Blog = () => {
    const classes = useStyles();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);
    const token = useAppSelector((state) => state.root.user_token)
  
    const blogLink = () => {
      history.push('/write-blog')
    }

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <div className={classes.root}>
      {token && token !== "" && token !== undefined ? (
        <Button onClick={blogLink} className={classes.link}>
          Contribute to the Blog
        </Button>
          ):
          (null)
          }
        <Card className={classes.root2}>
            <CardHeader
                title="This is a hardcoded blog post"
                subheader="September 7, 2021"
            />
            <h6 className={classes.h6}>Posted by Darth Maul</h6>
            <CardActions className={classes.inline_edit}>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <CardContent className={classes.inline_edit}>
                <Typography className={classes.inline_edit} variant="body2" color="textSecondary" component="p">
                <em>This recent chapter of Kingsley Wars was really intense. Spoiler alert!</em>
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quasi natus dolorum minus nihil officiis veniam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ullam consequatur 
                        exercitationem maiores corrupti mollitia labore assumenda unde ipsum, perferendis 
                        possimus, ea adipisci, provident quam quidem autem? Delectus odit atque dolorum 
                        adipisci excepturi ipsum laborum modi eum nam animi maxime quis doloribus tempore 
                        praesentium, ex totam provident voluptates distinctio non!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </div>
  );
}
