import { Tooltip, Link, styled } from '@mui/material';
import { createIconLinkWrapperStyles } from './styles';

interface IconLinkProps {
  title: string;
  href: string;
  children: JSX.Element;
}

const IconLinkWrapper = styled(Link)(createIconLinkWrapperStyles);

const IconLink = ({ title, href, children }: IconLinkProps) => {
  return (
    <Tooltip title={title} placement="top" followCursor>
      <IconLinkWrapper href={href} target="blank">
        {children}
      </IconLinkWrapper>
    </Tooltip>
  );
};

export default IconLink;
