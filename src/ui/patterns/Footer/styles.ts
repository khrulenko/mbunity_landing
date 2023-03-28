import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createFooterWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '45px',

    padding: '80px 80px 36px',
    width: '100%',

    color: 'white',
    backgroundColor: 'black',
  };
};

const createFooterContentWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: '30px',
    width: '100%',

    borderTop: '1px solid',
    borderColor: 'text.light',
  };
};

const createInnerContentWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
  };
};

const createFooterContactsWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    justifyContent: 'start',
    alignItems: 'start',
    gap: '20px',
  };
};

export {
  createFooterWrapperStyles,
  createFooterContentWrapperStyles,
  createInnerContentWrapperStyles,
  createFooterContactsWrapperStyles,
};
