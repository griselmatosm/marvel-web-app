/* eslint-disable react/react-in-jsx-scope */
import { FavoritesCounter } from '../components/FavoritesCounter'
import { Header } from "../components/Header"

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header>
        <FavoritesCounter />
      </Header>
      <main style={{ padding: "48px 48px 0" }}>
        {children}
      </main>
    </>
  )
}

