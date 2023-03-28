import { Link } from 'react-router-dom';
import { Stack, styled, Typography } from '@mui/material';
import { SectionItems } from '../../patterns/Header';
import {
  createLinksListWrapperStyles,
  createLinksListHeaderStyles,
  createContentWrapperStyles,
  createFooterLinkStyles,
} from './styles';

interface LinksListProps {
  header: string;
  items: SectionItems;
}

const LinksListWrapper = styled(Stack)(createLinksListWrapperStyles);
export const LinksListHeader = styled(Typography)(createLinksListHeaderStyles);
const ContentWrapper = styled(Stack)(createContentWrapperStyles);
const FooterLink = styled(Link)(createFooterLinkStyles);

const LinksList = ({ header, items }: LinksListProps) => {
  return (
    <LinksListWrapper>
      <LinksListHeader>{header}</LinksListHeader>

      <ContentWrapper>
        {items.map(({ url = '', name }) => (
          <FooterLink to={url} key={url}>
            {name}
          </FooterLink>
        ))}
      </ContentWrapper>
    </LinksListWrapper>
  );
};

export default LinksList;
