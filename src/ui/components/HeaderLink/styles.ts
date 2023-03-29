import { LinkProps } from 'react-router-dom';
import { StyleFunction } from '../../../common/types';
import { createHoverStyles } from '../../../common/utils';

const createHeaderLinkWrapperStyles: StyleFunction<LinkProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  color: palette.text.header,
  textDecoration: 'none',

  ':hover': {
    ...createHoverStyles(),
  },

  [down('md')]: {
    width: 'fit-content',
    color: palette.text.light,
  },
});

export { createHeaderLinkWrapperStyles };
