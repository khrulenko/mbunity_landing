import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import IconLink from '../IconLink';

const IconLinksList = () => {
  return (
    <Stack direction="row" gap="24px">
      <IconLink title="Twitter" href="https://twitter.com/">
        <TwitterIcon />
      </IconLink>

      <IconLink title="Instagram" href="https://www.instagram.com/">
        <InstagramIcon />
      </IconLink>

      <IconLink title="Discort" href="https://discord.com.ua/">
        <SmartToyIcon />
      </IconLink>
    </Stack>
  );
};

export default IconLinksList;
