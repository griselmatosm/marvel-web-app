/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { Layout } from './layout/Layout';

const App = () => {
  return (
    <FavoritesProvider>
      <LoadingProvider>
        <Layout>
          <Outlet />
        </Layout>
      </LoadingProvider>
    </FavoritesProvider>
  )
}

export default App
