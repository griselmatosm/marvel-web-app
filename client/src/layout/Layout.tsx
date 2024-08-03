/* eslint-disable react/react-in-jsx-scope */
import { Header } from "../components/Header"

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

