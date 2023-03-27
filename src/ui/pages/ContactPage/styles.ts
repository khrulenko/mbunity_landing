import { StackProps, TypographyProps } from '@mui/system';
import { StyleFunction } from '../../../common/types';

const createContactPageWrapperStyles: StyleFunction<StackProps> = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',

    width: '100%',
  };
};

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
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',

    padding: '10px',
    width: '100%',
    maxWidth: '1196px',

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

export {
  createContactPageWrapperStyles,
  createContactPageHeaderStyles,
  createContactPageDescriptionStyles,
  createContentWrapperStyles,
  createContactInfoHeaderStyles,
  createContactInfoDescriptionStyles,
  createContactInfoWrapperStyles,
};
