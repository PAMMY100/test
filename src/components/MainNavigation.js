import { NavLink, Link, useSearchParams } from 'react-router-dom'
import styles from './MainNavigation.module.css'
import Button from './ui/Button'
import { useSelector } from 'react-redux'



export default function MainNavigation () {
  const [searchParams] = useSearchParams();
  const count = useSelector(state => state.cart.totalQuantity)
  const isLogin = searchParams.get('mode') === 'login'

  return (
    <header>
      <h1 className={styles.logo}>logo</h1>
      <ul>
        <li><NavLink to='/' className={({isActive}) => isActive ? styles.active : undefined} end>HOME</NavLink></li>
        <li><NavLink to='/gallery' className={({isActive}) => isActive ? styles.active : undefined}>GALLERY</NavLink></li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? styles.active : undefined}>ABOUT</NavLink></li>
        <li><NavLink to='/contact' className={({isActive}) => isActive ? styles.active : undefined}>CONTACT</NavLink></li>
      </ul>
      <p>
        <Link to="/auth?mode=login"><Button>{isLogin ? 'Signup' : 'Login'}</Button></Link>
        <Link to='/cart'><Button>Cart {count > 0 && (count)}</Button></Link>
      </p>
    </header>
  )
}