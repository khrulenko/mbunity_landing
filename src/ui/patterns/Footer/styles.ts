import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createFooterWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '45px',

  padding: '80px 80px 36px',
  width: '100%',

  color: palette.text.light,
  backgroundColor: 'black',

  [down('lg')]: {
    gap: '20px',

    padding: '20px 20px 35px',
  },
});

const createFooterContentWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '20px',

  padding: '30px',
  width: '100%',

  borderTop: '1px solid',
  borderColor: 'text.light',

  [down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',

    padding: '30px 0',
  },
});

const createInnerContentWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  gap: '20px',

  width: '100%',

  [down('lg')]: {
    justifyContent: 'space-between',
  },
});

const createFooterContactsWrapperStyles: StyleFunction<StackProps> = () => ({
  justifyContent: 'start',
  alignItems: 'start',
  gap: '20px',
});

export {
  createFooterWrapperStyles,
  createFooterContentWrapperStyles,
  createInnerContentWrapperStyles,
  createFooterContactsWrapperStyles,
};
