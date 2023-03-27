import { Stack, styled, Typography } from '@mui/material';
import {
  createContactPageWrapperStyles,
  createContactPageHeaderStyles,
  createContactPageDescriptionStyles,
  createContactInfoWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
  createContentWrapperStyles,
} from './styles';
import ContactList from '../../components/ContactsList';
import IconLinksList from '../../components/IconLinksList';
import ContactForm from '../../components/ContactForm';

const ContactPageWrapper = styled(Stack)(createContactPageWrapperStyles);
const ContactPageHeader = styled(Typography)(createContactPageHeaderStyles);
const ContactPageDescription = styled(Typography)(
  createContactPageDescriptionStyles
);
const ContactInfoWrapper = styled(Stack)(createContactInfoWrapperStyles);
const ContactInfoHeader = styled(Typography)(createContactInfoHeaderStyles);
const ContactInfoDescription = styled(Typography)(
  createContactInfoDescriptionStyles
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
        <ContactInfoWrapper>
          <Stack>
            <ContactInfoHeader>Contact Information</ContactInfoHeader>

            <ContactInfoDescription>
              Say something to start a live chat!
            </ContactInfoDescription>
          </Stack>

          <ContactList />

          <IconLinksList />
        </ContactInfoWrapper>

        <ContactForm />
      </ContentWrapper>
    </ContactPageWrapper>
  );
};

export default ContactPage;
