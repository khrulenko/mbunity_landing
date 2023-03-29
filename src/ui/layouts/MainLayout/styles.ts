import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createMainLayoutWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  minHeight: '100vh',
});

const createPageWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  alignItems: 'center',

  padding: '35px 20px 50px 20px',
  width: '100%',

  [down('md')]: {
    paddingTop: '14px',
  },
});

export { createMainLayoutWrapperStyles, createPageWrapperStyles };
