/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img src='/marvel_logo.png' alt='marvel logo' />
      </Link>
      {children}
    </header>
  )
}