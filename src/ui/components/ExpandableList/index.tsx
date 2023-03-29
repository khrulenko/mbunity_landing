import { useEffect, useState } from 'react';
import { Stack, Collapse, styled } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SectionItems } from '../../patterns/Header';
import Section from '../Section';
import {
  createExpandableListWrapperStyles,
  createListTriggerStyles,
  createCollapsingListStyles,
} from './styles';
import { useLocation } from 'react-router-dom';

interface ExpandableListProps {
  name: string;
  items: SectionItems;
}

const ExpandableListWrapper = styled(Stack)(createExpandableListWrapperStyles);
const ListTrigger = styled(Stack)(createListTriggerStyles);
const CollapsingList = styled(Collapse)(createCollapsingListStyles);

const ExpandableList = ({ name, items }: ExpandableListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const onHandleClick = () => setIsOpen((isOpen) => !isOpen);
  // descr: isPathInsideList allows you to determine whether
  // the address of the current routing is equal to
  // one of the nested items in the list
  //and apply the appropriate styles to the list
  const isPathInsideList = items.some((item) => item.url === location.pathname);
  const icon = isOpen ? <ExpandLess /> : <ExpandMore />;

  // descr: this useEffect automatically closes opened ExpandableList
  // if the user goes to another page other than the current one
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <ExpandableListWrapper>
      <ListTrigger onClick={onHandleClick} onBlur={() => setIsOpen(false)}>
        <span>{isPathInsideList ? <b>{name}</b> : name}</span>

        {icon}
      </ListTrigger>

      <CollapsingList in={isOpen} timeout={0}>
        {items.map((item) => (
          <Section key={item.name} section={item} />
        ))}
      </CollapsingList>
    </ExpandableListWrapper>
  );
};

export default ExpandableList;
