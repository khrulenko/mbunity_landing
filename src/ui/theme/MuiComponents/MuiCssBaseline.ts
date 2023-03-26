import { Theme } from '@mui/material';

const MuiCssBaseline = ({ theme: { palette } }: { theme: Theme }) => ({
  styleOverrides: {
    body: {
      minHeight: '100vh',
      height: '100%',
    },
    '#root': {
      minHeight: '100vh',
      height: '100%',
      background: palette.background.default,
    },
  },
});

export default MuiCssBaseline;
