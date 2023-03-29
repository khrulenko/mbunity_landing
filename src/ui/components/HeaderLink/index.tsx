import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import { createHeaderLinkWrapperStyles } from './styles';

interface HeaderLinProps {
  url: string;
  children: string | JSX.Element | JSX.Element[];
}

const HeaderLinkWrapper = styled(Link)(createHeaderLinkWrapperStyles);

const HeaderLink = ({ url, children }: HeaderLinProps) => {
  return (
    // descr: preventDefault in onMouseDown allows
    // the link to fire before onBlur fires
    // on the parent component - ExpandableList
    <HeaderLinkWrapper to={url} onMouseDown={(e) => e.preventDefault()}>
      {children}
    </HeaderLinkWrapper>
  );
};

export default HeaderLink;
