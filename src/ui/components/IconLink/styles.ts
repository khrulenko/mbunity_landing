import { LinkProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createIconLinkWrapperStyles: StyleFunction<LinkProps> = () => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '0',
    width: '30px',
    height: '30px',

    cursor: 'pointer',

    backgroundColor: '#1B1B1B',
    borderRadius: '50%',

    svg: {
      width: '15px',
      height: '15px',
      fill: 'white',
    },

    ':hover': {
      backgroundColor: 'white',

      svg: {
        fill: 'black',
      },
    },
  };
};

export { createIconLinkWrapperStyles };
