import { Outlet } from 'react-router-dom';
import { Stack, styled } from '@mui/material';
import Header from '../../patterns/Header';
import Footer from '../../patterns/Footer';
import {
  createMainLayoutWrapperStyles,
  createPageWrapperStyles,
} from './styles';

const MainLayoutWrapper = styled(Stack)(createMainLayoutWrapperStyles);
const PageWrapper = styled(Stack)(createPageWrapperStyles);

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Header />

      <PageWrapper>
        <Outlet />
      </PageWrapper>

      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
