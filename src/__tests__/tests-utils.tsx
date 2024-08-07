
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import { LoadingProvider } from '../contexts/LoadingContext';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LoadingProvider>
      <FavoritesProvider>
        <Router>
          {children}
        </Router>
      </FavoritesProvider>
    </LoadingProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react';
export { customRender as render };

