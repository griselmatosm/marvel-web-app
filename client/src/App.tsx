/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { Layout } from './layout/Layout';

const App = () => {
  return (
    <FavoritesProvider>
      <Layout>
        <Outlet />
      </Layout>
    </FavoritesProvider>
  )
}

export default App
