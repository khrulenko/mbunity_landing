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

export interface SectionItem {
  name: string;
  path?: string;
  children?: SectionItems;
}

export type SectionItems = SectionItem[];

const HeaderWrapper = styled(Stack)(createHeaderWrapperStyles);
const SectionsIconsWrapper = styled(Stack)(createSectionsIconsWrapperStyles);
const SectionsWrapper = styled(Stack)(createSectionsWrapperStyles);
const IconsWrapper = styled(Stack)(createIconsWrapperStyles);

const sections: SectionItems = [
  { name: 'Home', path: 'home' },
  {
    name: 'Features',
    children: [
      { name: 'One', path: 'one' },
      {
        name: 'Two',
        path: 'two',
        children: [
          { name: 'N-One', path: 'one' },
          { name: 'N-Two', path: 'two' },
          { name: 'N-Three', path: 'three' },
        ],
      },
      { name: 'Three', path: 'three' },
    ],
  },
  { name: 'Blog', path: 'blog' },
  { name: 'Shop', path: 'shop' },
  { name: 'About', path: 'about' },
  { name: 'Contact', path: 'contact' },
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
          <Link href={'profile'}>
            <AccountCircleOutlinedIcon />
          </Link>

          <Link href={'cart'}>
            <ShoppingCartOutlinedIcon />
          </Link>
        </IconsWrapper>
      </SectionsIconsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
