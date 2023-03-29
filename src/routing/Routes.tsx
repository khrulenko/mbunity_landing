import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import ContactPage from '../ui/pages/ContactPage';
import { URL_CONTACT } from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      {/* descr: MainLayout is always visible and is a wrapper for nested pages that change depending on routing */}
      <Route path={'/'} element={<MainLayout />}>
        {/* descr: this route redirects the user to the contact page when the app is loaded */}
        <Route index element={<Navigate to={URL_CONTACT} />} />
        {/* descr: this route redirects the user to the contact page */}
        <Route path={URL_CONTACT} element={<ContactPage />} />

        {/* descr: this route appears instead of pages that do not yet exist */}
        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
