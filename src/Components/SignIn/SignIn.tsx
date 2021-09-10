import React, { useState } from "react";
import { makeStyles, 
  createStyles, 
  TextField, 
  Button } from "@material-ui/core";
import desert_hills from '../../assets/Images/desert_hills1.jpg';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { chooseUserToken } from "../../redux/slices/rootSlice";
import { useHistory } from "react-router";


const useStyles = makeStyles(() =>
  createStyles({
    root:{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), 
        rgba(0, 0, 0, 0.7)), url(${desert_hills});`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
      padding: '0',
      margin: '0',
      display: 'flex',
      justifyContent: 'center'
  },
    form: {
        margin: '8rem auto'
    },
    h2: {
      fontFamily: 'Star Jedi'
    },
    submit: {
      backgroundColor: 'rgb(87, 204, 153, .7)',
    '&:hover': {
      backgroundColor: 'rgb(100, 204, 153)'
      },
    }
  }));

  
  export const SignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = useAppSelector((state) => state.root.user_token)
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const history = useHistory();

    const onSubmitClick = (
        event: React.MouseEvent<HTMLButtonElement>
        )=>{
      event.preventDefault()
      console.log("You pressed login")
      let opts = {
        'email': email,
        'password': password
      };

      fetch('/signin', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(opts)
      }).then(response => response.json())
        .then(data => {
          console.log("this came from the backend", data);
          {data.msg && data.msg === "Bad username or password" ? (
            window.alert("Invalid, please try again!")
          ) : (
            dispatch(chooseUserToken(data.access_token))
          )}
        })
        history.push('/')
      }

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
        )=>{
      setEmail(event.target.value)
    }
  
    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
        )=>{
      setPassword(event.target.value)
    }
  

    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <h2 className={classes.h2}>Login</h2>
          <br />
          {token && token !== "" && token !== undefined ? 
            (
            "You have logged in!"
             ) : (
                <form action="#">
                <div>
                  <TextField type="text" 
                    placeholder="email" 
                    onChange={handleEmailChange}
                    value={email} 
                  />
                </div>
                <br />
                <div>
                  <TextField
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </div>
                <br />
                <Button 
                className={classes.submit} 
                onClick={onSubmitClick} type="submit">
                  Login
                </Button>
              </form>
            )}
        </div>
      </div>
    )
  }