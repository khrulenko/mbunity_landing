import { StackProps, TypographyProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createSubscribeWrapperStyles: StyleFunction<StackProps> = ({
  theme: {
    breakpoints: { down },
  },
}) => ({
  justifyContent: 'space-between',

  padding: '14px 14px 21px',
  width: '100%',
  maxWidth: '320px',
  height: '184px',

  backgroundColor: '#131313',
  borderRadius: '10px',

  [down('md')]: {
    maxWidth: '100%',
  },
});

const createSubscribeHeaderStyles: StyleFunction<TypographyProps> = () => ({
  textAlign: 'left',
  fontSize: '18px',
  fontWeight: '600',
});

const createSubscribeFormWrapperStyles: StyleFunction<StackProps> = () => ({
  flexDirection: 'row',
});

const createSubscribeDescriptionStyles: StyleFunction<TypographyProps> = ({
  theme: { palette },
}) => ({
  maxWidth: '270px',

  textAlign: 'left',
  fontSize: '13px',
  fontWeight: '500',
  color: palette.text.light,

  opacity: '0.5',
});

export {
  createSubscribeWrapperStyles,
  createSubscribeHeaderStyles,
  createSubscribeFormWrapperStyles,
  createSubscribeDescriptionStyles,
};
