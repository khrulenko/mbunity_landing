import { StackProps, RadioGroupProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createFormWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  position: 'relative',
  gap: '45px',

  padding: '40px',
  width: '100%',
  maxWidth: '676px',

  borderRadius: '10px',

  [down('md')]: {
    gap: '20px',

    padding: '20px 21px 64px',
    maxWidth: '491px',
  },
});

const createFieldsWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '40px',

  [down('md')]: {
    flexDirection: 'column',
    gap: '20px',
  },
});

const createSelectWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  gap: '14px',

  [down('md')]: {
    display: 'flex',
    gap: '10px',
  },
});

const createRadioHeaderStyles: StyleFunction<RadioGroupProps> = () => ({
  fontWeight: 'bold',
  fontSize: '14px',
});

const createRadioGroupWrapperStyles: StyleFunction<RadioGroupProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',

  [down('md')]: {
    rowGap: '14px',
  },
});

const createPlaneImageStyles: StyleFunction<{}> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  position: 'absolute',
  top: '32px',
  left: '-70%',

  width: '296px',
  height: '237px',

  [down('md')]: {
    left: '0%',

    width: '190px',
    height: '120px',
  },
});

export {
  createFormWrapperStyles,
  createFieldsWrapperStyles,
  createSelectWrapperStyles,
  createRadioHeaderStyles,
  createRadioGroupWrapperStyles,
  createPlaneImageStyles,
};
