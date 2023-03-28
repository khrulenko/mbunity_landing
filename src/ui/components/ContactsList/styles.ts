import { ContactsListWrapperProps } from '.';
import { StyleFunction } from '../../../common/types';

const createContactsListWrapperStyles: StyleFunction<
  ContactsListWrapperProps
> = ({
  theme: {
    breakpoints: { down },
  },
  gap,
}) => {
  return {
    gap,

    [down('md')]: {
      alignItems: 'center',
      gap: '15px',
    },
  };
};

export { createContactsListWrapperStyles };
