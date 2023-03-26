import { LinkProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createLinkSectionStyles: StyleFunction<LinkProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    [down('md')]: {
      width: 'fit-content',
      color: palette.text.light,
    },
  };
};

export { createLinkSectionStyles };
