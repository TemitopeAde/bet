import { createTheme } from '@material-ui/core/styles';

const Theme = createTheme({
    palette: {
      primary: {
        main: '#021d25'
      },
      secondary: {
        main: '#DC143C'
      },
      white: {
          main: '#fff'
      },
      black: {
          main: '#000'
      },
      green: {
        main: '#00db92'
      }
    },
    typography: {
        fontSize: 16,
        h3: {
          fontSize: '2.5rem',
          fontWeight: 'bolder',
          // color: '#021d25',
          fontFamily: 'Montserrat',
          textAlign: 'center',
          color: '#fff'
        },
        h4: {
          fontSize: '2.2rem',
          fontWeight: 'bolder',
          color: '#021d25',
          fontFamily: 'Raleway',
          textAlign: 'left'
        },
        h5: {
          opacity: '.65',
          fontWeight: '500',
          color: '#021d25',
          fontFamily: "Montserrat",
          textAlign: 'left'
        },
        h6: {
          opacity: '.65',
          color: '#021d25',
          fontWeight: 'bolder',
          textAlign: 'left'
        },
        body1: {
            fontFamily: 'Montserrat',
            textAlign: 'left'
        },
        subtitle1: {
            opacity: '.65',
            color: '#00db92',
            fontWeight: 'bolder',
            fontSize: '1.5rem'
        },
        
      },
    
    
    
  })

  export default Theme;