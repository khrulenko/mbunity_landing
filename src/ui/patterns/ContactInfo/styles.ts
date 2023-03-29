import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactInfoWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  position: 'relative',
  justifyContent: 'space-between',

  padding: '40px',
  width: '100%',
  maxWidth: '491px',
  height: '647px',

  backgroundColor: 'black',
  borderRadius: '10px',

  overflow: 'hidden',

  '& svg': {
    color: palette.text.light,
  },

  [down('md')]: {
    justifyContent: 'start',
    gap: '12px',

    padding: '15px 40px 25px 40px',
    height: '397px',
  },
});

const createContactInfoHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  color: palette.text.light,
  fontSize: '28px',
  fontWeight: '700',

  [down('md')]: {
    textAlign: 'center',
    fontSize: '20px',
  },
});

const createContactInfoDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
}) => ({
  color: palette.text.secondaryLight,
  fontSize: '18px',

  [down('md')]: {
    textAlign: 'center',
    fontSize: '11px',
  },
});

const createSmallCircleStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  position: 'absolute',
  left: '60%',
  top: '70%',

  width: '138px',
  height: '138px',

  backgroundColor: 'rgba(72, 72, 72, 0.5)',
  borderRadius: '50%',

  [down('md')]: {
    left: '80%',
    top: '75%',

    width: '54px',
    height: '54px',
  },
});

const createLargeCircleStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  position: 'absolute',
  left: '70%',
  top: '75%',

  width: '269px',
  height: '269px',

  backgroundColor: 'rgba(72, 72, 72, 0.5)',
  borderRadius: '50%',

  [down('md')]: {
    left: '80%',

    width: '192px',
    height: '192px',
  },
});

export {
  createContactInfoWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
  createSmallCircleStyles,
  createLargeCircleStyles,
};
