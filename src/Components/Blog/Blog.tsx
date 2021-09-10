import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button,
  Card, CardHeader, CardContent, CardActions, Collapse, IconButton,
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useFetchBlogs } from '../../custom-hooks/FetchBlogs';
import cantina_scene from '../../assets/Images/cantina.jpg';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        margin: '0'
    },
    link: {
      margin: '7rem auto 0 5rem',
      display: 'inline',
      backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
      },
    },
    cantina: {
      position: 'absolute',
      top: '11rem',
      left: '5rem',
      borderRadius: '20px'
    },
    blog_list: {
      maxWidth: 340,
      margin: '2rem auto auto 63%',
      backgroundColor: 'rgb(61, 178, 255, .8)',
      border: '9px solid rgb(34, 87, 122, .3)'
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
    const { blogData, getData } = useFetchBlogs();
    
// WILL ADD BLOG AUTHOR IN THE FUTURE; ISSUE WITH SQL DB RELATIONSHIPS

// const temp_token = 'a07dce55cd3e0ea184fc5f3416d100e2da4b30cf3682e630'
// console.log(blogData)
// const user_name = server_calls.getOne(token,'user',temp_token)
// console.log(user_name)
  
    const blogLink = () => {
      history.push('/blog-form')
    }

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    const blogList = blogData.slice(-1).map((blogPost:any) =>
    <Card className={classes.blog_list}>
            <CardHeader
                title= {blogPost.post_title}
                subheader= {blogPost.timestamp}
            />
                <h6>Posted by GALAXY_ANONYMOUS</h6>

{/* // WILL ADD BLOG AUTHOR IN THE FUTURE; ISSUE WITH SQL DB RELATIONSHIPS */}

{/* <h6 className={classes.h6}>Posted by {user_name} </h6> */}

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
                <Typography 
                className={classes.inline_edit} 
                variant="body2" 
                color="textSecondary" component="p">
                  <em>{blogPost.sub_title}</em>
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        
                      {blogPost.body}

                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )


  return (
    <div className={classes.root}>
        <Button onClick={blogLink} className={classes.link}>
          Contribute to the Blog
        </Button>
        <img 
        src={cantina_scene} 
        className={classes.cantina} alt="cantina scene" />
          {blogList}
    </div>
  );
}
