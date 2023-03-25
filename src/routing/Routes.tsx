import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import ContactPage from '../ui/pages/ContactPage';
import { URL_CONTACT } from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={URL_CONTACT} />} />
        <Route path={URL_CONTACT} element={<ContactPage />} />

        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
