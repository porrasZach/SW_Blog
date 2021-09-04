import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
        marginTop: '15rem',
        marginLeft: '15rem'
    }
  }));


export const SignIn = () =>{
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const classes = useStyles();

    const onSubmitClick = (
        event: React.MouseEvent<HTMLButtonElement>
        )=>{
      event.preventDefault()
      console.log("You pressed login")
      let opts = {
        'email': email,
        'password': password
      }
      console.log(opts)
      fetch('/auth/signin', {
        method: 'POST',
        body: JSON.stringify(opts)
      }).then(response => response.json())
        .then(token => {
          if (token.access_token){
            console.log(token)          
          }
          else {
            console.log("Please type in correct username/password")
          }
        })
    }
  
    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
        )=>{
      setUsername(event.target.value)
    }
  
    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
        )=>{
      setPassword(event.target.value)
    }
  

    return (
      <div className={classes.form}>
        <h2>Login</h2>
        <form action="#">
          <div>
            <input type="text" 
              placeholder="email" 
              onChange={handleUsernameChange}
              value={email} 
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <button onClick={onSubmitClick} type="submit">
            Login Now
          </button>
        </form>
      </div>
    )
  }