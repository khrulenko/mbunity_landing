import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactPageWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',

    width: '100%',

    [down('md')]: {
      gap: '20px',

      width: 'fit-content',
    },
  };
};

const createContactPageHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: '700',

    [down('md')]: {
      fontSize: '24px',
    },
  };
};

const createContactPageDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    color: palette.text.secondaryDark,
    textAlign: 'center',
    fontWeight: '500',

    [down('md')]: {
      maxWidth: '184px',

      fontSize: '14px',
    },
  };
};

const createContentWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',

    padding: '10px',
    width: '100%',
    maxWidth: '1196px',

    backgroundColor: 'white',
    borderRadius: '10px',

    [down('md')]: {
      flexDirection: 'column',

      padding: '5px',
    },
  };
};

export {
  createContactPageWrapperStyles,
  createContactPageHeaderStyles,
  createContactPageDescriptionStyles,
  createContentWrapperStyles,
};
