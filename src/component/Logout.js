import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/private-theming";
import Theme from "../styled/Theme";
import SendIcon from '@mui/icons-material/Send';

const LogoutButton = () => {
    const { logout } = useAuth0();

  return (
      <ThemeProvider theme={Theme}>
        <Box
            sx={{
                background: '#021d25',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',          
            }}
        >
            <Container
                sx={{
                    width: '500px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    padding: '5rem 3rem'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        marginBottom: '35px',
                    
                    }}
                    color='white'
                >
                    LOGOUT
                </Typography>

                <Button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    variant="contained"
                    endIcon={<SendIcon />}
                    size="large"
                    color="primary"
                >
                    LOGOUT
                </Button>
            </Container>
        </Box>
      </ThemeProvider>
      
  )
};

export default LogoutButton;