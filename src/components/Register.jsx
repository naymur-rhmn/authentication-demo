import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

function Register() {
  const { signUp } = useContext(UserContext);
  // handle submit
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.text.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // invoke signUp function to create user with email & password
    signUp(email, password)
      .then((res) => alert('Sign up success!'))
      .catch((error) => console.log(error));
    event.target.reset();
  }

  return (
    <div className='container mx-auto px-6'>
      <div className='py-12 px-3 border mt-5'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='text'></label>
          <input
            className='border mb-2 px-1'
            type='text'
            name='text'
            id='text'
            placeholder='Enter your Name'
          />
          <br />
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
            value='Register'
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
