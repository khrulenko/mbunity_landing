import { FunctionComponent } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { createContactWrapperStyles, createContactTextStyles } from './styles';

interface ContactProps {
  Icon: FunctionComponent;
  children: string;
}

const ContactWrapper = styled(Stack)(createContactWrapperStyles);
const ContactText = styled(Typography)(createContactTextStyles);

const Contact = ({ Icon, children }: ContactProps) => {
  return (
    <ContactWrapper>
      <Icon />

      <ContactText>{children}</ContactText>
    </ContactWrapper>
  );
};

export default Contact;
