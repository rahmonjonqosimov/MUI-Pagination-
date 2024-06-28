import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSignInMutation } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slice/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [singIn, { isSuccess, data, isLoading, isError }] = useSignInMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (password.trim() && username.trim()) {
      const user = {
        UserName: data.get("username"),
        password: data.get("password"),
      };
      console.log(user);
      singIn(user);
    } else {
      return toast.warning("Enter username and password!");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Username and password are invalid ! ");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      toast.success("Welcome to admin panel!");
      navigate("/admin");
    }
  }, [isSuccess]);

  return (
    <>
      <div
        style={{
          height: " calc( 100vh - 141.48px ) ",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? "Loading..." : "Sign In"}
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default LoginForm;
