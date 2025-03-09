
import { blueGrey, grey } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    },
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: blueGrey[500],
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;