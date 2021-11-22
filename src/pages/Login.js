import { Button, TextField,Box, Card, CardContent  } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import { selectAuthEmail, selectAuthPassword, selectAuthError, selectIsAuthenticated } from "../features/auth/authSelectors";
import { setUserEmail, setUserPassword, authUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import  styles  from "../login.module.css";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(selectAuthEmail);
  const password = useSelector(selectAuthPassword);
  const error = useSelector(selectAuthError);
  const isAuth = useSelector(selectIsAuthenticated);

  const handleLoginEmail = (event) => {
    event.preventDefault();
    dispatch(authUser());
    if (!isAuth){
      return
    }
    navigate('/posts');
  };

  const handleEmailChange = (event) => {
    dispatch(setUserEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setUserPassword(event.target.value));
  };

  const isValidLogin = () => {
    return email?.length && password?.length;
  };

  const header= error ? <div style={{color: 'red'}}> Fail to login </div> : null
  const title="Log in"
  
  return (
    <Box
      className={styles.container}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {header}
          </div>

          <div className={styles.divider}></div>
    <form onSubmit={handleLoginEmail}>
      <div>
        <TextField
          label="Email"
          placeholder="e.g.: john@gmail.com"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          fullWidth
          variant="outlined"
        ></TextField>
        <div className={styles.inputSpacer}></div>
        <TextField
          label="Password"
          placeholder="password"
          type={"password"}
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          variant="outlined"
        ></TextField>
      </div>

      <div>
        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            disabled={!isValidLogin()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </div>
      </div>
    </form>
    </CardContent>
      </Card>
    </Box>);
}

export default Login;
