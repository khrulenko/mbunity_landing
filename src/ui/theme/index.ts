import { createTheme, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';

declare module '@mui/material/styles' {
  interface TypeText {
    header: string;
    secondaryDark: string;
    light: string;
    secondaryLight: string;
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
  },
  divider: '#F5F5F5',
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
  },
} as ThemeOptions);

export default theme;
