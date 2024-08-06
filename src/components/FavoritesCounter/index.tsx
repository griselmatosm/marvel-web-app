/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { useFavorites } from '../../contexts/FavoritesContext'
import { HeartIconFilled } from "../Icon"
import { IconWithCounter } from '../IconWithCounter'

export const FavoritesCounter = () => {
  const { favorites } = useFavorites()
  return (
    <Link to="/favorites">
      <IconWithCounter count={favorites.length} >
        <HeartIconFilled color='var(--color-primary)' size={24} />
      </IconWithCounter>
    </Link>
  )
}