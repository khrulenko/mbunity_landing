import { LinkProps } from 'react-router-dom';
import { StyleFunction } from '../../../common/types';

const createHeaderLinkWrapperStyles: StyleFunction<LinkProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',

    color: palette.text.header,
    textDecoration: 'none',

    ':hover': {
      '::before': {
        content: "' '",

        position: 'absolute',
        transform: 'scale(1.2)',

        width: '100%',
        height: '100%',

        background: 'black',
        borderRadius: '8px',
        opacity: '0.1',
      },
    },

    [down('md')]: {
      width: 'fit-content',
      color: palette.text.light,
    },
  };
};

export { createHeaderLinkWrapperStyles };
