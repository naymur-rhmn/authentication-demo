import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

function Header() {
  const { user, logOut } = useContext(UserContext);

  return (
    <header className=' bg-green-600 h-20 flex items-center'>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <div className='logo'>logo</div>
        <nav className='nav'>
          <ul className='flex gap-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
        {/*  */}
        <div>
          {user ? (
            <div>
              <span>{user.email}</span>{' '}
              <button onClick={() => logOut()} className='border px-3 py-1'>
                log out
              </button>
            </div>
          ) : (
            <Link to='/register' className='border px-3 py-1'>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
