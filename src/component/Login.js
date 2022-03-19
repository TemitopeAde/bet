import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/private-theming";
import Theme from "../styled/Theme";
import SendIcon from '@mui/icons-material/Send';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import login from '../images/login.jpg';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
      <ThemeProvider theme={Theme}>
        <Box
            paddingY={4}
            height={1}
        >
            <Grid 
                container 
                spacing={4} 
                direction={isMd ? 'row' : 'column'}
                sx={{alignItems: 'center'}}
            >
                <Grid item xs={6}>
                    <Box 
                        component={'img'}
                        width={1}
                        height={1}
                        src={login}
                    >

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontFamily: 'Raleway',
                                color: '#021d25',
                                fontWeight: 'bolder'
                            }}
                        >
                            WELCOME BACK
                        </Typography>
                        <Typography 
                            variant="body1"
                            sx={{
                                mb: 2,
                                fontFamily: 'Montserrat'
                            }}
                        >
                            To keep connected with us, please login with Discord
                        </Typography>
                        <Button
                            onClick={() => loginWithRedirect()}
                            variant="contained"
                            endIcon={<SendIcon />}
                            size="large"
                            
                            sx={{ 
                                backgroundColor: '#00db92', 
                                width: '250px',
                                fontFamily: 'Raleway',
                            }}
                        >
                            LOGIN NOW
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
      
  )
};

export default LoginButton;