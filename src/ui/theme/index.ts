import { createTheme, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTextField from './MuiComponents/MuiTextField';
import MuiFormControlLabel from './MuiComponents/MuiFormControlLabel';
import MuiRadio from './MuiComponents/MuiRadio';
import MuiButton from './MuiComponents/MuiButton';

// descr: these modules allow you to add
//custom fields to an existing Material UI theme
declare module '@mui/material/styles' {
  interface TypeText {
    header: string;
    secondaryDark: string;
    light: string;
    secondaryLight: string;
    label: string;
  }
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    secondary: string;
  }
}

const palette = {
  background: {
    default: '#FBFBFB',
    secondary: '#1B1B1B',
  },
  text: {
    primary: '#000000',
    header: '#1F1F1F',
    secondaryDark: '#717171',
    light: '#FFFFFF',
    secondaryLight: '#C9C9C9',
    label: '#8D8D8D',
  },
  divider: '#F5F5F5',
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiTextField,
    MuiFormControlLabel,
    MuiRadio,
    MuiButton,
  },
} as ThemeOptions);

export default theme;
