import { useState } from 'react';
import { server_calls } from '../../api';
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { makeStyles } from '@material-ui/styles';
import { DataGrid, GridColDef, GridRowModel } from '@material-ui/data-grid';
import { Button, } from '@material-ui/core';
import { useGetData } from '../../custom-hooks';


// const book_id = "8bba937a-313c-4920-9b3b-ee2ef8f11528"
// const token = '7e1e9f538e15fcca7a6ac45743e071b71eaad17cfbd7478b'


const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
    padding: '0',
    paddingTop: '10rem',
    margin: '0',
    justifyContent: 'space-around'
  },
  root2: {
    minWidth: 275,
    backgroundColor: 'rgb(200, 198, 198, .7)',
    height: '10rem',
    marginTop: '10rem'
  },
  grid: {
    width: '80%',
    height: '80%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})


const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 160 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'release_year', headerName: 'Release Year', width: 135 },
  { field: 'author', headerName: 'Author', width: 200 }
];


interface gridData{
  id?:string;
}


export const DataTable =  () => {
  const classes = useStyles();
  let { bookData, getData } = useGetData();
  let [gridData, setData] = useState<gridData>({id:''});

  let deleteData = () => {
    server_calls.delete(gridData.id!)
    getData()
  }

  console.log(gridData.id)

	let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
        
    }

    return (
      <div className={classes.root}>
        <h2 style={{color: 'white'}}>Your Archives</h2>
        <DataGrid 
        className={classes.grid} 
        rows={bookData} 
        columns={columns} 
        pageSize={5} 
        checkboxSelection  
        onSelectionModelChange = {handleCheckbox}
        />
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
      </div>
      );
}