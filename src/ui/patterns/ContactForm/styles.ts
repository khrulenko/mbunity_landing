import { StackProps, RadioGroupProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createFormWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    gap: '45px',

    padding: '40px',
    width: '100%',
    maxWidth: '676px',

    borderRadius: '10px',
  };
};

const createFieldsWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '40px',
  };
};

const createRadioHeaderStyles: StyleFunction<RadioGroupProps> = () => {
  return {
    fontWeight: 'bold',
    fontSize: '14px',
  };
};

const createRadioGroupWrapperStyles: StyleFunction<RadioGroupProps> = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  };
};

export {
  createFormWrapperStyles,
  createFieldsWrapperStyles,
  createRadioHeaderStyles,
  createRadioGroupWrapperStyles,
};
