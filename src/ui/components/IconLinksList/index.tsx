import { Stack, styled } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconLink from '../IconLink';
import { createIconLinksListWrapperStyles } from './styles';
import { ReactComponent as Discord } from './discord.svg';

const IconLinksListWrapper = styled(Stack)(createIconLinksListWrapperStyles);

const IconLinksList = () => {
  return (
    <IconLinksListWrapper>
      <IconLink title="Twitter" href="https://twitter.com/">
        <TwitterIcon />
      </IconLink>

      <IconLink title="Instagram" href="https://www.instagram.com/">
        <InstagramIcon />
      </IconLink>

      <IconLink title="Discord" href="https://discord.com/">
        <Discord />
      </IconLink>
    </IconLinksListWrapper>
  );
};

export default IconLinksList;
