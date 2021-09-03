import { useAppDispatch } from '../app/hooks'
import { login, logout, User} from '../services/authSlice'

// _rafce
const Login = () => {
  const dispatch = useAppDispatch()

  const loginHandler = () => {
    const user: User = { name: 'Ying', age: 31, email: 'ying@gmail.com' }
    dispatch(login(user))
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      
      <button onClick={logoutHandler}>Logout</button>
      
    </div>
  )
}

export default Login
