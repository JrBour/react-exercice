import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import { addProfile, getCurrentUser } from '../store/users'

const pathsNotCheck = ['/login', '/register'];

const Auth = Component => {
  const Layout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector(getCurrentUser)

    useEffect(() => {
      if (!pathsNotCheck.includes(location.pathname)) {
        if (!Cookies.get('jwt')) {
          history.push('/login')
          return;
        }
        if (user === null) {
          const payload = jwt.decode(Cookies.get('jwt'))
          delete payload.iat
          dispatch(addProfile(payload))
        }
        return;
      }

      if (Cookies.get('jwt')) {
        history.push('/posts')
        return;
      }
    }, [])
    
    return (
      <>
        <Header />
        <Component/>
      </>
    )
  }
  return Layout
}


export default Auth;
