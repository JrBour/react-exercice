import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import { addProfile } from '../store/users'

const Auth = Component => {
  const Layout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      if (!Cookies.get('jwt')) {
        history.push('/login')
        return;
      }
      const payload = jwt.decode(Cookies.get('jwt'))
      delete payload.iat
      dispatch(addProfile(payload))
    })
    
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
