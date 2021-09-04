import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseReleaseYear, chooseDescription } from '../../redux/slices/rootSlice';
import { Input, LongInput } from '../sharedComponents/Input';
import { Button, Card, makeStyles, createStyles, } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';


const useStyles = makeStyles({
    form:{
        marginTop: '15rem',
        width: '20rem',
        marginLeft: '3rem',
        backgroundColor: 'rgb(255, 153, 0, .2)',
        border: '1px solid rgb(255, 153, 0, .5)',
        borderRadius: '5px',
        padding: '10px'
    },
    input:{
        height: '8rem'
    },
})


interface BookFormProps {
    id?:string,
    data?:{}
}

interface BookState {
    title: string,
    author: string,
    release_year: string,
    description: string
}

export const BookForm = (props:BookFormProps) => {
    const classes = useStyles();

    // sends/dispatches changes once form is submitted
    const dispatch = useDispatch();

    // gives access to returned object of data from useGetData custom hook
    let { bookData, getData } = useGetData();

    // returns store to us so we can send info to server/flask api calls
    //     after changes have been made to the store
    const store = useStore();

    const title = useSelector<BookState>(state => state.title)

    // registers data & checks if data is of correct type
    const { register, handleSubmit } = useForm({});

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            server_calls.update(props.id, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        }else{
            dispatch(chooseTitle(data.title))
            dispatch(chooseAuthor(data.author))
            dispatch(chooseReleaseYear(data.release_year))
            dispatch(chooseDescription(data.description))
            server_calls.create(store.getState())
        }
    }
    return (
        <div>
                <form className={classes.form} onSubmit = {handleSubmit(onSubmit)}>
                    <div>
                        {/* <label htmlFor="title">Book Title</label> */}
                        <Input {...register('title')} name="title" placeholder='book title...'/>
                    </div>
                    <div>
                        {/* <label htmlFor="author">Author</label> */}
                        <Input {...register('author')} name="author" placeholder="author..."/>
                    </div>
                    <div>
                        {/* <label htmlFor="release_year">Release Year</label> */}
                        <Input {...register('release_year')} name="release_year" placeholder="release year..." />
                    </div>
                    <div>
                        {/* <label htmlFor="description">Description</label> */}
                        <LongInput {...register('description')} name="description" placeholder="description - max 500 char"/>
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
        </div>
    )
}