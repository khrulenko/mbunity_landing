import { Stack, styled, Typography } from '@mui/material';
import {
  createContactPageWrapperStyles,
  createContactPageHeaderStyles,
  createContactPageDescriptionStyles,
  createContentWrapperStyles,
} from './styles';
import ContactForm from '../../patterns/ContactForm';
import ContactInfo from '../../patterns/ContactInfo';

const ContactPageWrapper = styled(Stack)(createContactPageWrapperStyles);
const ContactPageHeader = styled(Typography)(createContactPageHeaderStyles);
const ContactPageDescription = styled(Typography)(
  createContactPageDescriptionStyles
);

const ContentWrapper = styled(Stack)(createContentWrapperStyles);

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <Stack>
        <ContactPageHeader>Contact Us</ContactPageHeader>

        <ContactPageDescription>
          Any question or remarks? Just write us a message!
        </ContactPageDescription>
      </Stack>

      <ContentWrapper>
        <ContactInfo />

        <ContactForm />
      </ContentWrapper>
    </ContactPageWrapper>
  );
};

export default ContactPage;
