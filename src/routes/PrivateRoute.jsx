import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />
}

export default PrivateRoute