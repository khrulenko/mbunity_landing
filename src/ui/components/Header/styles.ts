import { StackProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createHeaderWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    maxWidth: '1440px',
  };
};

const createSectionsIconsWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    gap: '60px',

    width: '100%',
    maxWidth: '680px',
  };
};

const createSectionsWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
    maxWidth: '560px',
    maxHeight: '24px',
  };
};

const createIconsWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '36px',

    maxWidth: '98px',
  };
};

export {
  createHeaderWrapperStyles,
  createSectionsIconsWrapperStyles,
  createSectionsWrapperStyles,
  createIconsWrapperStyles,
};
