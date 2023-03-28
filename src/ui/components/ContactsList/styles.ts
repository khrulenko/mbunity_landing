import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactsListWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    gap: '50px',

    [down('md')]: {
      alignItems: 'center',
      gap: '15px',
    },
  };
};

export { createContactsListWrapperStyles };
