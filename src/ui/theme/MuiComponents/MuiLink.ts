import { LinkProps } from '@mui/material';
import { PropsWithTheme } from '../../../common/types';

const MuiLink = {
  styleOverrides: {
    root: ({ theme: { palette } }: PropsWithTheme<LinkProps>) => ({
      position: 'relative',

      display: 'flex',
      alignItems: 'center',

      color: palette.text.header,
      textDecoration: 'none',

      ':hover': {
        '::before': {
          content: "' '",

          position: 'absolute',
          transform: 'scale(1.2)',

          width: '100%',
          height: '100%',

          background: 'black',
          borderRadius: '8px',
          opacity: '0.1',
        },
      },
    }),
  },
};

export default MuiLink;
