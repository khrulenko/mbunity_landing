import { Stack, styled, Typography } from '@mui/material';
import ContactsList from '../../components/ContactsList';
import IconLinksList from '../../components/IconLinksList';
import {
  createContactInfoWrapperStyles,
  createContactInfoDescriptionStyles,
  createContactInfoHeaderStyles,
  createSmallCircleStyles,
  createLargeCircleStyles,
} from './styles';

const ContactInfoWrapper = styled(Stack)(createContactInfoWrapperStyles);
const ContactInfoHeader = styled(Typography)(createContactInfoHeaderStyles);
const ContactInfoDescription = styled(Typography)(
  createContactInfoDescriptionStyles
);
const SmallCircle = styled(Stack)(createSmallCircleStyles);
const LargeCircle = styled(Stack)(createLargeCircleStyles);

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <Stack gap="6px">
        <ContactInfoHeader>Contact Information</ContactInfoHeader>

        <ContactInfoDescription>
          Say something to start a live chat!
        </ContactInfoDescription>
      </Stack>

      <ContactsList />

      <IconLinksList />

      <SmallCircle />

      <LargeCircle />
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
