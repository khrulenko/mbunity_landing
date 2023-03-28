import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createIconLinksListWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    flexDirection: 'row',
    gap: '24px',

    [down('md')]: {
      justifyContent: 'center',

      marginTop: 'auto',
    },
  };
};

export { createIconLinksListWrapperStyles };
