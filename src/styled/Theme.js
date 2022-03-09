import { createTheme } from '@mui/material/styles';

const Colors = {
    primary: '#021d25',
    secondary: '#DC143C',
    white: '#fff',
    black: '#000'
}


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
});


export default theme;