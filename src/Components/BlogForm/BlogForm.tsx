import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { choosePostTitle, 
    chooseSubtitle, 
    chooseBody } from '../../redux/slices/blogSlice';
import cantina from '../../assets/Images/han_cantina.jpg';


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
    },
    form:{
        marginTop: '6rem',
        width: '15rem',
        height: '25rem',
        marginLeft: '10rem',
        backgroundColor: 'rgb(255, 153, 0, .5)',
        border: '1px solid rgb(255, 153, 0, .5)',
        borderRadius: '5px',
        padding: '10px'
    },
    input:{
        height: '8rem'
    },
    jedi: {
        fontFamily: 'Star Jedi'
    },
    submit: {
        display: 'inline',
        marginLeft: '10rem',
        marginTop: '2rem',
        backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
    },
    },
    cantina: {
        position: 'absolute',
        right: '8rem',
        top: '10rem',
        borderRadius: '20px'
    }
})


interface BlogFormProps {
    id?:string,
    data?:{}
}

export const BlogForm = (props:BlogFormProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const new_blog_post = useAppSelector((state) => state)
    const { register, handleSubmit } = useForm({});
    const history = useHistory();
    const token = useAppSelector((state) => state.root.user_token)

    const onSubmit = (data:any, event:any) => {
        dispatch(choosePostTitle(data.post_title))
        dispatch(chooseSubtitle(data.sub_title))
        dispatch(chooseBody(data.body))
        console.log(data.post_title)
        }

    const createBlogPost = () => {
        server_calls.create(token,'blog',new_blog_post.blog)
        history.push('/blog')
    }

    return (
        <div className={classes.root}>
            <img 
            src={cantina} 
            className={classes.cantina} alt="han solo in cantina" />
                <form 
                className={classes.form} 
                onSubmit = {handleSubmit(onSubmit)}>
                <h2 className={classes.jedi}>From the Cantina...</h2>
                    <br />
                    <div>
                        <TextField 
                        inputProps={{maxLength: 100}} 
                        maxRows='1' multiline={true} 
                        {...register('post_title')} 
                        name="post_title" placeholder='post title'/>
                    </div>
                    <br />
                    <div>
                        <TextField 
                        inputProps={{maxLength: 200}} 
                        maxRows='1' multiline={true} 
                        {...register('sub_title')} 
                        name="sub_title" placeholder="subtitle"/>
                    </div>
                    <br />
                    <div>
                        <TextField 
                        minRows='6' 
                        maxRows='6' 
                        multiline={true} 
                        inputProps={{maxLength: 5000}} 
                        {...register('body')} 
                        name="body" placeholder="body - max 5000 char" />
                    </div>
                    <Button type='submit'>Create</Button>
                </form>
                <Button 
                className={classes.submit} 
                onClick={createBlogPost}>
                    Submit</Button>
        </div>
    )
}