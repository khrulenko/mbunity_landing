import { Stack, styled } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Contact from '../Contact';
import { createContactsListWrapperStyles } from './styles';

const ContactsListWrapper = styled(Stack)(createContactsListWrapperStyles);

const ContactsList = () => {
  return (
    <ContactsListWrapper>
      <Contact Icon={PhoneInTalkIcon}>+1012 3456 789</Contact>

      <Contact Icon={EmailIcon}>demo@gmail.com</Contact>

      <Contact Icon={LocationOnIcon}>
        132 Dartmouth Street Boston, Massachusetts 02156 United States
      </Contact>
    </ContactsListWrapper>
  );
};

export default ContactsList;
