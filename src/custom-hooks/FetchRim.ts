import { useState, useEffect } from 'react';
import { server_calls } from '../api';
import { useAppSelector } from '../redux/hooks';

export const useFetchRim = () => {
    // let token = useAppSelector((state) => state.root.user_token)
    const outer_rim_call = useAppSelector((state) => state)
    const [rimData, setData] = useState<any>([]);

    const handleRimFetch = async () => {
        console.log('data was fetched')
        console.log(`this is the chosen number: ${outer_rim_call.rim.chosen_num}`)
        const result = await server_calls.outerRim(outer_rim_call.rim.chosen_num);
        console.log(`here is the result: ${result.result.properties.name}`)
        const final_result = result.result.properties.name
        setData(final_result)
    };

    useEffect( () => {
        handleRimFetch();
    }, [])

    return {rimData, getData:handleRimFetch}
}