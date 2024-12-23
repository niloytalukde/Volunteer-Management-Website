import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Loding from '../Components/Loding'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <Loding></Loding>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute
