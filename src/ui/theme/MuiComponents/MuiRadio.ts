import { TextFieldProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiRadio = {
  styleOverrides: {
    root: ({}: OwnerStateWithTheme<TextFieldProps>) => {
      return {
        '&.MuiRadio-root.Mui-checked': {
          color: 'white',
        },
      };
    },
  },
};

export default MuiRadio;
