import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Hero_Data} from '../Data/Home/Hero';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import theme from '../styled/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ariaLabel = { 'aria-label': 'description' };

const Homepage = () => {
    const {heading, text, btnText} = Hero_Data;
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
    
  return (
    <ThemeProvider theme={theme}>
    <Box>
        <Box
            sx={{
                paddingTop: '6rem',
                paddingBottom: '6rem',
                background: '#021d25',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container>
                <Grid 
                    container  
                    spacing={4}
                    direction={isMd ? 'row' : 'column'}
                >
                    <Grid xs={6} item>
                        <Box
                            sx={{
                                    textAlign: 'left'
                            }}
                        >   <Typography variant='subtitle1' 
                                sx={{ 
                                    marginBottom: '15px',
                                    color: '#00db92',
                                    fontWeight: 'bolder',
                                    fontSize: '1.5rem'
                                }}

                            >
                                {text}
                            </Typography>
                            <Typography 
                                variant='h3'
                                sx={{
                                    width: '90%',
                                    marginBottom: '25px',
                                    fontSize: '4rem',
                                    color: '#fff',
                                    fontWeight: 'bolder'
                                }}
                            >
                                {heading}
                            </Typography>
                            
                            <button className="button-large">
                                Join Now
                            </button>
                        </Box>
                        
                    </Grid>
                    <Grid xs={6} item>
                        <Box
                            component={'img'}
                            src={'https://freesvg.org/img/businessman-with-sword.png'}
                        >
                        
                        </Box>
                    </Grid>
                </Grid>
                
            </Container>
            
        </Box>

        <Box
            sx={{
                textAlign: 'left',
                paddingTop: '6rem',
                paddingBottom: '4rem',
                height: '55vh'
            }}
        >
            <Container>
            <Grid
                container  
                spacing={4}
                direction={isMd ? 'row' : 'column'}
            >
                <Grid xs={8} item>
                    
                    <Typography 
                        variant="subtitle1"
                        sx={{
                            marginBottom: '15px',
                            color: '#00db92',
                            fontWeight: 'bolder',
                            fontSize: '1.9rem'
                        }}
                    >
                        OUR SERVICE
                    </Typography>
                    <Typography 
                        variant="heading2"
                        sx={{
                            color: '#021d25',
                            fontSize: '3rem',
                            fontWeight: 'bolder',
                            marginBottom: '35px'
                        }}
                    >
                        A science-based <br /> approach to sports <br />
                        <span className="bet-color">betting.</span>
                    </Typography>
                    <Typography 
                        variant="body1"
                        sx ={{
                            color: '#021d25',
                            fontSize: '1.2rem',
                            fontWeight: 'bolder',
                            opacity: '.8'
                        }}
                    >
                        The average bettor researches a hand full of data points when making decisions. Our prediction model researches over hundreds of data points from each sport, down to the individual player level.
                    </Typography>
                </Grid>

                <Grid xs={4} item>

                </Grid>
            </Grid>
            </Container>
            
            
            
        </Box>

        <Box
            sx={{
                background: '#021d25',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container
                
            >
                <Typography
                    variant="h3"
                    sx={{
                        
                        fontWeight: 'bolder',
                        marginBottom: '19px'
                    }}
                    color="primary"
                >
                    The Science
                </Typography>
                <Typography 
                    variant='body1'
                    sx={{
                        color: '#fff',
                        fontSize: '1.2rem',
                        fontWeight: '700'
                    }}
                >
                Data science is easily becoming the most important tool in the world. What a better way
                 to use it in one of the most data driven businesses in the world? Our machine-learning models 
                 continuously weigh the most important data points and adjust accordingly to what is and is not important 
                to help guide you to better bets. We are not cappers. We use science to help guide you to make more informed wagers!
                </Typography>
            </Container>

        </Box>


        <Box
            sx={{
                paddingTop: '5rem'
            }}
        >
            <Container
                sx={{
                    marginBottom: '6rem'
                }}
            >
                <Grid 
                    container  
                    spacing={4}
                    direction={isMd ? 'row' : 'column'}
                    sx={{
                        alignItems: 'center'
                    }}
                >
                    <Grid xs={6} item>
                        <Box
                            component={'img'}
                            src={'https://freesvg.org/img/businessman-with-sword.png'}
                        >

                        </Box>
                    </Grid>
                    <Grid xs={6} item>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    1.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                    To become the ultimate source of data to help bettors win!
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px',
                                marginTop: '2rem'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    2.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                    Easy to Use
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                        We push out easy-to-read guides to tell you what is favored to win, cover
                                         the spread, and go over/under based on our machine-learning models.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px',
                                marginTop: '2rem'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    3.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                   Continuously Improving
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                        Our machine-learning prediction model uses historical
                                         data that dates back 5+ years
                                         and updates weekly to get a better understanding of 
                                         how games and players are performing NOW!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            


            <Container
                sx={{
                    marginBottom: '5rem'
                }}
            >
                <Grid 
                    container  
                    spacing={4}
                    direction={isMd ? 'row-reverse' : 'column'}
                    sx={{
                        alignItems: 'center'
                    }}
                >
                    <Grid xs={6} item>
                        <Box
                            component={'img'}
                            src={'https://freesvg.org/img/businessman-with-sword.png'}
                        >

                        </Box>
                    </Grid>
                    <Grid xs={6} item>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    1.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                    Props
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                    Like team and player props? We have props.cash data in our live chat!
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px',
                                marginTop: '2rem'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    2.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                    Success
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                        We push out easy-to-read guides to tell you what is favored to win, cover
                                         the spread, and go over/under based on our machine-learning models.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{ 
                                display: 'flex' ,
                                justifyContent: 'space-between',
                                textAlign: 'left',
                                gap: '20px',
                                marginTop: '2rem'
                            }}
                        >
                            <Box>
                                <button className='flex-btn'>
                                    3.
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bolder',
                                        marginBottom: '18px',
                                        color: '#021d25',
                                        fontSize: '2.2rem',
                                        
                                    }}
                                >
                                  Model's ROI 
                                </Typography>
                                <Typography 
                                    sx={{
                                        fontWeight: 'bolder',
                                        fontSize: '1.4rem',
                                        color: '#021d25',
                                        opacity: '.6rem'
                                    }}
                                    varaint="h5">
                                        Our machine-learning prediction model uses historical
                                         data that dates back 5+ years
                                         and updates weekly to get a better understanding of 
                                         how games and players are performing NOW!
                                </Typography>
                            </Box>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>


        <Box
            sx={{
                background: 'whitesmoke',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container
                
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: '#021d25',
                        fontWeight: 'bolder',
                        marginBottom: '65px'
                    }}
                >
                    SIGN UP FOR ONLY $19/MONTH!
                </Typography>
                <button className="button-large">
                    <a>
                        JOIN NOW
                        <LoginIcon
                            sx={{
                                marginLeft: '10px'
                            }}
                         />
                    </a>
                </button>
            </Container>

        </Box>

        <Box
            sx={{
                marginTop: '60px',
                
            }}
        >
            <Container>
                
                <Grid
                    spacing={4}
                    container
                    direction={isMd ? 'row' : 'column-reverse'}
                    sx={{
                        marginTop: '5rem',
                        
                    }}
                >
                    <Grid xs={6} item>
                        <Box
                            component={'img'}
                            src={'https://tradermoes.io/images/mail-icon.svg'}
                            sx ={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
  
                        </Box>
                    </Grid>
                    <Grid xs={6} item>
                    <Box>
                    <Typography 
                        variant="h4"
                        sx={{
                            color: '#021d25',
                            fontWeight: 'bolder',
                            marginBottom: '30px',
                            textAlign: 'left',
                            fontSize: '3rem'
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            color: '#021d25',
                            marginBottom: '40px',
                            opacity: '.7',
                            textAlign: 'left !important',
                            fontSize: '1.5rem'

                        }}
                    >
                        Any questions or remarks? Send us a message!
                    </Typography>
                </Box>
                        <Box
                            component="form"
                            sx={{
                                marginTop: '40px'
                            }}
                        >
                            <Grid
                                spacing={2}
                                container
                                direction={'row'}
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-search"
                                        label="Name"
                                        name="name"
                                        type="text"
                                        variant="standard"
                                        fullWidth
                                        InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                        InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-search"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        variant="standard"
                                        fullWidth
                                        InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                        InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                    />
                                </Grid>
                            </Grid>
                            
                            <Box sx={{marginTop: '30px'}}>
                                <TextField
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={6}
                                    variant="standard"
                                    fullWidth
                                    InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                    InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                />
                            </Box>
                        </Box>
                    </Grid>        
                </Grid>
            </Container>
        </Box> 

        <Box
            sx={{
                textAlign: 'left',
                backgroundColor: '#021d25',
                padding: '1.5rem 0',
                color: '#fff' 
            }}
        >
            <Container>
            <Grid
                spacing={2}
                container
                direction={isMd ? 'row' : 'column'}
            >
                <Grid
                    xs={3}
                    item
                >   
                    <a href="#">LOGO</a>
                    <h4>Contact: <a href="#"> contact@es.io</a> </h4>
                    <Box>
                        <Grid
                            direction={'row'}
                            spacing={2}
                            container
                        >
                            
                        </Grid>


                        <Grid
                            spacing={2}
                            direction={'row'}
                            container
                        >
                            <Grid item xs={3}>
                                <Link>
                                    <FacebookIcon />
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <InstagramIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <YouTubeIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <TwitterIcon />
                            </Grid>
                        </Grid>
                        <Typography variant="h6" sx={{ opacity: '.6', fontSize: '0.85rem'}}>
                            All Payments are taken through Stripe and are secure.
                        </Typography>
                    </Box>
                </Grid>

                <Grid
                    xs={3}
                    item
                >   
                    <h4>MENU</h4>
                    <div className='dashboard'>
                        <h4><a href="#">SERVICE</a></h4>
                        <h4><a href="#">FEATURES</a></h4>
                        <h4><a href="#">SUCCESS</a></h4>
                        <h4><a href="#">CONTACT</a></h4>
                    </div>
                    

                </Grid>

                <Grid
                    xs={3}
                    item
                >
                    <h4>DASHBOARD</h4>
                    <div className='dashboard'>
                        <h4><a href="#">LOGIN</a></h4>
                        <h4><a href="#">REGISTER</a></h4>
                    </div>
                    
                </Grid>
                
                <Grid
                    xs={3}
                    item
                >   
                    <h4>SUBSCRIBE FOR UPDATES</h4>
                    <h5
                        style={{ opacity: .6 }}
                    >Subscribe to receive notifications on upcoming restocks and promotions.</h5>
                    <form>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Name</label>
                        </div>

                        <div>
                            <div class="box">
                                <input id="one" type="checkbox" />
                                <span class="check"></span>
                                <label for="one">I consent to receiving marketing communications Trader Moes at the e-mail address provided above.</label>
                            </div>
                            
                        </div>
                    </form>
                </Grid>
            </Grid>
            </Container>   
            
           
        </Box>                   
    </Box>
    </ThemeProvider>
  )
}

export default Homepage;