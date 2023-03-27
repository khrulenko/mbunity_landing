import { createTheme, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiTextField from './MuiComponents/MuiTextField';

declare module '@mui/material/styles' {
  interface TypeText {
    header: string;
    secondaryDark: string;
    light: string;
    secondaryLight: string;
    label: string;
  }
}

const palette = {
  background: {
    default: '#FBFBFB',
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
  },
} as ThemeOptions);

export default theme;
