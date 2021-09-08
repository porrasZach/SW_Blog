import { useAppSelector, useAppDispatch } from '../redux/hooks';

// let token = '7e1e9f538e15fcca7a6ac45743e071b71eaad17cfbd7478b';


export const server_calls = {
    getAll: async (token:string) => {
        // let token = useAppSelector((state) => state.user_token)
        const response = await fetch(`/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data (many) from server')
        }
        return await response.json()
    },

    getOne: async (token:string,id:string) => {
        const response = await fetch(`/api/books/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data (one) from server')
        }

        return await response.json()
    },

    create: async(token:string, data:any = {}) => {
        const response = await fetch(`/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },
    update: async (token:string,id:string, data:any = {}) => {
        const response = await fetch(`/api/books/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to edit data in the database!')
        }
    },
    delete: async(token:string,id:string) => {
        const response = await fetch(`/api/books/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete data from the database!')
        }
    }
}