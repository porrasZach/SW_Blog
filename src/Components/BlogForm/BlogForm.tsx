import { useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseReleaseYear, chooseDescription } from '../../redux/slices/bookSlice';
import { Input, LongInput } from '../sharedComponents/Input';
import { Button, makeStyles } from '@material-ui/core';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { choosePostTitle, chooseSubtitle, chooseBody } from '../../redux/slices/blogSlice';


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
    form:{
        marginTop: '6rem',
        width: '20rem',
        height: '27rem',
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
        console.log(data)
        }

    const createBlogPost = () => {
        server_calls.create(token,'blog',new_blog_post.blog)
        history.push('/blog')
    }

    return (
        <div className={classes.root}>
                <form className={classes.form} onSubmit = {handleSubmit(onSubmit)}>
                <h2 className={classes.jedi}>Create a New Blog Post</h2>
                    <div>
                        <Input {...register('post_title')} name="post_title" placeholder='post title'/>
                    </div>
                    <div>
                        <Input {...register('sub_title')} name="sub_title" placeholder="subtitle"/>
                    </div>
                    <div>
                        <Input {...register('body')} name="body" placeholder="" />
                    </div>
                    <Button type='submit'>Create</Button>
                </form>
                <Button className={classes.submit} onClick={createBlogPost}>Submit</Button>
        </div>
    )
}