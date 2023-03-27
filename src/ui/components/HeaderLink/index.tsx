import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import { createHeaderLinkWrapperStyles } from './styles';

interface HeaderLinProps {
  url: string;
  children: string | JSX.Element;
}

const HeaderLinkWrapper = styled(Link)(createHeaderLinkWrapperStyles);

const HeaderLink = ({ url, children }: HeaderLinProps) => {
  return <HeaderLinkWrapper to={url}>{children}</HeaderLinkWrapper>;
};

export default HeaderLink;
