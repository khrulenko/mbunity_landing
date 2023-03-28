import { ContactsListWrapperProps } from '.';
import { StyleFunction } from '../../../common/types';

const createContactsListWrapperStyles: StyleFunction<
  ContactsListWrapperProps
> = ({
  theme: {
    breakpoints: { down },
  },
  gap,
  alignStyle,
}) => {
  const isLeft = alignStyle === 'left';

  return {
    gap,

    [down('md')]: {
      alignItems: isLeft ? 'start' : 'center',
      gap: '15px',

      maxWidth: isLeft ? '145px' : '100%',
      textAlign: isLeft ? 'left' : 'center',
    },
  };
};

export { createContactsListWrapperStyles };
