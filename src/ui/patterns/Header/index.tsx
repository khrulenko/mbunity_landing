import { Stack, styled, StackProps, useMediaQuery, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  createHeaderWrapperStyles,
  createSectionsIconsWrapperStyles,
  createSectionsWrapperStyles,
  createIconsWrapperStyles,
  createHeaderTogglerStyles,
  createCloseMenuIconStyles,
  createOpenMenuIconStyles,
  createLogoCloseWrapperStyles,
} from './styles';
import Section from '../../components/Section';
import LogoStub from '../../components/LogoStub';
import {
  URL_HOME,
  URL_BLOG,
  URL_SHOP,
  URL_ABOUT,
  URL_CONTACT,
  URL_PROFILE,
  URL_CART,
} from '../../../routing/URLs';
import { useState } from 'react';
import { AnyFunction } from '../../../common/types';
import HeaderLink from '../../components/HeaderLink';
import { ReactComponent as ProfileIcon } from './profile.svg';
import { ReactComponent as CartIcon } from './cart.svg';
import { ReactComponent as ProfileLightIcon } from './profile_light.svg';
import { ReactComponent as CartLightIcon } from './cart_light.svg';

export interface SectionItem {
  name: string;
  url?: string;
  children?: SectionItems;
}

export type SectionItems = SectionItem[];

export type SectionsIconsWrapperProps = StackProps & {
  isMenuShown: boolean;
};

export type HeaderTogglerProps = StackProps & {
  onClick?: AnyFunction;
};

const HeaderWrapper = styled(Stack)(createHeaderWrapperStyles);
const SectionsIconsWrapper = styled(Stack)(createSectionsIconsWrapperStyles);
const SectionsWrapper = styled(Stack)(createSectionsWrapperStyles);
const IconsWrapper = styled(Stack)(createIconsWrapperStyles);
const ShowOnMobile = styled(Stack)(createHeaderTogglerStyles);
const CloseMenuIcon = styled(CloseIcon)(createCloseMenuIconStyles);
const OpenMenuIcon = styled(MenuIcon)(createOpenMenuIconStyles);
const LogoCloseWrapper = styled(Stack)(createLogoCloseWrapperStyles);

const sections: SectionItems = [
  { name: 'Home', url: URL_HOME },
  {
    name: 'Features',
    children: [
      { name: 'One', url: '/one' },
      {
        name: 'Two',
        url: '/two',
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
  const [isMenuShown, setIsHeaderShown] = useState<boolean>(false);
  const isMobile = useMediaQuery(({ breakpoints: { down } }: Theme) =>
    down('md')
  );

  const toggleHeader = () =>
    setIsHeaderShown((isHeaderShown) => !isHeaderShown);

  return (
    <HeaderWrapper>
      <LogoStub />

      <SectionsIconsWrapper isMenuShown={isMenuShown}>
        <SectionsWrapper>
          <ShowOnMobile>
            <LogoCloseWrapper>
              <LogoStub color="text.light" />

              <CloseMenuIcon onClick={toggleHeader} />
            </LogoCloseWrapper>
          </ShowOnMobile>

          {sections.map((section) => (
            <Section key={section.name} section={section} />
          ))}
        </SectionsWrapper>

        <IconsWrapper>
          <HeaderLink url={URL_PROFILE}>
            {isMobile ? <ProfileLightIcon /> : <ProfileIcon />}
          </HeaderLink>

          <HeaderLink url={URL_CART}>
            {isMobile ? <CartLightIcon /> : <CartIcon />}
          </HeaderLink>
        </IconsWrapper>
      </SectionsIconsWrapper>

      {!isMenuShown && (
        <ShowOnMobile>
          <OpenMenuIcon onClick={toggleHeader} />
        </ShowOnMobile>
      )}
    </HeaderWrapper>
  );
};

export default Header;
