import { Button, Stack, styled, TextField, Typography } from '@mui/material';
import {
  createSubscribeHeaderStyles,
  createSubscribeWrapperStyles,
  createSubscribeFormWrapperStyles,
  createSubscribeDescriptionStyles,
} from './styles';

const SubscribeWrapper = styled(Stack)(createSubscribeWrapperStyles);
const SubscribeHeader = styled(Typography)(createSubscribeHeaderStyles);
const SubscribeFormWrapper = styled(Stack)(createSubscribeFormWrapperStyles);
const SubscribeDescription = styled(Typography)(
  createSubscribeDescriptionStyles
);

const Subscription = () => {
  return (
    <SubscribeWrapper>
      <SubscribeHeader>Join Our Newsletter</SubscribeHeader>

      <SubscribeFormWrapper>
        <TextField variant="filled" placeholder="Your email address" />

        <Button size="small">Subscribe</Button>
      </SubscribeFormWrapper>

      <SubscribeDescription>
        * Will send you weekly updates for your better tool management.
      </SubscribeDescription>
    </SubscribeWrapper>
  );
};

export default Subscription;
