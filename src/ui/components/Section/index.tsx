import { useLocation } from 'react-router-dom';
import { Link, styled } from '@mui/material';
import ExpandableList from '../ExpandableList';
import { SectionItem } from '../Header';
import { createLinkSectionStyles } from './styles';

interface SectionProps {
  section: SectionItem;
}

const LinkSection = styled(Link)(createLinkSectionStyles);

const Section = ({ section }: SectionProps) => {
  const { name, url, children } = section;

  const location = useLocation();
  const isChosen = location.pathname === url;
  const hasChildren = !!children;

  return hasChildren ? (
    <ExpandableList name={name} items={children} />
  ) : (
    <LinkSection href={url}>{isChosen ? <b>{name}</b> : name}</LinkSection>
  );
};

export default Section;
