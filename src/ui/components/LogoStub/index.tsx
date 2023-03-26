import { Typography } from '@mui/material';

interface LogoStub {
  color: string;
}

const LogoStub = ({ color = 'text.primary' }) => {
  return (
    <Typography
      fontSize="24px"
      fontWeight="800"
      lineHeight="32px"
      color={color}
    >
      Logo
    </Typography>
  );
};

export default LogoStub;
