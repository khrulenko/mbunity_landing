import { StackProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createFormWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    gap: '45px',

    padding: '40px',
    width: '100%',
    maxWidth: '676px',

    border: '1px dashed grey',
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

export { createFormWrapperStyles, createFieldsWrapperStyles };
