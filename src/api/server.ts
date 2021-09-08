import { useAppSelector, useAppDispatch } from '../redux/hooks';


export const server_calls = {
    getAll: async (token:string, db_table:string) => {
        const response = await fetch(`/api/${db_table}`,{
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

    getOne: async (token:string,id:string,db_table:string) => {
        const response = await fetch(`/api/${db_table}/${id}`,{
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

    create: async(token:string, db_table:string, data:any = {}) => {
        const response = await fetch(`/api/${db_table}`,{
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
    update: async (token:string,db_table:string,id:string, data:any = {}) => {
        const response = await fetch(`/api/${db_table}/${id}`, {
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
    delete: async(token:string,id:string,db_table:string) => {
        const response = await fetch(`/api/${db_table}/${id}`,{
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