import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@layouts/MainLayout';

const ShopPage = lazy(() => import('@pages/Shop/ShopPage'));
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
  const routes = [
    { path: 'shop', element: <ShopPage /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
