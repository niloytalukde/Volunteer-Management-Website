import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Loading from '../Components/Loading'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <Loading></Loading>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute
