import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactInfoWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    justifyContent: 'space-between',

    padding: '40px',
    width: '100%',
    maxWidth: '491px',
    height: '647px',

    backgroundColor: 'black',
    borderRadius: '10px',

    '& svg': {
      color: 'white',
    },

    [down('md')]: {
      justifyContent: 'start',
      gap: '12px',

      padding: '15px 40px 25px 40px',
      height: '397px',
    },
  };
};

const createContactInfoHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    color: palette.text.light,
    fontSize: '28px',
    fontWeight: '700',

    [down('md')]: {
      textAlign: 'center',
      fontSize: '20px',
    },
  };
};

const createContactInfoDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    color: palette.text.secondaryLight,
    fontSize: '18px',

    [down('md')]: {
      textAlign: 'center',
      fontSize: '11px',
    },
  };
};

export {
  createContactInfoWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
};
