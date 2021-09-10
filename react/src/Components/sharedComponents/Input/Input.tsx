import { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

interface inputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:inputType, ref) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        multiline
        size='small'
        {...props}
      ></TextField>
    );
  });


  export const LongInput = forwardRef((props:inputType, ref) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        rows="3"
        multiline
        size='small'
        {...props}
      ></TextField>
    );
  });