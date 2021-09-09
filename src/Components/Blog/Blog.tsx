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
import { useFetchBlogs } from '../../custom-hooks/FetchBlogs';


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
      margin: '7rem auto 0 5rem',
      display: 'inline'
    },
    root2: {
      maxWidth: 340,
      margin: '5rem 20% auto auto',
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
    const { blogData, getData } = useFetchBlogs();
    
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


    const blogList = blogData.slice(-3).map((blogPost:any) =>
    <Card className={classes.root2}>
            <CardHeader
                title= {blogPost.post_title}
                subheader= {blogPost.timestamp}
            />
                <h6>Posted by GALAXY_ANONYMOUS</h6>
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
                <Typography className={classes.inline_edit} variant="body2" color="textSecondary" component="p">
                
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
      {token && token !== "" && token !== undefined ? (
        <Button onClick={blogLink} className={classes.link}>
          Contribute to the Blog
        </Button>
          ):
          (null)
          }
          
          {blogList}

    </div>
  );
}
