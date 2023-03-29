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

// descr: MainLayout is the main structure of the page,
// inside which different pages are displayed, depending on the routing
const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Header />

      <PageWrapper>
        {/* descr: Outlet is content (pages) that change depending on routing */}
        <Outlet />
      </PageWrapper>

      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
