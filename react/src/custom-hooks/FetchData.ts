import { useState, useEffect } from 'react';
import { server_calls } from '../api';
import { useAppSelector } from '../redux/hooks';

export const useGetData = () => {
    let token = useAppSelector((state) => state.root.user_token)
    const [bookData, setData] = useState<any>([]);

    const handleDataFetch = async () => {
        console.log('data was fetched')
        const result = await server_calls.getAll(token,'books');
        
        setData(result)
    };

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {bookData, getData:handleDataFetch}
}