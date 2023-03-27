import { useLocation } from 'react-router-dom';
import ExpandableList from '../ExpandableList';
import { SectionItem } from '../Header';
import HeaderLink from '../HeaderLink';

interface SectionProps {
  section: SectionItem;
}

const Section = ({ section }: SectionProps) => {
  const { name, url = '', children } = section;

  const location = useLocation();
  const isChosen = location.pathname === url;
  const hasChildren = !!children;
  const linkContent = isChosen ? <b>{name}</b> : name;

  return hasChildren ? (
    <ExpandableList name={name} items={children} />
  ) : (
    <HeaderLink url={url}>{linkContent}</HeaderLink>
  );
};

export default Section;
