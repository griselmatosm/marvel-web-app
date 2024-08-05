/* eslint-disable react/react-in-jsx-scope */
import styles from './IconWithCounter.module.css'

interface IconWithCounterProps {
  children: React.ReactNode
  count: number
}

export const IconWithCounter = ({ children, count }: IconWithCounterProps) => {
  return (
    <div className={styles.iconWithCounter}>
      {children}
      <span className={styles.counter}>{count}</span>
    </div>
  )
}
