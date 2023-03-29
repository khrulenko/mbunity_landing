import { useLocation } from 'react-router-dom';
import ExpandableList from '../ExpandableList';
import { SectionItem } from '../../patterns/Header';
import HeaderLink from '../HeaderLink';

interface SectionProps {
  section: SectionItem;
}

const Section = ({ section }: SectionProps) => {
  const { name, url = '', children } = section;

  const location = useLocation();
  // descr: isChosen allows you to determine whether the current menu item (section)
  // is active according to the current routing
  const isChosen = location.pathname === url;
  const hasChildren = !!children;
  const linkContent = isChosen ? <b>{name}</b> : name;

  // descr: conditional rendering allows you to create different components
  //  depending on the presence of nested items in the menu item
  return hasChildren ? (
    <ExpandableList name={name} items={children} />
  ) : (
    <HeaderLink url={url}>{linkContent}</HeaderLink>
  );
};

export default Section;
