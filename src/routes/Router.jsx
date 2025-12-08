import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import KioskLayout from '@layouts/KioskLayout';
import AdminLayout from '@layouts/AdminLayout';
import MobileLayout from '@layouts/MobileLayout';

const StorePage = lazy(() => import('@pages/store/StorePage'));

const ProductManagePage = lazy(() => import('@pages/admin/ProductManagePage'));
const PaymentHistoryPage = lazy(() => import('@pages/admin/PaymentHistoryPage'));
const IssueTrackerPage = lazy(() => import('@pages/admin/IssueTrackerPage'));
const LoginPage = lazy(() => import('@pages/admin/LoginPage'));

const MobileMainPage = lazy(() => import('@pages/mobile/MobileMainPage'));
const SearchPage = lazy(() => import('@pages/mobile/SearchPage'));
const OptionPage = lazy(() => import('@pages/mobile/OptionPage'));
const AddressPage = lazy(() => import('@pages/mobile/AddressPage'));
const DeliveryPage = lazy(() => import('@pages/mobile/DeliveryPage'));
const RefundPage = lazy(() => import('@pages/mobile/RefundPage'));

const NotFoundPage = lazy(() => import('@pages/NotFound/NotFound'));

const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '16px',
      color: '#666',
    }}
  >
    페이지를 불러오는 중...
  </div>
);

export default function AppRouter() {
  const kioskRoutes = [
    { path: 'store', element: <StorePage /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  const adminRoutes = [
    { path: 'products', element: <ProductManagePage /> },
    { path: 'payments', element: <PaymentHistoryPage /> },
    { path: 'issues', element: <IssueTrackerPage /> },
    { path: 'login', element: <LoginPage /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  const mobileRoutes = [
    { path: '', element: <MobileMainPage /> },
    { path: 'option', element: <OptionPage /> },
    { path: 'search', element: <SearchPage /> },
    { path: 'address', element: <AddressPage /> },
    { path: 'delivery', element: <DeliveryPage /> },
    { path: 'refund', element: <RefundPage /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Navigate to='/kiosk/store' replace />} />
          <Route path='/kiosk/*' element={<KioskLayout />}>
            {kioskRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>

          <Route path='/admin/*' element={<AdminLayout />}>
            {adminRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>

          <Route path='/mobile/*' element={<MobileLayout />}>
            {mobileRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
