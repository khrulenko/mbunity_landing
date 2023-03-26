import { StackProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createContactWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    gap: '25px',

    maxWidth: '337px',
  };
};

export { createContactWrapperStyles };
