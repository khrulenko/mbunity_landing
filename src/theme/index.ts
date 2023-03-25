import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiLink from './MuiComponents/MuiLink';

type CustomPalette = PaletteOptions & {
  text: {
    header: string;
  };
};

const palette: CustomPalette = {
  background: {
    default: '#F5F5F5',
  },
  text: {
    primary: '#000000',
    header: '#1F1F1F',
  },
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiLink,
  },
} as ThemeOptions);

export default theme;
