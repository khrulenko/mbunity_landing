import { TextFieldProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiTextField = {
  defaultProps: {
    fullWidth: true,
    focused: true,
    variant: 'standard',
  },
  variants: [
    {
      props: { variant: 'standard' },
      style: ({
        theme: {
          palette,
          breakpoints: { down },
        },
        ownerState,
      }: OwnerStateWithTheme<TextFieldProps>) => {
        const value = ownerState.value;

        return {
          '&.MuiTextField-root': {
            borderBottom: '1px solid',
            borderColor: palette.text.label,

            '& .MuiInput-root': {
              color: palette.text.label,

              '&::before, &::after': {
                display: 'none',
              },
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: value ? 'black' : palette.text.label,
              fontWeight: '500',

              [down('md')]: {
                fontSize: '12px',
                lineHeight: '20px',
              },
            },

            '&:hover': {
              cursor: 'pointer',
              borderColor: palette.text.primary,

              '& .MuiInputLabel-root.Mui-focused': {
                cursor: 'pointer',
                color: palette.text.primary,
              },

              '& .MuiInput-root': {
                color: palette.text.primary,
              },
            },
          },
        };
      },
    },
    {
      props: { variant: 'filled' },
      style: {
        '&.MuiTextField-root': {
          borderRadius: '4px',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          backgroundColor: '#1E1E1E',

          '& .MuiFilledInput-root': {
            color: 'white',

            input: {
              padding: '10px',

              '&::placeholder': {
                fontSize: '11px',
                lineHeight: '16px',
              },
            },

            '&::before, &::after': {
              display: 'none',
            },
          },
        },
      },
    },
  ],
};

export default MuiTextField;
