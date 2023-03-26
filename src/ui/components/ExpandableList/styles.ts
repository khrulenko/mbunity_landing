import { CollapseProps, StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';

const createExpandableListWrapperStyles: StyleFunction<CollapseProps> = () => {
  return {
    width: 'fit-content',
  };
};

const createListTriggerStyles: StyleFunction<StackProps> = () => {
  return {
    position: 'relative',

    flexDirection: 'row',

    cursor: 'pointer',

    ':hover': {
      '::before': {
        content: "' '",

        position: 'absolute',
        transform: 'scale(1.2)',

        width: '100%',
        height: '100%',

        background: 'black',
        borderRadius: '8px',
        opacity: '0.1',
      },
    },
  };
};

const createCollapsingListStyles: StyleFunction<CollapseProps> = () => {
  return {
    position: 'relative',
    left: '10%',
  };
};

export {
  createExpandableListWrapperStyles,
  createCollapsingListStyles,
  createListTriggerStyles,
};
