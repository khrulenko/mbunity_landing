import { useState } from 'react';
import { Stack, Collapse, styled } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SectionItems } from '../Header';
import Section from '../Section';
import { createCollapsingListStyles } from './styles';

interface ExpandableListProps {
  name: string;
  items: SectionItems;
}

const CollapsingList = styled(Collapse)(createCollapsingListStyles);

const ExpandableList = ({ name, items }: ExpandableListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onHandleClick = () => setIsOpen((isOpen) => !isOpen);

  const icon = isOpen ? <ExpandLess /> : <ExpandMore />;

  return (
    <Stack>
      <Stack direction="row" onClick={onHandleClick}>
        <span>{name}</span>

        {icon}
      </Stack>

      <CollapsingList in={isOpen} timeout="auto" unmountOnExit>
        {items.map((item) => (
          <Section key={item.name} section={item} />
        ))}
      </CollapsingList>
    </Stack>
  );
};

export default ExpandableList;
