import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const { logIn } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // handle login function
  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // invoke login function to log in with email & password
    logIn(email, password)
      .then((result) => {
        // reset the form
        form.reset();
        // redirect to from or home // have confusion with > { replace: true } <-- find out
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='container mx-auto px-6'>
      <div className='py-12 px-3 border mt-5'>
        <form onSubmit={handleLogin}>
          <label htmlFor='email'></label>
          <input
            className='border mb-2  px-1'
            type='email'
            name='email'
            id='email'
            placeholder='Enter your Email'
          />
          <br />
          <label htmlFor='pass'></label>
          <input
            className='border px-1'
            type='password'
            name='password'
            id='pass'
            placeholder='Enter Password'
          />
          <br />
          <input
            className='bg-green-400 mt-3 px-3 py-1'
            type='submit'
            value='Login'
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
