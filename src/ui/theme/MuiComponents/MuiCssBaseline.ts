import { PropsWithTheme } from '../../../common/types';

const MuiCssBaseline = ({ theme: { palette } }: PropsWithTheme) => ({
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
