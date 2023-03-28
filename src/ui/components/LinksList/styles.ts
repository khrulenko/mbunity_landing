import { LinkProps } from 'react-router-dom';
import { StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createLinksListWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    gap: '20px',

    width: 'fit-content',

    textAlign: 'left',
  };
};

const createLinksListHeaderStyles: StyleFunction<StackProps> = () => {
  return {
    fontWeight: '600',
    fontSize: '18px',
  };
};

const createContentWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    gap: '24px',
  };
};

const createFooterLinkStyles: StyleFunction<LinkProps> = () => {
  return {
    fontSize: '16px',
    textDecoration: 'none',
    color: 'white',
  };
};

export {
  createLinksListWrapperStyles,
  createLinksListHeaderStyles,
  createContentWrapperStyles,
  createFooterLinkStyles,
};
