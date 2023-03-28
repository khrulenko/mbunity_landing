import { Stack, styled } from '@mui/material';
import {
  URL_ABOUT,
  URL_BLOG,
  URL_CONTACT,
  URL_DOWNLOADS,
  URL_FORUM,
  URL_PRIVACY_POLICY,
  URL_REFUND_POLICY,
  URL_TECHLABZ_KEYBOX,
  URL_TERMS_OF_USE,
  URL_TERMS_SERVICES,
} from '../../../routing/URLs';
import ContactsList from '../../components/ContactsList';
import LinksList, { LinksListHeader } from '../../components/LinksList';
import LogoStub from '../../components/LogoStub';
import { SectionItems } from '../Header';
import Subscription from '../Subscription';
import {
  createFooterWrapperStyles,
  createFooterContentWrapperStyles,
  createInnerContentWrapperStyles,
  createFooterContactsWrapperStyles,
} from './styles';

const FooterWrapper = styled(Stack)(createFooterWrapperStyles);
const FooterContentWrapper = styled(Stack)(createFooterContentWrapperStyles);
const InnerContentWrapper = styled(Stack)(createInnerContentWrapperStyles);
const FooterContactsWrapper = styled(Stack)(createFooterContactsWrapperStyles);

const companyLinks: SectionItems = [
  { name: 'About', url: URL_ABOUT },
  { name: 'Contact', url: URL_CONTACT },
  { name: 'Blogs', url: URL_BLOG },
];

const legalLinks: SectionItems = [
  { name: 'Privacy Policy', url: URL_PRIVACY_POLICY },
  { name: 'Terms & Services', url: URL_TERMS_SERVICES },
  { name: 'Terms of Use', url: URL_TERMS_OF_USE },
  { name: 'Refund Policy', url: URL_REFUND_POLICY },
];

const quickLinks: SectionItems = [
  { name: 'Techlabz Keybox', url: URL_TECHLABZ_KEYBOX },
  { name: 'Downloads', url: URL_DOWNLOADS },
  { name: 'Forum', url: URL_FORUM },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoStub color="text.light" fontSize="36px" />

      <FooterContentWrapper>
        <InnerContentWrapper>
          <FooterContactsWrapper>
            <LinksListHeader>Reach us</LinksListHeader>

            <ContactsList gap="24px" />
          </FooterContactsWrapper>

          <LinksList header="Company" items={companyLinks} />
        </InnerContentWrapper>

        <InnerContentWrapper>
          <LinksList header="Legal" items={legalLinks} />

          <LinksList header="Quick Links" items={quickLinks} />
        </InnerContentWrapper>

        <Subscription />
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
