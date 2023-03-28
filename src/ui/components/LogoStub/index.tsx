import { Typography } from '@mui/material';

interface LogoStub {
  color?: string;
  fontSize?: string;
}

const LogoStub = ({ color = 'text.primary', fontSize = '24px' }) => {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight="800"
      lineHeight="32px"
      color={color}
    >
      Logo
    </Typography>
  );
};

export default LogoStub;
