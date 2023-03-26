import { StackProps, TypographyProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createContactPageHeaderStyles: StyleFunction<TypographyProps> = () => {
  return {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: '700',
  };
};

const createContactPageDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => {
  return {
    color: palette.text.secondaryDark,
    textAlign: 'center',
  };
};

const createContentWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    padding: '10px',

    backgroundColor: 'white',
    borderRadius: '10px',
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

const createContactInfoWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    justifyContent: 'space-between',

    padding: '40px',
    maxWidth: '491px',
    height: '647px',

    backgroundColor: 'black',
    borderRadius: '10px',

    '& svg': {
      color: 'white',
    },
  };
};

export {
  createContactPageHeaderStyles,
  createContactPageDescriptionStyles,
  createContentWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
  createContactInfoWrapperStyles,
};
