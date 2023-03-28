import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => {
  return {
    flexDirection: 'row',
    gap: '25px',

    maxWidth: '337px',

    [down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  };
};

const createContactTextStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => {
  return {
    textAlign: 'left',
    fontSize: '16px',
    color: palette.text.light,

    [down('md')]: {
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '18px',
    },
  };
};

export { createContactWrapperStyles, createContactTextStyles };
