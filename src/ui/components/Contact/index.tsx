import { FunctionComponent } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { createContactWrapperStyles } from './styles';

interface ContactProps {
  Icon: FunctionComponent;
  children: string;
}

const ContactWrapper = styled(Stack)(createContactWrapperStyles);

const Contact = ({ Icon, children }: ContactProps) => {
  return (
    <ContactWrapper>
      <Icon />

      <Typography fontSize="16px" color="text.light">
        {children}
      </Typography>
    </ContactWrapper>
  );
};

export default Contact;
