import { useLocation } from 'react-router-dom';
import { Link } from '@mui/material';
import ExpandableList from '../ExpandableList';
import { SectionItem } from '../Header';

interface SectionProps {
  section: SectionItem;
}

const Section = ({ section }: SectionProps) => {
  const { name, url, children } = section;

  const location = useLocation();
  const isChosen = location.pathname === url;
  const hasChildren = !!children;

  return hasChildren ? (
    <ExpandableList name={name} items={children} />
  ) : (
    <Link href={url}>{isChosen ? <b>{name}</b> : name}</Link>
  );
};

export default Section;
