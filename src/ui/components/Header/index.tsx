import { Stack, styled, Link } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  createHeaderWrapperStyles,
  createSectionsIconsWrapperStyles,
  createSectionsWrapperStyles,
  createIconsWrapperStyles,
} from './styles';
import Section from '../Section';
import LogoStub from '../LogoStub';
import {
  URL_HOME,
  URL_BLOG,
  URL_SHOP,
  URL_ABOUT,
  URL_CONTACT,
  URL_PROFILE,
  URL_CART,
} from '../../../routing/URLs';

export interface SectionItem {
  name: string;
  url?: string;
  children?: SectionItems;
}

export type SectionItems = SectionItem[];

const HeaderWrapper = styled(Stack)(createHeaderWrapperStyles);
const SectionsIconsWrapper = styled(Stack)(createSectionsIconsWrapperStyles);
const SectionsWrapper = styled(Stack)(createSectionsWrapperStyles);
const IconsWrapper = styled(Stack)(createIconsWrapperStyles);

const sections: SectionItems = [
  { name: 'Home', url: URL_HOME },
  {
    name: 'Features',
    children: [
      { name: 'One', url: '/one' },
      {
        name: 'Two',
        children: [
          { name: 'N-One', url: '/n_one' },
          { name: 'N-Two', url: '/n_two' },
          { name: 'N-Three', url: '/n_three' },
        ],
      },
      { name: 'Three', url: 'three' },
    ],
  },
  { name: 'Blog', url: URL_BLOG },
  { name: 'Shop', url: URL_SHOP },
  { name: 'About', url: URL_ABOUT },
  { name: 'Contact', url: URL_CONTACT },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoStub />

      <SectionsIconsWrapper>
        <SectionsWrapper>
          {sections.map((section) => (
            <Section key={section.name} section={section} />
          ))}
        </SectionsWrapper>

        <IconsWrapper>
          <Link href={URL_PROFILE}>
            <AccountCircleOutlinedIcon />
          </Link>

          <Link href={URL_CART}>
            <ShoppingCartOutlinedIcon />
          </Link>
        </IconsWrapper>
      </SectionsIconsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
