import { Stack, StackProps, styled } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { createRadioControllerWrapperStyles } from './styles';

interface RadioControllerProps {
  checked?: boolean;
}

export type RadioControllerWrapperProps = RadioControllerProps & StackProps;

const RadioControllerWrapper = styled(Stack)(
  createRadioControllerWrapperStyles
);

const RadioController = ({ checked = false }: RadioControllerProps) => (
  <RadioControllerWrapper checked={checked}>
    {checked && <DoneIcon style={{ fontSize: '8px' }} />}
  </RadioControllerWrapper>
);
export default RadioController;
