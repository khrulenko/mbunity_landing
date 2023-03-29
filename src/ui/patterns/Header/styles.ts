import { SvgIconProps } from '@mui/material';
import { StackProps } from '@mui/system';
import { SectionsIconsWrapperProps, HeaderTogglerProps } from '.';
import { StyleFunction } from '../../../common/types';

const createHeaderWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  maxWidth: '1440px',
  padding: '40px 100px',

  [down('md')]: {
    padding: '28px 20px',

    borderBottom: '1px solid',
    borderBottomColor: palette.divider,

    zIndex: '1',
  },
});

const createSectionsIconsWrapperStyles: StyleFunction<
  SectionsIconsWrapperProps
> = ({
  theme: {
    palette,
    breakpoints: { down, between },
  },
  isMenuShown,
}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '60px',

  width: '100%',
  maxWidth: '680px',

  [between('md', 'lg')]: {
    maxWidth: '600px',
    gap: '36px',
  },

  [down('md')]: {
    position: 'absolute',
    left: '0',
    top: '0',

    display: isMenuShown ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: '28px 20px',
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',

    color: palette.text.light,
    backgroundColor: 'black',
  },
});

const createSectionsWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '560px',
  maxHeight: '24px',

  [down('md')]: {
    flexDirection: 'column',
    gap: '30px',

    maxWidth: '100vw',
  },
});

const createIconsWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '36px',

  maxWidth: '98px',

  [down('lg')]: {
    gap: '24px',
  },

  [down('md')]: {
    position: 'fixed',
    bottom: '28px',

    justifyContent: 'center',
    gap: '36px',

    maxWidth: '100%',
  },
});

const createHeaderTogglerStyles: StyleFunction<HeaderTogglerProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  display: 'none',

  [down('md')]: {
    position: 'relative',
    display: 'block',
  },
});

const createCloseMenuIconStyles: StyleFunction<SvgIconProps> = () => ({
  fontSize: '32px',
  cursor: 'pointer',
});

const createOpenMenuIconStyles: StyleFunction<SvgIconProps> = () => ({
  fontSize: '24px',
  cursor: 'pointer',
});

const createLogoCloseWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',

  marginBottom: '32px',
});

export {
  createHeaderWrapperStyles,
  createSectionsIconsWrapperStyles,
  createSectionsWrapperStyles,
  createIconsWrapperStyles,
  createHeaderTogglerStyles,
  createCloseMenuIconStyles,
  createOpenMenuIconStyles,
  createLogoCloseWrapperStyles,
};
