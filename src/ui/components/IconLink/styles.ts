import { LinkProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createIconLinkWrapperStyles: StyleFunction<LinkProps> = ({
  theme: { palette },
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0',
  width: '30px',
  height: '30px',

  cursor: 'pointer',

  backgroundColor: palette.background.secondary,
  borderRadius: '50%',

  svg: {
    width: '15px',
    height: '15px',
    fill: palette.text.light,
  },

  ':hover': {
    backgroundColor: palette.text.light,

    svg: {
      fill: palette.text.primary,
    },
  },
});

export { createIconLinkWrapperStyles };
