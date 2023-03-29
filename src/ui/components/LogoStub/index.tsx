import { Typography } from '@mui/material';

interface LogoStub {
  color?: string;
  fontSize?: string;
}

// descr: this component is used as a stub instead of a logo
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
