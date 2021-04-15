import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { addProfile } from '../store/users'

const Auth = Component => {
  const Layout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      if (!Cookies.get('jwt')) {
        history.push('/login')
      }
      // Decry
      const payload = jwt.decode(Cookies.get('jwt'))
      delete payload.iat
      dispatch(addProfile(payload))
    })
    
    return <Component/>
  }
  return Layout
}


export default Auth;
