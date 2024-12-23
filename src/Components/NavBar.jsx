
import { useContext } from 'react'
import logo from '../assets/Logo.png'
import { AuthContext } from '../AuthProvider/AuthContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='navbar bg-base-100 shadow-sm container px-10 mx-auto  '>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-14' src={logo} alt='' />
          
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/AllVolunteer'>All volunteer Need posts</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addVolunteer' className='justify-between'>
                Add Volunteer need Post
                </Link>
              </li>
              <li>
                <Link to='/myPost'>Manage My Posts</Link>
              </li>
             
              
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
