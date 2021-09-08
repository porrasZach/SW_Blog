import { useState, useEffect } from 'react';
import { server_calls } from '../api';
import { useAppSelector } from '../redux/hooks';

export const useGetData = () => {
    let token = useAppSelector((state) => state.user_token)
    // introduce State that we will manipulate
    const [bookData, setData] = useState<any>([]);

    // interior function to get data that we will later insert into State
    const handleDataFetch = async () => {
        const result = await server_calls.getAll(token);
        setData(result)
    };

    // executes interior function, then adds received data to State
    useEffect( () => {
        handleDataFetch();
    }, [])

    // return new State, getData functionality : what functionality it gives us
    return {bookData, getData:handleDataFetch}
}


// export const useGetOne = (id:string) => {
//     const [bookData, setData] = useState<any>();
//     const handleDataFetch = async () => {
//         const result = await server_calls.getOne(id);
//         setData(result)
//     };
//     useEffect( () => {
//         handleDataFetch();
//     }, [])
//     return {bookData, getData:handleDataFetch}
// }