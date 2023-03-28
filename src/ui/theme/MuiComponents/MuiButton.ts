import { ButtonProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiButton = {
  defaultProps: {
    variant: 'contained',
  },
  variants: [
    {
      props: { variant: 'contained', size: 'medium' },
      style: ({
        theme: {
          breakpoints: { down },
        },
      }: OwnerStateWithTheme<ButtonProps>) => ({
        alignSelf: 'end',

        padding: '15px 48px',
        maxWidth: '214px',

        backgroundColor: 'black',
        textTransform: 'capitalize',

        ':hover': {
          backgroundColor: 'grey',
        },

        [down('md')]: {
          alignSelf: 'center',

          padding: '10px 0',
          width: '100%',
          maxWidth: '491px',
          maxHeight: '40px',

          fontSize: '12px',
        },
      }),
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
