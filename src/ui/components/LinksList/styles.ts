import { LinkProps } from 'react-router-dom';
import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createLinksListWrapperStyles: StyleFunction<StackProps> = () => ({
  gap: '20px',

  width: 'fit-content',

  textAlign: 'left',
});

const createLinksListHeaderStyles: StyleFunction<StackProps> = () => ({
  fontWeight: '600',
  fontSize: '18px',
});

const createContentWrapperStyles: StyleFunction<StackProps> = () => ({
  gap: '24px',
});

const createFooterLinkStyles: StyleFunction<LinkProps> = ({
  theme: { palette },
}) => ({
  fontSize: '16px',
  textDecoration: 'none',
  color: palette.text.light,
});

export {
  createLinksListWrapperStyles,
  createLinksListHeaderStyles,
  createContentWrapperStyles,
  createFooterLinkStyles,
};
