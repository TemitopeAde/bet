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
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Theme from '../styled/Theme';
import { useAuth0 } from "@auth0/auth0-react";
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/lazy";
import "swiper/css/pagination";
import { Pagination, Navigation,Lazy,  } from "swiper";
import "swiper/css/navigation";
import hero from '../images/hero.png'
import contact from '../images/contact.jpg';
import logo from '../images/logo.png';
import about2 from '../images/win2.jpeg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../component/Header';
import unknown from '../images/unknown.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const ariaLabel = { 'aria-label': 'description' };


export const slider_data = [
    one,two,three,four,five,six,seven
]

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    fullName: yup
      .string('Enter your Fullnames')
      .min(8, 'Fullname should be of minimum 5 characters length')
      .required('Fullname is required'),
    message: yup
    .string('Enter your Message')
    .min(8, 'Message should be of minimum 8 characters length')
    .required('Message is required'),
  });
  


    
const Homepage = () => {
    const { loginWithRedirect } = useAuth0();
    const value = 0.66;
    const {heading, text} = Hero_Data;
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
    
    const formik = useFormik({
        initialValues: {
          email: '',
          fullName: '',
          message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const label = "I consent to receiving marketing communications Trader Moes at the e-mail address provided above."
  return (
    <ThemeProvider theme={Theme}>
        <Header />
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
                        sx={{alignItems: 'center'}}
                    >
                        <Grid xs={6} item>
                            <Box
                                sx={{
                                        textAlign: 'left'
                                }}
                            >   
                                <Typography 
                                    variant='h3'
                                    sx={{
                                        width: '90%',
                                        marginBottom: '50px',
                                        fontSize: '4rem',
                                        color: '#fff',
                                        textAlign: 'left'
                                    }}
                                >
                                    {heading}
                                </Typography>
                                <Typography variant='subtitle1' 
                                    sx={{ 
                                        marginBottom: '35px',
                                        textTransform: 'uppercase'
                                    }}

                                >
                                    {text}
                                </Typography>
                                <button onClick={() => loginWithRedirect()} className="button-large">
                                    Join Now
                                </button>
                            </Box>
                            
                        </Grid>
                        <Grid xs={6} item>
                            <Box
                                component={'img'}
                                src={unknown}
                                height="550px"
                                width={1}
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
                    minHeight: '80vh'
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
                                opacity: '.8',
                                marginTop: '25px'
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
        

            >
                <Container
                    sx={{
                        paddingBottom: '8rem',
                        paddingTop: '8rem'
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            
                            marginBottom: '19px',
                            textAlign: 'center',
                            margin: '20px auto',
                            
                            fontSize: '3rem'
                        }}
                        
                    >
                        Data Science meets Sports Betting
                    </Typography>
                    <Typography 
                        variant='body1'
                        sx={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            width: '90%',
                            margin: '0 auto'
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
                                src={logo}
                                width={1}
                                height={1}
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
                                            
                                            marginBottom: '18px',
                                        }}
                                    >
                                        Our Mission
                                    </Typography>
                                    <Typography variant="h5">
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
                                        }}
                                    >
                                        Easy to Use
                                    </Typography>
                                    <Typography variant="h5">
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
                                    >
                                    Continuously Improving
                                    </Typography>
                                    <Typography 
                                        
                                        variant="h5">
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
                                height={1}
                                width={1}
                            >
                                <Grid 
                                    container 
                                    spacing={4} 
                                    direction={isMd? 'row': 'column'}
                                    sx={{alignItems: 'center'}}
                                >
                                    <Grid xs={6} item>
                                        <Box
                                        sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                                gap: '10px'
                                            }}
                                        >

                                            <Box sx={{ width: '300px'}} component="div">
                                                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
                                            </Box>
                                            
                                            <Typography variant="h6">
                                                WIN RATE
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid xs={6} item>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexDirection: 'column',
                                                        gap: '10px'
                                                    }}
                                                >
                                                <Box
                                                    component={'div'}
                                                    sx={{
                                                        borderRadius: '50%',
                                                        backgroundColor: '#00db92',
                                                        height: '150px',
                                                        width: '150px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexDirection: 'column'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{color: '#fff', fontWeight: 'bolder', fontSize: '1.5rem'}}
                                                    >
                                                        +30.2u 
                                                    </Typography>
                                                    
                                                </Box>
                                                <Typography variant="h6">
                                                        NHL Totals
                                                </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexDirection: 'column',
                                                        gap: '10px'
                                                    }}
                                                >
                                                <Box
                                                    component={'div'}
                                                    sx={{
                                                        borderRadius: '50%',
                                                        backgroundColor: '#00db92',
                                                        height: '150px',
                                                        width: '150px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexDirection: 'column',
                                                        
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{color: '#fff', fontWeight: 'bolder', fontSize: '1.5rem'}}
                                                    >
                                                        14.2% 
                                                    </Typography>
                                                    
                                                </Box>
                                                <Typography variant="h6">
                                                    ROI%
                                                </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        
                                        
                                    </Grid>
                                </Grid>
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
                                        
                                    >
                                        Props
                                    </Typography>
                                    <Typography 
                                       
                                        variant="h5">
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
                                            
                                            marginBottom: '18px',
                                           
                                            
                                        }}
                                    >
                                        Success
                                    </Typography>
                                    <Typography 
                                        
                                        variant="h5">
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
                                            marginBottom: '18px',
                                        }}
                                    >
                                    Model's ROI 
                                    </Typography>
                                    <Typography 
                                        
                                        variant="h5">
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
                padding={2}
                marginTop={8}
                marginBottom={8}
            >   
                
                <Container>
                    <Typography
                        variant="h4"
                        sx={{marginBottom: '50px',textAlign: 'center', fontSize: '3rem'}}
                    >
                        TEAM SUCCESS
                    </Typography>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#021d25",
                            "--swiper-pagination-color": "#021d25",
                        }}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        navigation={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination,Lazy, Navigation]}
                        
                    >
                        {slider_data.map((items,i) => (
                            <SwiperSlide>
                                <Box
                                    component="img"
                                    width={1}
                                    src={items}
                                    alt="..."
                                    sx={{
                                        height: '450px',
                                        width: '450px'
                                    }}
                                >

                                </Box>    
                            
                        

                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                    sx={{
                        textAlign: 'center'
                    }}
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
                    <Button
                        sx={{
                            border: 'none',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            fontSize: '27px',
                            letterSpacing: '1px',
                            color: '#FFFFFF',
                            padding: '20px 10px 18px',
                            width: '265px',
                            textIndent: '-46px',
                            background: '#00DB92',
                            boxShadow: '0 0 10px rgb(0 219 146 / 30%)',
                            backgroundSize: '28px 21px'
                        }}
                    >
                        JOIN NOW
                    </Button>
                    
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
                                src={contact}
                                width={1}
                                height={1}
                            >
    
                            </Box>
                        </Grid>
                        <Grid xs={6} item>
                        <Box
                            sx={{
                                textAlign: 'left'
                            }} 
                        >
                            <Typography 
                                variant="h4"
                                sx = {{
                                    marginBottom: '10px'
                                }}
                            >
                                CONTACT US
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                sx={{
                                    marginBottom: '40px',
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
                                

                                    
                                        <form onSubmit={formik.handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        name="fullName" 
                                                        placeholder="Full Name"
                                                        InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                                        InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                                        label="Full Name"
                                                        type="text"
                                                        variant="standard"
                                                        fullWidth
                                                        value={formik.values.fullName}
                                                        onChange={formik.handleChange}
                                                        error={
                                                        formik.touched.fullName &&
                                                        Boolean(formik.errors.fullName)
                                                        }
                                                        helperText={
                                                            formik.touched.fullName && formik.errors.fullName
                                                        }  
                                                    />
                                                    
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <TextField 
                                                        name="email" 
                                                        placeholder="Enter Email"
                                                        InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                                        InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                                        label="Email"
                                                        type="text"
                                                        variant="standard"
                                                        fullWidth
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        error={
                                                        formik.touched.email &&
                                                        Boolean(formik.errors.email)
                                                        }
                                                        helperText={
                                                            formik.touched.eamil && formik.errors.email
                                                        }  
                                                    />
                                                    
                                                </Grid>
                                            </Grid>

                                            <Grid container>
                                                <Grid xs={12} item>
                                                    <TextField 
                                                        name="message" 
                                                        placeholder="Enter your message" 
                                                        id="standard-multiline-static"
                                                        label="Message"
                                                        multiline
                                                        rows={6}
                                                        variant="standard"
                                                        fullWidth
                                                        InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                                        InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                                        value={formik.values.message}
                                                        onChange={formik.handleChange}
                                                        error={
                                                        formik.touched.message &&
                                                        Boolean(formik.errors.message)
                                                        }
                                                        helperText={
                                                            formik.touched.message && formik.errors.message
                                                        }  
                                                    />
                                                    
                                                </Grid>
                                            </Grid>                
                                            <Button sx={{ marginTop: '20px'}} color="primary" endIcon={<SendIcon />} type="submit" variant="contained" size="large">
                                                Submit
                                            </Button>
                                        </form>
                                   
                                    
                               
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

                        <Typography sx={{marginBottom: '15px',opacity: '1'}} variant="h6"><Link sx={{opacity: '1',color: '#fff', fontFamily: 'Raleway'}} href="#">WiseWager</Link></Typography>
                        <Typography sx={{opacity: "0.8",marginBottom: '10px'}}>Contact: <Link sx={{opacity: "0.6",color: '#fff'}} href="#"> contact@es.io</Link></Typography>
                        <Box>
                            <Grid
                                direction={'row'}
                                spacing={2}
                                container
                            >
                                
                            </Grid>


                            <Grid
                                spacing={4}
                                direction={'row'}
                                container
                                sx={{
                                    marginTop: "8px"
                                }}
                            >
                                <Grid item xs={3}>
                                    <Link href="/" sx={{ color: '#fff'}}>
                                        <FacebookIcon />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="/" sx={{ color: '#fff'}}>
                                        <InstagramIcon />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="/" sx={{ color: '#fff'}}>
                                        <YouTubeIcon />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="/" sx={{ color: '#fff'}}>
                                        <TwitterIcon />
                                    </Link>
                                </Grid>
                            </Grid>
                            <Typography variant="h6" sx={{ opacity: '.6', fontSize: '0.85rem', marginTop: '10px'}}>
                                All Payments are taken through Stripe and are secure.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        xs={3}
                        item
                    >   
                        <Typography sx={{marginBottom: '15px',color: "#fff", opacity: '1'}} variant="h5">MENU</Typography>
                        <Box sx={{
                            
                        }}>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{ color: '#fff'}} href="#">SERVICE</Link></Typography>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{ color: '#fff'}} href="#">FEATURES</Link></Typography>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{ color: '#fff'}} href="#">SUCCESS</Link></Typography>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{ color: '#fff'}} href="#">CONTACT</Link></Typography>
                        </Box>
                        

                    </Grid>

                    <Grid
                        xs={3}
                        item
                    >
                        <Typography sx={{fontFamily: 'Raleway',opacity: '1', color: '#fff', marginBottom: '15px'}} variant="h6">DASHBOARD</Typography>
                        <Box>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{color: '#fff'}} href="#">LOGIN</Link></Typography>
                            <Typography sx={{marginBottom: '10px',fontFamily: 'Poppins',fontSize: '1.2rem'}} variant="h6"><Link sx={{color: '#fff'}} href="#">REGISTER</Link></Typography>
                        </Box>
                        
                        
                    </Grid>
                    
                    <Grid
                        xs={3}
                        item
                    >   
                    
                        <Typography sx={{opacity: '1', color: "#fff", marginBottom: '15px'}} variant="h6">SUBSCRIBE FOR UPDATES</Typography>
                        <Typography sx={{ opacity: ".6" }}>Subscribe to receive notifications on upcoming restocks and promotions.</Typography>
                        <form  onSubmit={formik.handleSubmit}>
                            <Box className="form__group field">
                            <TextField 
                                name="email" 
                                placeholder="Enter Email"
                                InputProps={{ style: { fontSize: "1.3rem", color: "#fff" } }}
                                InputLabelProps={{ style: { fontSize: "1.3rem", color: "#fff" } }}
                                label="Enter your Email"
                                type="text"
                                variant="standard"
                                color="success"
                                
                                fullWidth
                                value={formik.values.email}
                                focused
                                onChange={formik.handleChange}
                                error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                                }
                                helperText={
                                    formik.touched.eamil && formik.errors.email
                                }  
                                />
                                
                            </Box>

                            <Box
                                sx={{marginTop: '25px'}}    
                            >
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label={label} />
                                </FormGroup>
                               
                            </Box>
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