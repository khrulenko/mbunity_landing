import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createContactInfoWrapperStyles: StyleFunction<StackProps> = () => {
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
  };
};

const createContactInfoHeaderStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => {
  return {
    color: palette.text.light,
    fontSize: '28px',
    fontWeight: '700',
  };
};

const createContactInfoDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => {
  return {
    color: palette.text.secondaryLight,
    fontSize: '18px',
  };
};

export {
  createContactInfoWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
};
