import { CollapseProps } from '@mui/material';
import { StyleFunction } from '../../common/types';

const createCollapsingListStyles: StyleFunction<CollapseProps> = () => {
  return {
    position: 'relative',
    left: '10%',
  };
};

export { createCollapsingListStyles };
