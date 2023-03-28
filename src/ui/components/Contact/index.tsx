import { FunctionComponent } from 'react';
import {
  Stack,
  styled,
  Typography,
  TypographyProps,
  StackProps,
} from '@mui/material';
import { createContactWrapperStyles, createContactTextStyles } from './styles';

interface CommonProps {
  alignStyle?: string;
}

interface ContactOwnProps {
  Icon: FunctionComponent;
  children: string;
}

type ContactProps = CommonProps & ContactOwnProps;

export type ContactTextProps = CommonProps & TypographyProps;
export type ContactWrapperProps = CommonProps & StackProps;

const ContactWrapper = styled(Stack)(createContactWrapperStyles);
const ContactText = styled(Typography)(createContactTextStyles);

const Contact = ({ Icon, children, alignStyle }: ContactProps) => {
  return (
    <ContactWrapper alignStyle={alignStyle}>
      <Icon />

      <ContactText alignStyle={alignStyle}>{children}</ContactText>
    </ContactWrapper>
  );
};

export default Contact;
