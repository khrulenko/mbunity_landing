import { Stack } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Contact from '../Contact';

const ContactList = () => {
  return (
    <Stack gap="50px">
      <Contact Icon={PhoneInTalkIcon}>+1012 3456 789</Contact>

      <Contact Icon={EmailIcon}>demo@gmail.com</Contact>

      <Contact Icon={LocationOnIcon}>
        132 Dartmouth Street Boston, Massachusetts 02156 United States
      </Contact>
    </Stack>
  );
};

export default ContactList;
