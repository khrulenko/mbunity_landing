import { ContactTextProps, ContactWrapperProps } from '.';
import { StyleFunction } from '../../../common/types';

const createContactWrapperStyles: StyleFunction<ContactWrapperProps> = ({
  theme: {
    breakpoints: { down },
  },
  alignStyle,
}) => {
  const isLeft = alignStyle === 'left';

  return {
    flexDirection: 'row',
    gap: '25px',

    maxWidth: '337px',

    [down('md')]: {
      flexDirection: 'column',
      alignItems: isLeft ? 'start' : 'center',
      gap: '10px',
    },
  };
};

const createContactTextStyles: StyleFunction<ContactTextProps> = ({
  theme: {
    palette,
    breakpoints: { down },
  },
  alignStyle,
}) => {
  const isLeft = alignStyle === 'left';

  return {
    textAlign: 'left',
    fontSize: '16px',
    color: palette.text.light,

    [down('md')]: {
      textAlign: isLeft ? 'left' : 'center',
      fontSize: '14px',
      lineHeight: '18px',
    },
  };
};

export { createContactWrapperStyles, createContactTextStyles };
