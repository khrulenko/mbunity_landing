import { Stack, StackProps, styled } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Contact from '../Contact';
import { createContactsListWrapperStyles } from './styles';

interface ContactsListProps {
  gap?: string;
  alignStyle?: string;
}

export type ContactsListWrapperProps = ContactsListProps & StackProps;

const ContactsListWrapper = styled(Stack)(createContactsListWrapperStyles);

const ContactsList = ({ gap = '50px', alignStyle }: ContactsListProps) => {
  return (
    <ContactsListWrapper gap={gap} alignStyle={alignStyle}>
      <Contact Icon={PhoneInTalkIcon} alignStyle={alignStyle}>
        +1012 3456 789
      </Contact>

      <Contact Icon={EmailIcon} alignStyle={alignStyle}>
        demo@gmail.com
      </Contact>

      <Contact Icon={LocationOnIcon} alignStyle={alignStyle}>
        132 Dartmouth Street Boston, Massachusetts 02156 United States
      </Contact>
    </ContactsListWrapper>
  );
};

export default ContactsList;
