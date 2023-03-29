import { CollapseProps, StackProps } from '@mui/material';
import { StyleFunction } from '../../../common/types';
import { createHoverStyles } from '../../../common/utils';

const createExpandableListWrapperStyles: StyleFunction<CollapseProps> = () => ({
  width: 'fit-content',
});

const createListTriggerStyles: StyleFunction<StackProps> = () => ({
  position: 'relative',

  flexDirection: 'row',

  cursor: 'pointer',

  ':hover': {
    ...createHoverStyles(),
  },
});

const createCollapsingListStyles: StyleFunction<CollapseProps> = () => ({
  position: 'relative',
  left: '10%',
});

export {
  createExpandableListWrapperStyles,
  createCollapsingListStyles,
  createListTriggerStyles,
};
