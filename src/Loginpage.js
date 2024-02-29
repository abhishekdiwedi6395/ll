import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#FFEB3B' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={5}
          md={7}
          sx={{
            backgroundColor: '#FFEB3B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <img src='images/logo.png' style={{height:"100%",width:"100%"}}></img>
        </Grid>
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: "rgba(255, 255, 255, .4)", color: 'black' }}>
  <Box
    sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography component="h1" variant="h3" style={{ fontWeight: "bold", fontFamily: "cursive" }}>
      Sign in
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ backgroundColor: 'white', color: '#FFFFFF', borderRadius:"10px" }}
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
        sx={{ backgroundColor: 'white', color: '#FFFFFF', borderRadius:"10px" }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        sx={{ color: 'black', marginTop:"4px" }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2.5, backgroundColor: '#FFEB3B', color: '#000000', borderRadius:"10px" }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2" sx={{ color: 'black',textDecoration:"none", margin:"14px"}}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" sx={{ color: 'black',textDecoration:"none", margin:"14px" }}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Grid>
</Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
