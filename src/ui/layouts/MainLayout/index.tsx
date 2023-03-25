import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from '../../components/Header';

const MainLayout = () => {
  return (
    <Stack padding="40px 100px" alignItems="center">
      <Header />

      <Outlet />
    </Stack>
  );
};

export default MainLayout;
