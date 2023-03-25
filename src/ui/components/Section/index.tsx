import { Link } from '@mui/material';
import ExpandableList from '../ExpandableList';
import { SectionItem } from '../Header';

interface SectionProps {
  section: SectionItem;
}

const Section = ({ section }: SectionProps) => {
  const { name, path, children } = section;

  const hasChildren = !!children;

  return hasChildren ? (
    <ExpandableList name={name} items={children} />
  ) : (
    <Link href={path}>{name}</Link>
  );
};

export default Section;
