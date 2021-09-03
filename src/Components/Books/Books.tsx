import React, { useEffect } from 'react';

const book_id = "8bba937a-313c-4920-9b3b-ee2ef8f11528"
const token = '7e1e9f538e15fcca7a6ac45743e071b71eaad17cfbd7478b'


export const Books = () =>{
    useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      headers: { 'access-token': `Bearer ${token}`,
                  'Content-Type': 'application/json'}          
    };
    fetch(`/api/books/${book_id}`, requestOptions).then(response =>
      response.json().then(data =>{
      console.log(data);
      return data;
    })
  );
}, []);

  return <div>
  </div>
}

