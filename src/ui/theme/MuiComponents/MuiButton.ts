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
      style: {
        padding: '12px 22px 10px',
        maxWidth: '105px',

        fontSize: '13px',

        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
      },
    },
  ],
  styleOverrides: {
    root: ({}: OwnerStateWithTheme<ButtonProps>) => {
      return {
        width: '100%',

        fontSize: '16px',
        textTransform: 'capitalize',
        backgroundColor: 'black',

        zIndex: '1',

        ':hover': {
          backgroundColor: 'grey',
        },
      };
    },
  },
};

export default MuiButton;
