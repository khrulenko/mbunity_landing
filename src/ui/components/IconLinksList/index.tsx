import { Stack, styled } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import IconLink from '../IconLink';
import { createIconLinksListWrapperStyles } from './styles';

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

      <IconLink title="Discort" href="https://discord.com.ua/">
        <SmartToyIcon />
      </IconLink>
    </IconLinksListWrapper>
  );
};

export default IconLinksList;
