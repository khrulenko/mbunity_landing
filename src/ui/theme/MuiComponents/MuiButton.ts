import { ButtonProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiButton = {
  variants: [
    {
      props: { variant: 'contained', size: 'medium' },
      style: {
        alignSelf: 'end',

        padding: '15px 48px',
        maxWidth: '214px',

        backgroundColor: 'black',

        ':hover': {
          backgroundColor: 'grey',
        },
      },
    },
    {
      props: { variant: 'contained', size: 'small' },
      style: {},
    },
  ],
  styleOverrides: {
    root: ({}: OwnerStateWithTheme<ButtonProps>) => {
      return {};
    },
  },
};

export default MuiButton;
