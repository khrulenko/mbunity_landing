import { RadioControllerWrapperProps } from '.';
import { StyleFunction } from '../../../common/types';

const createRadioControllerWrapperStyles: StyleFunction<
  RadioControllerWrapperProps
> = ({ checked }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '13px',
  height: '13px',

  backgroundColor: checked ? 'black' : '#E0E0E0',
  borderRadius: '50%',
});

export { createRadioControllerWrapperStyles };
