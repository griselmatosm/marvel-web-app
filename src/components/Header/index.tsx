/* eslint-disable react/react-in-jsx-scope */
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { useLoading } from '../../contexts/LoadingContext'
import styles from './Header.module.css'

interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const { isLoading } = useLoading()

  return (
    <header className={cx(styles.headerContainer, { [styles.isLoading]: isLoading })}>
      <Link to="/">
        <img src='/marvel_logo.png' alt='marvel logo' />
      </Link>
      {children}
    </header>
  )
}