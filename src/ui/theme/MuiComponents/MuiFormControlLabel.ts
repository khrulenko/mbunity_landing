import { TextFieldProps } from '@mui/material';
import { OwnerStateWithTheme } from '../../../common/types';

const MuiFormControlLabel = {
  styleOverrides: {
    root: ({}: OwnerStateWithTheme<TextFieldProps>) => ({
      '&.MuiFormControlLabel-root': {
        '& .MuiFormControlLabel-label': {
          fontSize: '12px',
        },
      },
    }),
  },
};

export default MuiFormControlLabel;
