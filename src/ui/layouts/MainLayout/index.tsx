import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from '../../patterns/Header';
import Footer from '../../patterns/Footer';

const MainLayout = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      style={{ minHeight: '100vh' }}
    >
      <Header />

      {/* TODO: create content wrapper from this stack */}
      <Stack padding="35px 0 50px 0" width="100%" alignItems="center">
        <Outlet />
      </Stack>

      <Footer />
    </Stack>
  );
};

export default MainLayout;
